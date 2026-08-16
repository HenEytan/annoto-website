# Newsletter → Brevo migration

**Decision:** move the newsletter list off **SendGrid Marketing** to **Brevo** (EU‑hosted/GDPR, sent‑based pricing that suits a ~monthly cadence, native double‑opt‑in API). SendGrid **stays** for transactional/app email — this is a marketing‑list move, not a decommission.

Code: [`newsletter-brevo-worker.js`](newsletter-brevo-worker.js) (Cloudflare Worker, replaces `sendgrid-worker.js`).

---

## A. Brevo account setup (you do this once)

1. Create the Brevo account.
2. **Authenticate a dedicated marketing subdomain** — e.g. `news.annoto.net` (Senders, Domains & IPs). Add SPF + DKIM + DMARC (DMARC at least `p=none` with alignment passing). Never send bulk from the bare root domain.
3. **Contacts → Lists →** create `Newsletter`. Note its numeric **List ID**.
4. **Create the DOI confirmation email** (double opt‑in template) containing the `{{ doubleOptin }}` confirm link. Note its numeric **Template ID**.
5. **Contacts → Settings → Attributes:** add text attributes `SIGNUP_TS`, `SIGNUP_IP`, `SIGNUP_SOURCE`, `OPTIN_TEXT`.
6. **SMTP & API → API Keys:** create a key. This is `BREVO_API_KEY`.
7. Create a simple thank‑you page (e.g. `/newsletter-confirmed`) for `BREVO_REDIRECT_URL`.

## B. Deploy the Worker

Cloudflare → Workers & Pages → Create → paste `newsletter-brevo-worker.js` → Deploy. Set encrypted variables:

| Var | Value |
|---|---|
| `BREVO_API_KEY` | your Brevo API key |
| `BREVO_LIST_ID` | numeric Newsletter list id |
| `BREVO_DOI_TEMPLATE_ID` | numeric DOI template id |
| `BREVO_REDIRECT_URL` | `https://www.annoto.net/newsletter-confirmed` |
| `OPTIN_TEXT` | exact opt‑in wording shown by the form |
| `NEWSLETTER_FORM_NAME` | *(optional)* only act on this Webflow form name; blank = accept all |

Then send me the Worker URL — I point the newsletter form at it. Flow: form → Worker (adds consent metadata) → Brevo DOI email → user confirms → lands in `Newsletter` list → welcome automation fires.

## C. Automation (two layers — deliberate)

**Layer 1 — email sequences live in Brevo, never in n8n** (relaying bulk mail through an orchestrator wrecks deliverability):
- Automation trigger: *contact added to `Newsletter` list* (i.e. DOI‑confirmed).
- Welcome series → delay → drip. Add an **engagement‑based sunset** flow (stop mailing / re‑permission contacts with no opens‑clicks in 6–12 months).

**Layer 2 — n8n as thin glue only** (self‑host on EU infra for GDPR + unlimited executions):
```
Brevo webhook (contact added / unsubscribed / bounced)
  → n8n Webhook node
    → HubSpot: upsert contact (email + consent attributes)
    → IF unsubscribed/bounced → HubSpot: set marketing status = unsubscribed  (two‑way sync)
    → Slack: alert on new confirmed signup            (optional)
    → Error branch → retry + dead‑letter store        (so no signup is silently lost)
```
Unsubscribe/preference state stays **owned by Brevo** — n8n only mirrors it into HubSpot. I can build this in your n8n via the n8n MCP once the Brevo account + HubSpot creds are connected there.

## D. Migration from SendGrid (ordered)

1. Export contacts: Marketing → Contacts → the Newsletter list → Export (or API `POST /v3/marketing/contacts/exports`).
2. **Export all five suppression buckets** (compliance‑critical): global unsubscribes, the **unsubscribe group** where campaign opt‑outs live (`/v3/asm/groups/{id}/suppressions`), spam reports, hard bounces, invalid emails. Merge + dedupe (lowercased) into one do‑not‑email file.
3. Clean the active list: drop hard bounces, invalids, role addresses, 12‑mo unengaged. Optional validation pass (ZeroBounce/Kickbox).
4. In Brevo: **import suppressions FIRST** as unsubscribed (never tick "set all subscribed"). Then import cleaned active contacts as already‑confirmed (do **not** force existing consented subscribers back through DOI).
5. Repoint the Worker to Brevo (done — this file). Run old + new in parallel briefly to validate.
6. **Warm up:** don't blast the full list day one from the fresh subdomain. Ramp over 2–8 weeks, most‑engaged first. Set up Google Postmaster Tools + a DMARC RUA mailbox day one; keep spam rate < 0.3% (ideally < 0.1%).
7. Cut over: retire SendGrid Marketing sends; keep SendGrid transactional only.

## E. Compliance checklist

- [ ] SPF + DKIM + DMARC on `news.annoto.net` (Microsoft/Google now hard‑reject non‑compliant bulk mail)
- [ ] Double opt‑in on (DACH consent standard + deliverability)
- [ ] Consent records stored: timestamp, IP, source URL, opt‑in wording (Worker writes these — SendGrid never did)
- [ ] Signed DPA with Brevo (auto‑included); EU data residency (France) confirmed
- [ ] One‑click List‑Unsubscribe + List‑Unsubscribe‑Post headers on every send
- [ ] Physical postal address in every footer (CAN‑SPAM — often forgotten)
- [ ] All five suppression buckets imported **before** active contacts
- [ ] Right‑to‑erasure flow available; spam rate + DMARC reports monitored
- [ ] Engagement‑based sunsetting live
</content>
