// Annoto newsletter → Brevo (Cloudflare Worker) — replaces the SendGrid Marketing bridge.
// Adds the subscriber to Brevo via the DOUBLE-OPT-IN flow (GDPR-friendly, better deliverability)
// and captures consent metadata (timestamp, IP, source page, opt-in wording) as Brevo attributes.
//
// ── WHAT YOU DO IN BREVO FIRST ────────────────────────────────────────────────
//   1. Create the account, then authenticate a dedicated MARKETING sending subdomain
//      (e.g. news.annoto.net) — SPF + DKIM + DMARC. Do NOT send from the bare root domain.
//   2. Contacts → Lists → create "Newsletter" (note its numeric List ID).
//   3. Create the DOI (double opt-in) confirmation email:
//        Campaigns → Templates → create a template, then Contacts → Forms/DOI settings,
//        note the DOI template's numeric ID. It must contain the {{ doubleOptin }} confirm link.
//   4. Contacts → Settings → Attributes: add text attributes
//        SIGNUP_TS, SIGNUP_IP, SIGNUP_SOURCE, OPTIN_TEXT   (and FIRSTNAME/LASTNAME already exist).
//   5. SMTP & API → API Keys → create a key (scoped to Contacts).
//
// ── DEPLOY (Cloudflare) ───────────────────────────────────────────────────────
//   dash.cloudflare.com → Workers & Pages → Create → Worker → paste → Deploy.
//   Settings → Variables (encrypt all):
//        BREVO_API_KEY          = your Brevo API key
//        BREVO_LIST_ID          = numeric Newsletter list id (e.g. 7)
//        BREVO_DOI_TEMPLATE_ID  = numeric DOI template id (e.g. 12)
//        BREVO_REDIRECT_URL     = https://www.annoto.net/newsletter-confirmed  (a thank-you page)
//        OPTIN_TEXT             = the exact opt-in wording shown next to the form
//        NEWSLETTER_FORM_NAME   = (optional) only act on this Webflow form name; blank = accept all
//   Send me the Worker URL — I point the site's newsletter form/script at it.
//
// Accepts EITHER a direct JSON POST {email, name?, source?} (front-end fetch)
// OR a Webflow native form-submission webhook payload — it finds the email in both.

const BREVO_DOI = 'https://api.brevo.com/v3/contacts/doubleOptinConfirmation';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') return json({ error: 'method not allowed' }, 405, cors);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'bad request' }, 400, cors); }

    // Optional form-name scoping: if this Worker is a Webflow webhook receiving ALL forms,
    // only process the newsletter form. Direct fetches (no form name) always pass.
    const formName = pick(body, ['name']) || body?.payload?.name || body?.data?.name;
    if (env.NEWSLETTER_FORM_NAME && formName && formName !== env.NEWSLETTER_FORM_NAME) {
      return json({ ok: true, ignored: 'other form' }, 200, cors);
    }

    const email = normalizeEmail(findEmail(body));
    if (!email || !EMAIL_RE.test(email)) return json({ error: 'valid email required' }, 400, cors);

    const name = findField(body, ['name', 'Name', 'fullname', 'Full-Name', 'full_name']) || '';
    const [firstName, ...rest] = String(name).trim().split(/\s+/);
    const source = findField(body, ['source', 'Source', 'page', 'url']) ||
      request.headers.get('Referer') || '';

    const attributes = {
      SIGNUP_TS: new Date().toISOString(),
      SIGNUP_IP: request.headers.get('CF-Connecting-IP') || '',
      SIGNUP_SOURCE: String(source).slice(0, 300),
      OPTIN_TEXT: env.OPTIN_TEXT || 'Subscribed via the Annoto website newsletter form',
    };
    if (firstName) attributes.FIRSTNAME = firstName;
    if (rest.length) attributes.LASTNAME = rest.join(' ');

    const payload = {
      email,
      attributes,
      includeListIds: [Number(env.BREVO_LIST_ID)],
      templateId: Number(env.BREVO_DOI_TEMPLATE_ID),
      redirectionUrl: env.BREVO_REDIRECT_URL,
    };

    let r;
    try {
      r = await fetch(BREVO_DOI, {
        method: 'POST',
        headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      return json({ error: 'upstream unreachable' }, 502, cors);
    }

    // 201/204 = DOI email queued. Treat an already-confirmed/duplicate contact as success
    // so returning subscribers see a friendly result instead of an error.
    if (r.status < 300) return json({ ok: true, pending: true }, 200, cors);
    const text = await r.text().catch(() => '');
    if (/already|exist|duplicate/i.test(text)) return json({ ok: true, existing: true }, 200, cors);
    // Log server-side detail (visible in Worker logs) but don't echo Brevo internals to the browser.
    console.log('brevo error', r.status, text);
    return json({ error: 'subscription failed' }, 502, cors);
  },
};

// Pull an email out of a plain {email}, a Webflow webhook, or any nested form payload.
function findEmail(body) {
  const direct = pick(body, ['email', 'Email', 'EMAIL', 'email-address', 'Email-Address']);
  if (direct) return direct;
  const data = body?.payload?.data || body?.data || body?.fields;
  const fromData = data && pick(data, ['email', 'Email', 'EMAIL', 'email-address', 'Email-Address']);
  if (fromData) return fromData;
  // Last resort: scan every string value for something that looks like an email.
  return scan(body);
}
function findField(body, keys) {
  return pick(body, keys) || pick(body?.payload?.data || body?.data || body?.fields || {}, keys) || '';
}
function pick(obj, keys) {
  if (!obj || typeof obj !== 'object') return '';
  for (const k of keys) if (obj[k] != null && obj[k] !== '') return obj[k];
  return '';
}
function scan(obj, depth = 0) {
  if (!obj || typeof obj !== 'object' || depth > 4) return '';
  for (const v of Object.values(obj)) {
    if (typeof v === 'string' && EMAIL_RE.test(v)) return v;
    if (typeof v === 'object') { const found = scan(v, depth + 1); if (found) return found; }
  }
  return '';
}
function normalizeEmail(e) { return e ? String(e).trim().toLowerCase() : ''; }
function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', ...cors } });
}
