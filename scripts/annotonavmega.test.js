// Runs annotonavmega.js against a minimal fake DOM (node:vm) and checks the
// Solutions mega-menu it renders. Run: node --test scripts/annotonavmega.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const SRC = fs.readFileSync(path.join(__dirname, 'annotonavmega.js'), 'utf8');

function fakeEl(extra) {
  return Object.assign({
    attrs: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    setAttribute(k, v) { this.attrs[k] = v; },
    getAttribute(k) { return this.attrs[k] === undefined ? null : this.attrs[k]; },
    addEventListener() {},
    appendChild() {},
    insertBefore() {},
    querySelector() { return null; },
    querySelectorAll() { return []; },
  }, extra);
}

function renderPanel(label) {
  const panel = fakeEl({ innerHTML: '' });
  const trig = fakeEl({ textContent: label, className: 'anr-nav-trigger' });
  const dd = fakeEl({
    querySelector(sel) { return /trigger/.test(sel) ? trig : /nvpanel/.test(sel) ? panel : null; },
  });
  const center = fakeEl();
  const nav = fakeEl({
    querySelector(sel) { return sel === '.anr-nav-center' ? center : sel === '.anr-nav-trigger' ? trig : null; },
    querySelectorAll(sel) { return sel === '.nvdd' ? [dd] : []; },
  });
  const document = fakeEl({
    readyState: 'complete',
    head: fakeEl(),
    getElementById() { return null; },
    createElement() { return fakeEl(); },
    querySelector(sel) { return sel === 'nav.anr-nav' ? nav : null; },
  });
  const ctx = { window: {}, document, setInterval() { return 0; }, clearInterval() {}, setTimeout() { return 0; }, clearTimeout() {} };
  vm.runInNewContext(SRC, ctx);
  return panel.innerHTML;
}

function columnTitles(html) {
  return [...html.matchAll(/class="axm-ct">([^<]+)</g)].map((m) => m[1]);
}

test('Solutions menu lists By Sector, By Role, By Journey, By Discipline in that order', () => {
  assert.deepStrictEqual(columnTitles(renderPanel('Solutions')), ['BY SECTOR', 'BY ROLE', 'BY JOURNEY', 'BY DISCIPLINE']);
});

test('By Sector column links every sector page', () => {
  const html = renderPanel('Solutions');
  const sector = html.split('BY ROLE')[0];
  for (const href of ['/higher-education', '/k-12', '/corporate-learning', '/media-communities']) {
    assert.ok(sector.includes('href="' + href + '"'), href + ' missing from By Sector');
  }
});

test('Product menu still renders its own columns', () => {
  assert.deepStrictEqual(columnTitles(renderPanel('Product')), ['ENGAGE', 'ASSESS', 'CREATE WITH AI', 'MEASURE']);
});
