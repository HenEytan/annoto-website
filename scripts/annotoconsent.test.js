// Run: node --test scripts/
// Loads an AnnotoConsent build into a fake browser (node:vm) and inspects what
// reaches window.dataLayer, so the GA4 gate can be verified without Webflow.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const MID = 'G-RB2LBDL082';
const FILE = path.join(__dirname, 'annotoconsent-1.5.1.js');

function browser({ host = 'www.annoto.net', ua = 'Mozilla/5.0 Chrome/141', w = 1920, h = 1080, nativeTag = false, nativeQueued = false, consent = null } = {}) {
  const listeners = {};
  const appended = [];
  const clarityCalls = [];
  const store = consent ? { annoto_consent: consent } : {};
  const el = () => ({ style: {}, setAttribute() {}, appendChild() {}, parentNode: null });
  const document = {
    readyState: 'complete',
    head: { appendChild: (n) => appended.push(n) },
    documentElement: { appendChild: (n) => appended.push(n) },
    body: { appendChild() {} },
    createElement: (tag) => (tag === 'canvas' ? { getContext: () => null } : el()),
    createTextNode: () => ({}),
    getElementById: (id) => (id === 'anr-cc' ? null : {}),
    querySelector: (sel) => (nativeTag && sel.includes('googletagmanager.com/gtag/js') ? {} : null),
    addEventListener: () => {},
  };
  const window = {
    document,
    navigator: { userAgent: ua, languages: ['en-US'], webdriver: false, maxTouchPoints: 0 },
    screen: { width: w, height: h },
    location: { hostname: host },
    localStorage: { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = v; } },
    addEventListener: (type, fn, opts) => { (listeners[type] ||= []).push({ fn, opts }); },
    removeEventListener: (type, fn) => { listeners[type] = (listeners[type] || []).filter((l) => l.fn !== fn); },
    setTimeout: () => 0,
    clarity: (...a) => clarityCalls.push(a),
  };
  window.window = window;
  // Webflow's native integration runs gtag('js'); gtag('config', MID) inline, before this script,
  // and injects its gtag.js <script> later, so only the queued config is visible at run time.
  if (nativeQueued) window.dataLayer = [['js', new Date()], ['config', MID]];
  const ctx = vm.createContext(window);
  vm.runInContext(fs.readFileSync(FILE, 'utf8'), ctx);
  const fire = (type, isTrusted = true) => (listeners[type] || []).slice().forEach((l) => l.fn({ type, isTrusted }));
  const calls = () => (window.dataLayer || []).map((a) => Array.from(a));
  const has = (cmd, arg) => calls().some((c) => c[0] === cmd && (arg === undefined || c[1] === arg));
  const count = (cmd, arg) => calls().filter((c) => c[0] === cmd && c[1] === arg).length;
  return { window, fire, calls, has, count, appended, listeners, clarityCalls };
}

test('no GA4 config or page_view before any interaction', () => {
  const b = browser();
  assert.ok(b.has('consent', 'default'), 'consent default is still declared up front');
  assert.ok(!b.has('config', MID), 'config must wait for interaction');
  assert.ok(!b.has('event', 'page_view'));
  assert.ok(!b.appended.some((n) => n.src), 'gtag.js is not loaded before interaction');
});

test('first trusted interaction loads gtag.js and sends exactly one config', () => {
  const b = browser();
  b.fire('pointermove');
  b.fire('scroll');
  assert.strictEqual(b.count('config', MID), 1);
  assert.ok(b.appended.some((n) => String(n.src).includes('gtag/js?id=' + MID)));
  assert.deepStrictEqual(b.clarityCalls.find((c) => c[1] === 'anr_int'), ['set', 'anr_int', '1']);
});

test('synthetic (untrusted) events do not open the gate', () => {
  const b = browser();
  b.fire('pointermove', false);
  b.fire('keydown', false);
  assert.ok(!b.has('config', MID));
});

test('every gate listener is removed after the gate opens', () => {
  const b = browser();
  b.fire('touchstart');
  const left = Object.values(b.listeners).reduce((n, l) => n + l.length, 0);
  assert.strictEqual(left, 0);
});

test('with the Webflow-native tag present: GA is held off, then one page_view and no second config', () => {
  const b = browser({ nativeTag: true });
  assert.strictEqual(b.window['ga-disable-' + MID], true, 'native config is suppressed until interaction');
  b.fire('keydown');
  assert.strictEqual(b.window['ga-disable-' + MID], false);
  assert.strictEqual(b.count('config', MID), 0, 'no duplicate config on top of the native one');
  assert.strictEqual(b.count('event', 'page_view'), 1);
  assert.ok(!b.appended.some((n) => n.src), 'no second gtag.js');
});

test('hard bots stay disabled and never get a gate', () => {
  const b = browser({ ua: 'Mozilla/5.0 HeadlessChrome/141' });
  assert.strictEqual(b.window['ga-disable-' + MID], true);
  b.fire('pointermove');
  assert.ok(!b.has('config', MID));
  assert.ok(!b.has('event', 'page_view'));
});

test('non-production hosts stay disabled', () => {
  const b = browser({ host: 'annoto.webflow.io' });
  b.fire('pointermove');
  assert.strictEqual(b.window['ga-disable-' + MID], true);
  assert.ok(!b.has('config', MID));
});

test('soft bots that interact are still tagged traffic_type=bot', () => {
  const b = browser({ w: 800, h: 600 });
  b.fire('pointerdown');
  assert.ok(b.calls().some((c) => c[0] === 'set' && c[1] && c[1].traffic_type === 'bot'));
  const cfg = b.calls().find((c) => c[0] === 'config');
  assert.strictEqual(JSON.stringify(cfg[2]), JSON.stringify({ anr_bot: 'viewport' }));
});

test('stored consent is granted before the gate opens', () => {
  const b = browser({ consent: 'granted' });
  assert.ok(b.has('consent', 'update'));
});

test('native config already queued in dataLayer (gtag.js not yet in the DOM) is detected', () => {
  const b = browser({ nativeQueued: true });
  assert.strictEqual(b.window['ga-disable-' + MID], true, 'the queued native config must be held off');
  assert.strictEqual(b.count('config', MID), 1, 'only the native config, none added');
  b.fire('scroll');
  assert.strictEqual(b.window['ga-disable-' + MID], false);
  assert.strictEqual(b.count('config', MID), 1);
  assert.strictEqual(b.count('event', 'page_view'), 1);
  assert.ok(!b.appended.some((n) => n.src), 'no second gtag.js');
});
