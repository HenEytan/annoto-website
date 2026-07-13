/* @ds-bundle: {"format":3,"namespace":"AnnotoDesignSystem_dfc7f9","components":[],"sourceHashes":{"scripts/build-abstracts.js":"18161df86540","scripts/build-illos.js":"73be3cca4c33","social-posts/case-visuals.js":"0dce53f7417b","social-posts/posts-data.js":"8fda664a092f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnnotoDesignSystem_dfc7f9 = window.AnnotoDesignSystem_dfc7f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// scripts/build-abstracts.js
try { (() => {
// Annoto Abstract Brand Composition generator (800x600).
// Bold marketing-grade compositions: soft background, a hero element (video player / play hub /
// chart / avatar hub), floating white UI chips with brand-icon badges, and scattered decorative dots.
globalThis.makeAbstracts = function () {
  const C = {
    coral: '#F1615C',
    coralDeep: '#E14B45',
    teal: '#17B3AB',
    tealDeep: '#129A91',
    navy: '#2A3142',
    ink: '#16181A',
    yellow: '#FFC53D',
    yellowSoft: '#FFD15A',
    blue: '#4A8CFF',
    border: '#ECEEF0',
    line: '#E2E6EA',
    bg: '#F7F9FA',
    white: '#FFFFFF',
    glyph: '#C3CBD4',
    glyphSoft: '#DCE1E7'
  };
  let _id = 0;
  const uid = p => (p || 'a') + ++_id;
  const rr = (x, y, w, h, r, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" ${extra}/>`;
  const ci = (cx, cy, r, fill, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
  const tri = (cx, cy, r, fill) => `<path d="M${cx - r * 0.46} ${cy - r * 0.62} L${cx + r * 0.7} ${cy} L${cx - r * 0.46} ${cy + r * 0.62} Z" fill="${fill}"/>`;
  const dot = (cx, cy, r, fill) => ci(cx, cy, r, fill);

  // hero: video player card
  function videoCard(x, y, w, h, r, fill, opt = {}) {
    const cx = x + w * 0.5,
      cy = y + h * 0.46,
      pr = Math.min(w, h) * 0.20;
    let g = rr(x, y, w, h, r, fill);
    if (opt.shine) g += rr(x, y, w, h, r, '#FFFFFF', `opacity="0.07"`);
    g += ci(cx, cy, pr, C.white) + tri(cx, cy, pr * 0.62, fill);
    g += rr(x + w * 0.12, y + h * 0.80, w * 0.5, h * 0.05, h * 0.025, '#FFFFFF', `opacity="0.85"`);
    g += rr(x + w * 0.12 + w * 0.5 + 8, y + h * 0.80, w * 0.24, h * 0.05, h * 0.025, '#FFFFFF', `opacity="0.4"`);
    return g;
  }
  // hero: play hub (white circle, colored play, soft ring)
  function playHub(cx, cy, r, fill) {
    return ci(cx, cy, r * 1.32, fill, `opacity="0.14"`) + ci(cx, cy, r, fill) + tri(cx, cy, r * 0.6, C.white);
  }
  // floating white comment chip with avatar + lines, optional tail
  function chip(x, y, w, h, opt = {}) {
    const colored = opt.fill && opt.fill !== C.white;
    const fill = opt.fill || C.white,
      st = colored ? '' : `stroke="${C.border}" stroke-width="2"`;
    const accent = opt.accent || C.teal,
      txt = colored ? '#FFFFFF' : C.line;
    let g = rr(x, y, w, h, 16, fill, st);
    const ay = y + h * 0.5;
    g += ci(x + 24, ay, 11, colored ? '#FFFFFF' : accent, colored ? 'opacity="0.6"' : '');
    g += rr(x + 42, ay - 9, w - 64, 7, 3.5, txt, colored ? 'opacity="0.85"' : '') + rr(x + 42, ay + 3, (w - 64) * 0.66, 7, 3.5, txt, colored ? 'opacity="0.55"' : '');
    if (opt.tail === 'left') g += `<path d="M${x + 22} ${y + h} l-4 18 18 -10z" fill="${fill}"/>`;
    if (opt.tail === 'right') g += `<path d="M${x + w - 22} ${y + h} l4 18 -18 -10z" fill="${fill}"/>`;
    return g;
  }
  // white circle badge with brand icon (icon drawn by fn at cx,cy,r)
  function iconCircle(cx, cy, r, iconFn, opt = {}) {
    return ci(cx, cy, r, C.white, `stroke="${C.border}" stroke-width="2"`) + iconFn(cx, cy, r, opt);
  }
  // ---- icons (sized to circle radius r) ----
  const heart = (cx, cy, r, fill) => `<path d="M${cx} ${cy + r * 0.62} C${cx - r * 1.05} ${cy - r * 0.18} ${cx - r * 0.5} ${cy - r * 0.82} ${cx} ${cy - r * 0.18} C${cx + r * 0.5} ${cy - r * 0.82} ${cx + r * 1.05} ${cy - r * 0.18} ${cx} ${cy + r * 0.62} Z" fill="${fill}"/>`;
  function star(cx, cy, R, fill, inner) {
    inner = inner || 0.45;
    const p = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5,
        rad = i % 2 ? R * inner : R;
      p.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
    }
    return `<polygon points="${p.join(' ')}" fill="${fill}"/>`;
  }
  const bell = (cx, cy, r, fill) => `<path d="M${cx} ${cy - r * 0.5} c${r * 0.32} 0 ${r * 0.4} ${r * 0.28} ${r * 0.4} ${r * 0.6} c0 ${r * 0.3} ${r * 0.12} ${r * 0.32} ${r * 0.12} ${r * 0.4} l-${r * 1.04} 0 c0 -${r * 0.08} ${r * 0.12} -${r * 0.1} ${r * 0.12} -${r * 0.4} c0 -${r * 0.32} ${r * 0.08} -${r * 0.6} ${r * 0.4} -${r * 0.6} z" fill="${fill}"/><path d="M${cx - r * 0.13} ${cy + r * 0.5} a${r * 0.13} ${r * 0.13} 0 0 0 ${r * 0.26} 0z" fill="${fill}"/>`;
  const check = (cx, cy, r, fill) => `<path d="M${cx - r * 0.34} ${cy} L${cx - r * 0.06} ${cy + r * 0.3} L${cx + r * 0.4} ${cy - r * 0.3}" fill="none" stroke="${fill}" stroke-width="${r * 0.22}" stroke-linecap="round" stroke-linejoin="round"/>`;
  function person(cx, cy, r, fill) {
    const cid = uid('p');
    return `<clipPath id="${cid}"><circle cx="${cx}" cy="${cy}" r="${r * 0.82}"/></clipPath><g clip-path="url(#${cid})"><circle cx="${cx}" cy="${cy - r * 0.16}" r="${r * 0.3}" fill="${fill}"/><circle cx="${cx}" cy="${cy + r * 0.6}" r="${r * 0.48}" fill="${fill}"/></g>`;
  }
  const thumb = (cx, cy, r, fill) => `<path d="M${cx - r * 0.5} ${cy - r * 0.05} l${r * 0.22} 0 0 ${r * 0.5} -${r * 0.22} 0 z" fill="${fill}"/><path d="M${cx - r * 0.22} ${cy - r * 0.05} c${r * 0.05} -${r * 0.1} ${r * 0.2} -${r * 0.18} ${r * 0.24} -${r * 0.4} c${r * 0.03} -${r * 0.16} ${r * 0.26} -${r * 0.12} ${r * 0.2} ${r * 0.08} l-${r * 0.05} ${r * 0.2} ${r * 0.3} 0 c${r * 0.14} 0 ${r * 0.2} ${r * 0.12} ${r * 0.14} ${r * 0.26} l-${r * 0.14} ${r * 0.34} c-${r * 0.04} ${r * 0.1} -${r * 0.14} ${r * 0.12} -${r * 0.24} ${r * 0.12} l-${r * 0.55} 0 z" fill="${fill}"/>`;
  const chat = (cx, cy, r, fill) => `<path d="M${cx - r * 0.5} ${cy - r * 0.42} l${r} 0 a${r * 0.16} ${r * 0.16} 0 0 1 ${r * 0.16} ${r * 0.16} l0 ${r * 0.5} a${r * 0.16} ${r * 0.16} 0 0 1 -${r * 0.16} ${r * 0.16} l-${r * 0.6} 0 -${r * 0.2} ${r * 0.24} 0 -${r * 0.24} -${r * 0.2} 0 a${r * 0.16} ${r * 0.16} 0 0 1 -${r * 0.16} -${r * 0.16} l0 -${r * 0.5} a${r * 0.16} ${r * 0.16} 0 0 1 ${r * 0.16} -${r * 0.16} z" fill="${fill}"/>`;
  const bulb = (cx, cy, r, fill) => `<path d="M${cx} ${cy - r * 0.55} a${r * 0.46} ${r * 0.46} 0 0 1 ${r * 0.46} ${r * 0.46} c0 ${r * 0.28} -${r * 0.2} ${r * 0.34} -${r * 0.2} ${r * 0.5} l-${r * 0.52} 0 c0 -${r * 0.16} -${r * 0.2} -${r * 0.22} -${r * 0.2} -${r * 0.5} a${r * 0.46} ${r * 0.46} 0 0 1 ${r * 0.46} -${r * 0.46} z" fill="${fill}"/><rect x="${cx - r * 0.2}" y="${cy + r * 0.42}" width="${r * 0.4}" height="${r * 0.14}" rx="${r * 0.07}" fill="${fill}"/>`;
  function spark(cx, cy, r, fill) {
    return `<path d="M${cx} ${cy - r} C${cx + r * 0.12} ${cy - r * 0.28} ${cx + r * 0.28} ${cy - r * 0.12} ${cx + r} ${cy} C${cx + r * 0.28} ${cy + r * 0.12} ${cx + r * 0.12} ${cy + r * 0.28} ${cx} ${cy + r} C${cx - r * 0.12} ${cy + r * 0.28} ${cx - r * 0.28} ${cy + r * 0.12} ${cx - r} ${cy} C${cx - r * 0.28} ${cy - r * 0.12} ${cx - r * 0.12} ${cy - r * 0.28} ${cx} ${cy - r} Z" fill="${fill}"/>`;
  }
  const target = (cx, cy, r, fill) => ci(cx, cy, r * 0.78, 'none', `stroke="${fill}" stroke-width="${r * 0.16}"`) + ci(cx, cy, r * 0.42, 'none', `stroke="${fill}" stroke-width="${r * 0.16}"`) + ci(cx, cy, r * 0.1, fill);
  const arcStroke = (cx, cy, r, a0, a1, stroke, w) => {
    const p = a => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
    const big = a1 - a0 > Math.PI ? 1 : 0;
    return `<path d="M${p(a0)} A${r} ${r} 0 ${big} 1 ${p(a1)}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round"/>`;
  };
  function dashedOrbit(cx, cy, rx, ry) {
    return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#D7DBDF" stroke-width="2" stroke-dasharray="2 12" stroke-linecap="round"/>`;
  }
  function arc(cx, cy, rO, rI, a0, a1, fill) {
    const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
    const big = a1 - a0 > Math.PI ? 1 : 0;
    return `<path d="M${p(rO, a0)} A${rO} ${rO} 0 ${big} 1 ${p(rO, a1)} L${p(rI, a1)} A${rI} ${rI} 0 ${big} 0 ${p(rI, a0)} Z" fill="${fill}"/>`;
  }
  function donut(cx, cy, rO, rI, segs) {
    let a = -Math.PI / 2,
      out = '';
    const t = segs.reduce((s, x) => s + x.f, 0);
    for (const s of segs) {
      const a1 = a + s.f / t * 2 * Math.PI;
      out += arc(cx, cy, rO, rI, a + 0.03, a1 - 0.03, s.c);
      a = a1;
    }
    return out;
  }
  function scatter(items) {
    return items.map(d => dot(d[0], d[1], d[2], d[3])).join('');
  }
  const wrap = inner => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">${inner}</svg>`;
  const A = {};

  // 1) ENGAGEMENT — play hub on dashed orbit ringed by comment + reaction chips
  A['abstract-engagement'] = wrap(ci(400, 300, 250, C.bg) + dashedOrbit(400, 300, 232, 166) + playHub(400, 300, 66, C.coral) + chip(120, 150, 176, 72, {
    tail: 'right',
    accent: C.teal
  }) + chip(508, 360, 172, 70, {
    tail: 'left',
    accent: C.coral
  }) + iconCircle(636, 168, 30, (x, y, r) => heart(x, y, r * 0.72, C.coral)) + iconCircle(150, 430, 27, (x, y, r) => star(x, y, r * 0.66, C.yellow)) + iconCircle(560, 210, 22, (x, y, r) => person(x, y, r, C.teal)) + scatter([[120, 300, 7, C.yellow], [690, 430, 8, C.blue], [680, 300, 6, C.coral], [300, 470, 7, C.teal]]));

  // 2) AI COPILOT — teal card with spark + chat reply + orbiting sparkles
  A['abstract-ai-copilot'] = wrap(ci(400, 300, 250, C.bg) + rr(250, 180, 300, 200, 28, C.navy) + ci(330, 250, 30, C.teal) + spark(330, 250, 17, C.white) + rr(382, 236, 128, 12, 6, C.white, 'opacity="0.85"') + rr(382, 262, 150, 12, 6, C.white, 'opacity="0.4"') + rr(290, 318, 180, 40, 14, '#3A4356') + rr(310, 332, 150, 9, 4.5, C.white, 'opacity="0.5"') + iconCircle(600, 200, 30, (x, y, r) => chat(x, y, r * 0.74, C.teal)) + iconCircle(168, 396, 26, (x, y, r) => bulb(x, y, r * 0.78, C.yellow)) + spark(150, 180, 18, C.yellow) + spark(640, 400, 14, C.coral) + spark(610, 150, 11, C.teal) + scatter([[120, 300, 7, C.coral], [690, 320, 7, C.yellow], [470, 470, 7, C.teal]]));

  // 3) COMMUNITY — central avatar hub with connected smaller avatars
  A['abstract-community'] = wrap((() => {
    const hub = [400, 300];
    const nodes = [[200, 170], [610, 180], [170, 420], [640, 420], [400, 140], [400, 470]];
    let g = ci(400, 300, 250, C.bg);
    g += nodes.map(n => `<line x1="${hub[0]}" y1="${hub[1]}" x2="${n[0]}" y2="${n[1]}" stroke="#D7DBDF" stroke-width="2" stroke-dasharray="2 10" stroke-linecap="round"/>`).join('');
    const cols = [C.coral, C.teal, C.yellow, C.blue, C.coral, C.teal];
    g += nodes.map((n, i) => ci(n[0], n[1], 26, C.white, `stroke="${C.border}" stroke-width="2"`) + person(n[0], n[1], 26, cols[i])).join('');
    g += ci(hub[0], hub[1], 58, C.coral) + person(hub[0], hub[1], 58, C.white);
    return g;
  })());

  // 4) INSIGHTS — donut hero with floating bar + line chart cards
  A['abstract-insights'] = wrap(ci(400, 300, 250, C.bg) + donut(400, 290, 118, 66, [{
    f: 4,
    c: C.teal
  }, {
    f: 3,
    c: C.coral
  }, {
    f: 2,
    c: C.yellow
  }, {
    f: 1.6,
    c: C.blue
  }]) + ci(400, 290, 52, C.white) + `<text x="400" y="300" font-family="Poppins,Arial" font-size="30" font-weight="700" fill="${C.navy}" text-anchor="middle">87%</text>` + (() => {
    let g = rr(120, 150, 150, 104, 18, C.white, `stroke="${C.border}" stroke-width="2"`);
    const bh = [34, 52, 40, 64, 46];
    bh.forEach((h, i) => {
      g += rr(140 + i * 22, 230 - h, 14, h, 4, i % 2 ? C.coral : C.teal);
    });
    return g;
  })() + rr(540, 360, 150, 100, 18, C.white, `stroke="${C.border}" stroke-width="2"`) + `<path d="M556 430 L588 400 L612 414 L640 380 L674 392" fill="none" stroke="${C.coral}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` + scatter([[560, 400, 5, C.teal], [612, 414, 5, C.yellow], [674, 392, 5, C.coral]]) + iconCircle(150, 430, 26, (x, y, r) => star(x, y, r * 0.66, C.yellow)) + iconCircle(636, 170, 28, (x, y, r) => check(x, y, r * 0.8, C.teal)) + scatter([[690, 300, 7, C.blue], [120, 300, 7, C.coral]]));

  // 5) MOMENTS — video timeline bar with markers + popover comment cards
  A['abstract-moments'] = wrap(ci(400, 300, 250, C.bg) + videoCard(250, 210, 300, 180, 24, C.navy) + rr(150, 430, 500, 16, 8, C.line) + rr(150, 430, 300, 16, 8, C.teal) + ci(300, 438, 16, C.coral, `stroke="${C.white}" stroke-width="4"`) + ci(450, 438, 16, C.yellow, `stroke="${C.white}" stroke-width="4"`) + ci(560, 438, 16, C.teal, `stroke="${C.white}" stroke-width="4"`) + chip(206, 120, 168, 64, {
    tail: 'left',
    accent: C.coral
  }) + chip(470, 470, 170, 62, {
    tail: 'right',
    accent: C.teal
  }) + tri(120, 438, 12, C.glyph) + scatter([[120, 180, 7, C.yellow], [690, 200, 7, C.coral], [680, 360, 6, C.blue]]));

  // 6) REACTIONS — play hub with hearts/stars/thumbs floating upward
  A['abstract-reactions'] = wrap(ci(400, 330, 240, C.bg) + playHub(400, 360, 72, C.teal) + iconCircle(300, 200, 30, (x, y, r) => heart(x, y, r * 0.72, C.coral)) + iconCircle(430, 140, 27, (x, y, r) => star(x, y, r * 0.66, C.yellow)) + iconCircle(540, 210, 25, (x, y, r) => thumb(x, y, r * 0.82, C.teal)) + iconCircle(220, 300, 21, (x, y, r) => heart(x, y, r * 0.7, C.coral)) + iconCircle(590, 320, 20, (x, y, r) => star(x, y, r * 0.64, C.yellow)) + arcStroke(400, 360, 120, -Math.PI * 0.92, -Math.PI * 0.58, C.yellowSoft, 8) + scatter([[150, 420, 7, C.coral], [660, 440, 7, C.teal], [330, 470, 6, C.yellow]]));

  // 7) DISCUSSION — overlapping speech bubbles with avatars converging
  A['abstract-discussion'] = wrap(ci(400, 300, 250, C.bg) + chip(150, 170, 210, 86, {
    fill: C.coral,
    tail: 'left'
  }) + chip(420, 150, 220, 84, {
    fill: C.teal,
    tail: 'right'
  }) + chip(290, 330, 230, 92, {
    accent: C.navy,
    tail: 'left'
  }) + iconCircle(620, 360, 30, (x, y, r) => person(x, y, r, C.teal)) + iconCircle(150, 420, 27, (x, y, r) => person(x, y, r, C.coral)) + scatter([[400, 470, 7, C.yellow], [680, 250, 7, C.coral], [120, 300, 6, C.teal]]));

  // 8) ASSESSMENT — scorecard with target + medal
  A['abstract-assessment'] = wrap(ci(400, 300, 250, C.bg) + rr(250, 170, 300, 230, 24, C.white, `stroke="${C.border}" stroke-width="2"`) + rr(284, 210, 150, 14, 7, C.navy) + rr(284, 234, 110, 10, 5, C.line) + (() => {
    let g = '';
    for (let i = 0; i < 3; i++) {
      const y = 280 + i * 36;
      g += ci(300, y, 13, i < 2 ? C.teal : C.line) + (i < 2 ? check(300, y, 13, C.white) : '');
      for (let s = 0; s < 4; s++) g += star(344 + s * 30, y, 11, s < 3 - i ? C.yellow : C.line);
    }
    return g;
  })() + (() => {
    const mx = 560,
      my = 380;
    return `<path d="M${mx - 9} ${my + 6} l-8 22 11 -6 5 11 8 -25z" fill="${C.coral}"/><path d="M${mx + 9} ${my + 6} l8 22 -11 -6 -5 11 -8 -25z" fill="${C.teal}"/>` + ci(mx, my, 34, C.white, `stroke="${C.border}" stroke-width="2"`) + ci(mx, my, 28, C.yellow) + star(mx, my, 16, C.white, 0.45);
  })() + iconCircle(220, 200, 26, (x, y, r) => target(x, y, r * 0.86, C.coral)) + scatter([[660, 220, 7, C.teal], [150, 420, 7, C.yellow], [690, 460, 6, C.coral]]));

  // 9) BROADCAST — video card emitting concentric signal arcs + bell
  A['abstract-broadcast'] = wrap(ci(400, 300, 250, C.bg) + videoCard(220, 220, 260, 170, 22, C.coral) + arcStroke(480, 305, 70, -Math.PI * 0.42, Math.PI * 0.42, C.teal, 7) + arcStroke(480, 305, 104, -Math.PI * 0.4, Math.PI * 0.4, C.teal, 6) + arcStroke(480, 305, 138, -Math.PI * 0.36, Math.PI * 0.36, C.yellowSoft, 5) + iconCircle(630, 200, 30, (x, y, r) => bell(x, y, r * 0.74, C.coral)) + iconCircle(180, 420, 27, (x, y, r) => person(x, y, r, C.teal)) + chip(150, 150, 168, 60, {
    tail: 'right',
    accent: C.teal
  }) + scatter([[120, 300, 7, C.yellow], [660, 440, 7, C.blue], [420, 480, 6, C.coral]]));

  // 10) KNOWLEDGE — open book/play with lightbulb + note cards (learning)
  A['abstract-knowledge'] = wrap(ci(400, 300, 250, C.bg) + `<path d="M250 220 q150 -40 150 18 q0 -58 150 -18 l0 170 q-150 -36 -150 16 q0 -52 -150 -16 z" fill="${C.white}" stroke="${C.border}" stroke-width="2"/>` + `<line x1="400" y1="238" x2="400" y2="406" stroke="${C.border}" stroke-width="2"/>` + (() => {
    let g = '';
    for (let i = 0; i < 3; i++) {
      g += rr(282, 252 + i * 22, 96, 8, 4, C.line) + rr(424, 252 + i * 22, 96, 8, 4, C.line);
    }
    return g;
  })() + playHub(400, 300, 40, C.coral) + iconCircle(610, 200, 30, (x, y, r) => bulb(x, y, r * 0.78, C.yellow)) + iconCircle(180, 420, 27, (x, y, r) => star(x, y, r * 0.66, C.teal)) + chip(470, 420, 170, 60, {
    tail: 'right',
    accent: C.coral
  }) + scatter([[150, 200, 7, C.teal], [660, 420, 7, C.coral], [400, 490, 6, C.yellow]]));
  return A;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/build-abstracts.js", error: String((e && e.message) || e) }); }

// scripts/build-illos.js
try { (() => {
// Annoto Feature Illustration generator.
// Produces flat, on-brand 245x170 SVGs matching the Annoto product illustration style:
// clean white UI cards with soft shadows, gray placeholder avatars/text, and teal/coral/gold accents.
globalThis.makeIllos = function () {
  const C = {
    coral: '#F1615C',
    coralDeep: '#E14B45',
    coralSoft: '#FBD9D6',
    coralPale: '#FDEDEC',
    teal: '#1BB6AC',
    tealDeep: '#129A91',
    tealSoft: '#CDEDEA',
    tealPale: '#E8F7F5',
    gold: '#FFC93C',
    goldDeep: '#F0B41E',
    goldSoft: '#FFE6A6',
    ink: '#2E3A4E',
    inkSoft: '#5B6675',
    line: '#E2E7EC',
    lineSoft: '#EDF1F4',
    border: '#E9ECEF',
    glyph: '#C3CBD4',
    glyphSoft: '#DCE1E7',
    white: '#FFFFFF',
    paper: '#FBFCFD'
  };
  let _id = 0;
  const uid = p => (p || 'i') + ++_id;
  const rr = (x, y, w, h, r, fill, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" ${extra}/>`;
  const circ = (cx, cy, r, fill, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
  const line = (x1, y1, x2, y2, stroke, w, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;

  // soft drop-shadow filter, unique per svg
  function shadow(id) {
    return `<filter id="${id}" x="-30%" y="-30%" width="160%" height="170%">` + `<feDropShadow dx="0" dy="2.5" stdDeviation="3.4" flood-color="#2E3A4E" flood-opacity="0.13"/></filter>`;
  }
  // white card with hairline border + soft shadow
  function card(x, y, w, h, r, shId, opt = {}) {
    const fill = opt.fill || C.white;
    const st = opt.border === false ? '' : `stroke="${C.border}" stroke-width="1"`;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" ${st} filter="url(#${shId})"/>`;
  }
  // stacked placeholder text lines
  function bars(x, y, specs, gap) {
    gap = gap || 7;
    return specs.map((s, i) => rr(x, y + i * gap, s.w, s.h || 3.2, (s.h || 3.2) / 2, s.fill || C.line)).join('');
  }
  // gray avatar chip with person silhouette
  function avatar(cx, cy, R, bg, fg) {
    bg = bg || C.glyphSoft;
    fg = fg || C.glyph;
    const cid = uid('cl');
    return `<g><circle cx="${cx}" cy="${cy}" r="${R}" fill="${bg}"/>` + `<clipPath id="${cid}"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath>` + `<g clip-path="url(#${cid})">` + circ(cx, cy - R * 0.18, R * 0.30, fg) + circ(cx, cy + R * 0.60, R * 0.48, fg) + `</g></g>`;
  }
  // colored badge circle with white icon, with white ring + shadow
  function badge(cx, cy, R, iconFn, bg, shId) {
    bg = bg || C.teal;
    const ring = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.white}" filter="${shId ? `url(#${shId})` : ''}"/>`;
    return `<g>${shId ? ring : ''}<circle cx="${cx}" cy="${cy}" r="${R - (shId ? 2 : 0)}" fill="${bg}"/>${iconFn(cx, cy, R - (shId ? 2 : 0))}</g>`;
  }
  // plain colored circle, optional white shadow ring
  function badge2(cx, cy, R, bg, shId) {
    const ring = shId ? `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${C.white}" filter="url(#${shId})"/>` : '';
    return `<g>${ring}<circle cx="${cx}" cy="${cy}" r="${R - (shId ? 2 : 0)}" fill="${bg}"/></g>`;
  }

  // ---- white icons (centered cx,cy, sized to badge radius R) ----
  const ic = {
    person: (cx, cy, R) => {
      const cid = uid('pc');
      return `<clipPath id="${cid}"><circle cx="${cx}" cy="${cy}" r="${R * 0.82}"/></clipPath>` + `<g clip-path="url(#${cid})">` + circ(cx, cy - R * 0.16, R * 0.27, C.white) + circ(cx, cy + R * 0.55, R * 0.45, C.white) + `</g>`;
    },
    camera: (cx, cy, R) => {
      const w = R * 0.86,
        h = R * 0.62;
      return rr(cx - w * 0.62, cy - h / 2, w, h, R * 0.16, C.white) + `<path d="M${cx + w * 0.24} ${cy - h * 0.18} L${cx + w * 0.62} ${cy - h * 0.46} L${cx + w * 0.62} ${cy + h * 0.46} L${cx + w * 0.24} ${cy + h * 0.18} Z" fill="${C.white}"/>`;
    },
    group: (cx, cy, R) => {
      // center person + two side
      const side = (dx, s, clipExtra) => {
        const cid = uid('g');
        return `<clipPath id="${cid}"><rect x="${cx + dx - R * 0.5}" y="${cy - R * 0.6}" width="${R}" height="${R * 1.3}"/></clipPath>` + `<g clip-path="url(#${cid})">` + circ(cx + dx, cy - R * 0.02, R * 0.20 * s, C.white) + circ(cx + dx, cy + R * 0.62, R * 0.34 * s, C.white) + `</g>`;
      };
      return side(-R * 0.42, 0.92) + side(R * 0.42, 0.92) + circ(cx, cy - R * 0.22, R * 0.26, C.white) + circ(cx, cy + R * 0.46, R * 0.42, C.white);
    },
    mask: (cx, cy, R, bg) => {
      bg = bg || C.teal;
      // spy eye-mask band with two cut-out eyes
      return `<path d="M${cx - R * 0.66} ${cy - R * 0.20} q0 ${-R * 0.16} ${R * 0.18} ${-R * 0.16} l${R * 0.96} 0 q${R * 0.18} 0 ${R * 0.18} ${R * 0.16} q0 ${R * 0.40} ${-R * 0.30} ${R * 0.46} q${-R * 0.22} ${R * 0.04} ${-R * 0.30} ${-R * 0.10} q${-R * 0.08} ${-R * 0.14} ${-R * 0.24} ${-R * 0.14} q${-R * 0.16} 0 ${-R * 0.24} ${R * 0.14} q${-R * 0.08} ${R * 0.14} ${-R * 0.30} ${R * 0.10} q${-R * 0.30} ${-R * 0.06} ${-R * 0.30} ${-R * 0.46} Z" fill="${C.white}"/>` + `<ellipse cx="${cx - R * 0.27}" cy="${cy - R * 0.06}" rx="${R * 0.13}" ry="${R * 0.16}" fill="${bg}"/>` + `<ellipse cx="${cx + R * 0.27}" cy="${cy - R * 0.06}" rx="${R * 0.13}" ry="${R * 0.16}" fill="${bg}"/>`;
    },
    check: (cx, cy, R) => `<path d="M${cx - R * 0.34} ${cy + R * 0.02} L${cx - R * 0.06} ${cy + R * 0.30} L${cx + R * 0.38} ${cy - R * 0.26}" fill="none" stroke="${C.white}" stroke-width="${R * 0.20}" stroke-linecap="round" stroke-linejoin="round"/>`,
    x: (cx, cy, R) => `<path d="M${cx - R * 0.28} ${cy - R * 0.28} L${cx + R * 0.28} ${cy + R * 0.28} M${cx + R * 0.28} ${cy - R * 0.28} L${cx - R * 0.28} ${cy + R * 0.28}" stroke="${C.white}" stroke-width="${R * 0.20}" stroke-linecap="round"/>`,
    play: (cx, cy, R, col) => `<path d="M${cx - R * 0.26} ${cy - R * 0.40} L${cx + R * 0.42} ${cy} L${cx - R * 0.26} ${cy + R * 0.40} Z" fill="${col || C.white}"/>`,
    bell: (cx, cy, R) => `<path d="M${cx} ${cy - R * 0.52} c${R * 0.34} 0 ${R * 0.42} ${R * 0.30} ${R * 0.42} ${R * 0.62} c0 ${R * 0.30} ${R * 0.12} ${R * 0.34} ${R * 0.12} ${R * 0.42} l${-R * 1.08} 0 c0 ${-R * 0.08} ${R * 0.12} ${-R * 0.12} ${R * 0.12} ${-R * 0.42} c0 ${-R * 0.32} ${R * 0.08} ${-R * 0.62} ${R * 0.42} ${-R * 0.62} Z" fill="${C.white}"/>` + `<path d="M${cx - R * 0.14} ${cy + R * 0.50} a${R * 0.14} ${R * 0.14} 0 0 0 ${R * 0.28} 0 Z" fill="${C.white}"/>`
  };
  function star(cx, cy, R, fill, innerRatio) {
    innerRatio = innerRatio || 0.46;
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const ang = -Math.PI / 2 + i * Math.PI / 5;
      const rad = i % 2 ? R * innerRatio : R;
      pts.push(`${(cx + rad * Math.cos(ang)).toFixed(2)},${(cy + rad * Math.sin(ang)).toFixed(2)}`);
    }
    return `<polygon points="${pts.join(' ')}" fill="${fill}"/>`;
  }
  function heart(cx, cy, R, fill) {
    return `<path d="M${cx} ${cy + R * 0.72} C${cx - R * 1.2} ${cy - R * 0.18} ${cx - R * 0.5} ${cy - R * 0.9} ${cx} ${cy - R * 0.2} C${cx + R * 0.5} ${cy - R * 0.9} ${cx + R * 1.2} ${cy - R * 0.18} ${cx} ${cy + R * 0.72} Z" fill="${fill}"/>`;
  }
  function wrap(inner) {
    const sh = uid('sh');
    const body = inner(sh);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 170"><defs>${shadow(sh)}</defs>${body}</svg>`;
  }
  const S = {};

  // ---------- COMMENTS ----------
  S['comments'] = wrap(sh => {
    const x = 44,
      y = 42,
      w = 128,
      h = 72;
    return card(x, y, w, h, 11, sh) + avatar(x + 18, y + 22, 8.5) + bars(x + 34, y + 15, [{
      w: 78,
      fill: C.teal,
      h: 4
    }, {
      w: 96
    }, {
      w: 60
    }], 8) + rr(x + 16, y + 46, w - 32, 1, 0.5, C.lineSoft) + avatar(x + 18, y + 58, 7) + bars(x + 32, y + 53, [{
      w: 64
    }, {
      w: 40
    }], 7) + badge(178, 52, 21, ic.person, C.teal, sh) + heart(150, 40, 5.4, C.coral);
  });

  // ---------- VIDEO COMMENTS ----------
  S['video-comments'] = wrap(sh => {
    const x = 40,
      y = 44,
      w = 126,
      h = 70;
    return card(x, y, w, h, 11, sh) + avatar(x + 17, y + 18, 7.5) + bars(x + 30, y + 12, [{
      w: 84,
      fill: C.teal,
      h: 4
    }, {
      w: 64
    }], 7)
    // record pill (dashed coral) with play
    + `<rect x="${x + 16}" y="${y + 38}" width="${w - 58}" height="20" rx="10" fill="${C.coralPale}" stroke="${C.coral}" stroke-width="1.4" stroke-dasharray="4 3"/>` + ic.play(x + 34, y + 48, 9, C.coral) + bars(x + 46, y + 45, [{
      w: 34,
      fill: C.coralSoft,
      h: 3.2
    }], 0) + avatar(x + w - 16, y + 50, 6) + badge(176, 56, 22, ic.camera, C.teal, sh);
  });

  // ---------- ONE-ON-ONE CHAT ----------
  S['one-on-one-chat'] = wrap(sh => {
    const x = 64,
      y = 40,
      w = 128,
      h = 72;
    return card(x + 8, y + 8, w, h - 6, 11, sh, {
      fill: C.paper
    }) // back card for depth
    + card(x, y, w, h, 11, sh) + avatar(x + 18, y + 20, 8) + bars(x + 34, y + 13, [{
      w: 74,
      fill: C.teal,
      h: 4
    }, {
      w: 92
    }], 8) + `<path d="M${x + w - 20} ${y + 17} l5 5 l-5 5" fill="none" stroke="${C.glyph}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` + rr(x + 16, y + 44, w - 32, 1, 0.5, C.lineSoft) + avatar(x + 18, y + 56, 7) + bars(x + 33, y + 51, [{
      w: 58
    }, {
      w: 78
    }], 7) + `<path d="M${x + w - 20} ${y + 55} l5 5 l-5 5" fill="none" stroke="${C.glyph}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` + badge(60, 96, 21, ic.person, C.teal, sh);
  });

  // ---------- ANONYMOUS COMMENTS ----------
  S['anonymous-comments'] = wrap(sh => {
    const x = 70,
      y = 40,
      w = 124,
      h = 72;
    return card(x, y, w, h, 11, sh) + avatar(x + 18, y + 20, 8) + bars(x + 34, y + 13, [{
      w: 70,
      fill: C.teal,
      h: 4
    }, {
      w: 88
    }], 8) + `<path d="M${x + w - 20} ${y + 17} l5 5 l-5 5" fill="none" stroke="${C.glyph}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` + rr(x + 16, y + 44, w - 32, 1, 0.5, C.lineSoft) + bars(x + 18, y + 54, [{
      w: 96,
      fill: C.coralSoft,
      h: 4
    }, {
      w: 54
    }], 8) + `<path d="M${x + w - 22} ${y + 58} l6 0 M${x + w - 19} ${y + 55} l3 3 l-3 3" fill="none" stroke="${C.coral}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>` + badge(64, 94, 21, ic.mask, C.teal, sh);
  });

  // ---------- MANAGED COMMENTS ----------
  S['managed-comments'] = wrap(sh => {
    const x = 58,
      y = 36,
      w = 124,
      h = 66;
    // hourglass
    const hg = `<g transform="translate(${x + 20},${y + 34})">` + `<rect x="-7" y="-9" width="14" height="2.4" rx="1.2" fill="${C.glyph}"/>` + `<rect x="-7" y="6.6" width="14" height="2.4" rx="1.2" fill="${C.glyph}"/>` + `<path d="M-5.4 -8 L5.4 -8 L0.6 0 L5.4 8 L-5.4 8 L-0.6 0 Z" fill="${C.gold}"/></g>`;
    return card(x, y, w, h, 11, sh) + avatar(x + 18, y + 20, 8) + bars(x + 34, y + 13, [{
      w: 72,
      fill: C.line,
      h: 4
    }, {
      w: 90
    }], 8) + rr(x + 16, y + 42, w - 32, 1, 0.5, C.lineSoft) + bars(x + 38, y + 52, [{
      w: 84
    }, {
      w: 50
    }], 7) + hg + badge(132, 96, 18, ic.check, C.teal, sh) + badge(168, 96, 18, ic.x, C.coral, sh);
  });

  // ---------- BADGES ----------
  S['badges'] = wrap(sh => {
    const x = 66,
      y = 38,
      w = 124,
      h = 68;
    return card(x, y, w, h, 11, sh) + avatar(x + 18, y + 20, 8) + bars(x + 34, y + 14, [{
      w: 72,
      fill: C.line,
      h: 4
    }, {
      w: 90
    }], 8) + heart(x + w - 22, y + 20, 5, C.coral) + rr(x + 16, y + 44, w - 32, 1, 0.5, C.lineSoft) + bars(x + 34, y + 54, [{
      w: 80
    }, {
      w: 52
    }], 7)
    // star award bottom-left
    + `<g filter="url(#${sh})">` + circ(60, 94, 21, C.white) + `</g>` + circ(60, 94, 19, C.gold) + star(60, 94, 11, C.white) + circ(60, 94, 3.4, C.gold);
  });

  // ---------- NOTIFICATIONS ----------
  S['notifications'] = wrap(sh => {
    const x = 66,
      y = 40,
      cx = x + 52;
    // letter behind
    const letter = card(x + 18, y - 4, 72, 46, 5, sh) + bars(x + 30, y + 8, [{
      w: 46,
      fill: C.teal,
      h: 3.4
    }, {
      w: 40
    }, {
      w: 30
    }], 8);
    // envelope
    const env = `<path d="M${x + 6} ${y + 26} L${x + 102} ${y + 26} L${x + 102} ${y + 70} a4 4 0 0 1 -4 4 L${x + 10} ${y + 74} a4 4 0 0 1 -4 -4 Z" fill="${C.glyphSoft}"/>` + `<path d="M${x + 6} ${y + 30} L${x + 54} ${y + 60} L${x + 102} ${y + 30}" fill="none" stroke="${C.white}" stroke-width="2.4" stroke-linejoin="round"/>` + `<path d="M${x + 6} ${y + 74} L${x + 44} ${y + 50} M${x + 102} ${y + 74} L${x + 64} ${y + 50}" stroke="${C.glyph}" stroke-width="1.4" stroke-opacity="0.5"/>`;
    // bell badge
    const bell = `<g filter="url(#${sh})">` + circ(x + 96, y + 62, 15, C.white) + `</g>` + circ(x + 96, y + 62, 13, C.coral) + ic.bell(x + 96, y + 62, 16) + circ(x + 105, y + 52, 7, C.ink) + `<text x="${x + 105}" y="${y + 55.4}" font-family="Poppins,Arial,sans-serif" font-size="9" font-weight="700" fill="${C.white}" text-anchor="middle">5</text>`;
    return `<g filter="url(#${sh})"></g>` + letter + env + bell;
  });

  // ---------- GROUPS CHAT ----------
  S['groups-chat'] = wrap(sh => {
    return `<rect x="44" y="52" width="92" height="34" rx="9" fill="${C.white}" stroke="${C.border}" stroke-width="1" filter="url(#${sh})"/>` + bars(58, 62, [{
      w: 60,
      fill: C.teal,
      h: 4
    }, {
      w: 42
    }], 9) + `<rect x="78" y="92" width="100" height="36" rx="9" fill="${C.white}" stroke="${C.border}" stroke-width="1" filter="url(#${sh})"/>` + bars(92, 103, [{
      w: 68
    }, {
      w: 50
    }], 9) + badge(176, 58, 22, ic.group, C.teal, sh);
  });

  // ---- character + chart helpers ----
  function faceAvatar(cx, cy, R, o) {
    const skin = o.skin || '#F0C29A',
      hair = o.hair || C.ink,
      top = o.top || C.coral,
      bg = o.bg || C.tealSoft,
      hairStyle = o.hair2 || 'long';
    const cid = uid('fa');
    let g = `<g><circle cx="${cx}" cy="${cy}" r="${R}" fill="${bg}"/>` + `<clipPath id="${cid}"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath>` + `<g clip-path="url(#${cid})">`;
    // shoulders/top
    g += circ(cx, cy + R * 1.02, R * 0.78, top);
    // long hair back
    if (hairStyle === 'long') g += circ(cx, cy - R * 0.02, R * 0.56, hair) + rr(cx - R * 0.56, cy - R * 0.1, R * 0.18, R * 1.0, R * 0.09, hair) + rr(cx + R * 0.38, cy - R * 0.1, R * 0.18, R * 1.0, R * 0.09, hair);
    // neck
    g += rr(cx - R * 0.14, cy + R * 0.30, R * 0.28, R * 0.40, R * 0.1, skin);
    // face
    g += circ(cx, cy - R * 0.04, R * 0.44, skin);
    // hair front
    if (hairStyle === 'long') g += `<path d="M${cx - R * 0.46} ${cy - R * 0.04} q${R * 0.06} ${-R * 0.56} ${R * 0.48} ${-R * 0.56} q${R * 0.42} 0 ${R * 0.48} ${R * 0.56} q${-R * 0.2} ${-R * 0.22} ${-R * 0.48} ${-R * 0.22} q${-R * 0.30} 0 ${-R * 0.48} ${R * 0.22} Z" fill="${hair}"/>`;else if (hairStyle === 'curly') g += `<path d="M${cx - R * 0.5} ${cy - R * 0.1} a${R * 0.16} ${R * 0.16} 0 1 1 ${R * 0.2} ${-R * 0.22} a${R * 0.16} ${R * 0.16} 0 1 1 ${R * 0.28} ${-R * 0.04} a${R * 0.16} ${R * 0.16} 0 1 1 ${R * 0.32} ${R * 0.06} a${R * 0.16} ${R * 0.16} 0 1 1 ${R * 0.16} ${R * 0.2} q${-R * 0.2} ${-R * 0.2} ${-R * 0.5} ${-R * 0.2} q${-R * 0.32} 0 ${-R * 0.52} ${R * 0.2} Z" fill="${hair}"/>`;else g += `<path d="M${cx - R * 0.46} ${cy - R * 0.06} q${R * 0.06} ${-R * 0.5} ${R * 0.46} ${-R * 0.5} q${R * 0.40} 0 ${R * 0.46} ${R * 0.5} q${-R * 0.2} ${-R * 0.18} ${-R * 0.46} ${-R * 0.18} q${-R * 0.28} 0 ${-R * 0.46} ${R * 0.18} Z" fill="${hair}"/>`;
    if (o.glasses) {
      const gy = cy - R * 0.06,
        gr = R * 0.15;
      g += `<g fill="none" stroke="${C.ink}" stroke-width="${R * 0.05}"><circle cx="${cx - R * 0.2}" cy="${gy}" r="${gr}"/><circle cx="${cx + R * 0.2}" cy="${gy}" r="${gr}"/><line x1="${cx - R * 0.05}" y1="${gy}" x2="${cx + R * 0.05}" y2="${gy}"/></g>`;
    }
    g += `</g></g>`;
    return g;
  }
  function arc(cx, cy, rO, rI, a0, a1, fill) {
    const p = (r, a) => [(cx + r * Math.cos(a)).toFixed(2), (cy + r * Math.sin(a)).toFixed(2)];
    const big = (a1 - a0) % (2 * Math.PI) > Math.PI ? 1 : 0;
    const [x0, y0] = p(rO, a0),
      [x1, y1] = p(rO, a1),
      [x2, y2] = p(rI, a1),
      [x3, y3] = p(rI, a0);
    return `<path d="M${x0} ${y0} A${rO} ${rO} 0 ${big} 1 ${x1} ${y1} L${x2} ${y2} A${rI} ${rI} 0 ${big} 0 ${x3} ${y3} Z" fill="${fill}"/>`;
  }
  function donut(cx, cy, rO, rI, segs) {
    let a = -Math.PI / 2,
      out = '';
    const tot = segs.reduce((s, x) => s + x.f, 0);
    for (const s of segs) {
      const a1 = a + s.f / tot * 2 * Math.PI;
      out += arc(cx, cy, rO, rI, a + 0.02, a1 - 0.02, s.c);
      a = a1;
    }
    return out;
  }

  // ---------- PEOPLE ----------
  S['people'] = wrap(sh => {
    const x = 86,
      y = 64,
      w = 92,
      h = 58;
    let g = card(x, y, w, h, 9, sh);
    for (let i = 0; i < 3; i++) {
      const ry = y + 13 + i * 15;
      g += avatar(x + 15, ry, 5.5) + circ(x + 19, ry + 4, 1.8, C.teal) + bars(x + 26, ry - 3, [{
        w: 42 - i * 4,
        fill: i === 0 ? C.teal : C.line,
        h: 3
      }, {
        w: 30
      }], 6) + `<path d="M${x + w - 14} ${ry - 3} l4 4 l-4 4" fill="none" stroke="${C.glyph}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    // two face avatars overlapping
    g += faceAvatar(80, 60, 23, {
      bg: C.tealSoft,
      top: C.coral,
      hair: C.ink,
      hair2: 'long'
    });
    g += faceAvatar(170, 50, 17, {
      bg: C.coralSoft,
      top: C.teal,
      skin: '#D79A6A',
      hair: '#3A2E2A',
      hair2: 'short'
    });
    return g;
  });

  // ---------- USER SPACE (media activity / presenting) ----------
  S['user-space'] = wrap(sh => {
    let g = `<ellipse cx="120" cy="120" rx="78" ry="20" fill="${C.tealPale}"/>`;
    // laptop
    g += `<path d="M84 128 L156 128 L150 150 L90 150 Z" fill="${C.glyphSoft}"/>` + rr(94, 108, 52, 22, 3, C.ink) + rr(97, 111, 46, 16, 1.5, C.tealSoft) + `<rect x="86" y="148" width="68" height="5" rx="2.5" fill="${C.glyph}"/>`;
    // character behind laptop
    g += faceAvatar(120, 74, 30, {
      bg: 'rgba(0,0,0,0)',
      top: C.coral,
      skin: '#F0C29A',
      hair: C.ink,
      hair2: 'curly',
      glasses: true
    });
    // raised arm (coral) gesturing right
    g += `<path d="M142 96 q22 -4 30 -22" fill="none" stroke="${C.coral}" stroke-width="9" stroke-linecap="round"/>` + circ(174, 72, 5.4, '#F0C29A');
    // small spark
    g += star(186, 60, 5, C.gold, 0.4);
    return g;
  });

  // ---------- QUIZZES ----------
  S['quizzes'] = wrap(sh => {
    const x = 58,
      y = 38,
      w = 118,
      h = 72;
    let g = card(x, y, w, h, 11, sh);
    g += bars(x + 16, y + 14, [{
      w: 70,
      fill: C.ink,
      h: 4.5
    }], 0);
    const opts = [[C.teal, 'check'], [C.line, ''], [C.teal, 'check'], [C.line, '']];
    for (let i = 0; i < 3; i++) {
      const oy = y + 30 + i * 15;
      const on = i === 0;
      g += on ? badge2(x + 22, oy, 6.2, C.teal) + ic.check(x + 22, oy, 6.2) : `<circle cx="${x + 22}" cy="${oy}" r="6.2" fill="${C.white}" stroke="${C.glyph}" stroke-width="1.6"/>`;
      g += bars(x + 34, oy - 1.6, [{
        w: 64 - i * 10,
        fill: on ? C.teal : C.line,
        h: 3.4
      }], 0);
    }
    // pencil
    g += `<g transform="rotate(40 ${x + w - 20} ${y + h - 22})">` + rr(x + w - 24, y + h - 40, 8, 30, 2, C.gold) + `<path d="M${x + w - 24} ${y + h - 10} l4 8 l4 -8 Z" fill="${C.ink}"/>` + rr(x + w - 24, y + h - 40, 8, 6, 2, C.coral) + `</g>`;
    return g;
  });

  // ---------- NOTES ----------
  S['notes'] = wrap(sh => {
    const x = 62,
      y = 36,
      w = 104,
      h = 80;
    let g = card(x, y, w, h, 9, sh);
    // folded corner
    g += `<path d="M${x + w - 20} ${y} L${x + w} ${y + 20} L${x + w - 20} ${y + 20} Z" fill="${C.lineSoft}"/>`;
    g += bars(x + 16, y + 18, [{
      w: 50,
      fill: C.teal,
      h: 4
    }], 0);
    g += bars(x + 16, y + 32, [{
      w: w - 32
    }, {
      w: w - 32
    }, {
      w: w - 50
    }, {
      w: w - 40
    }], 10);
    // pencil/edit badge
    g += badge2(x + w - 2, y + h - 6, 16, C.gold, sh);
    g += `<g transform="translate(${x + w - 2},${y + h - 6}) rotate(45)">` + rr(-2.4, -8, 4.8, 14, 1.5, C.white) + `<path d="M-2.4 6 l2.4 4 l2.4 -4 Z" fill="${C.white}"/>` + rr(-2.4, -8, 4.8, 3.4, 1, C.ink) + `</g>`;
    return g;
  });

  // ---------- TIMELINE (reflection point) ----------
  S['timeline'] = wrap(sh => {
    // comment popover
    let g = card(70, 40, 108, 40, 9, sh);
    g += avatar(86, 56, 7) + bars(100, 49, [{
      w: 60,
      fill: C.teal,
      h: 3.6
    }, {
      w: 74
    }], 8);
    g += `<path d="M118 80 l7 9 l7 -9 Z" fill="${C.white}"/>`;
    // progress bar
    const by = 116;
    g += ic.play(56, by, 11, C.glyph);
    g += rr(72, by - 3, 108, 6, 3, C.line);
    g += rr(72, by - 3, 52, 6, 3, C.teal);
    // lightbulb marker (gold)
    g += badge2(124, by, 11, C.gold, sh);
    g += `<path d="M124 ${by - 6} a5 5 0 0 1 5 5 c0 3 -2 3.4 -2 5 l-6 0 c0 -1.6 -2 -2 -2 -5 a5 5 0 0 1 5 -5 Z" fill="${C.white}"/>` + rr(121.4, by + 3.6, 5.2, 2, 1, C.white);
    return g;
  });

  // ---------- ACTIVITY FEED ----------
  S['activity-feed'] = wrap(sh => {
    const x = 56,
      y = 34,
      w = 118,
      h = 84;
    let g = card(x, y, w, h, 11, sh);
    const acts = [C.teal, C.coral, C.gold];
    for (let i = 0; i < 3; i++) {
      const ry = y + 18 + i * 22;
      g += avatar(x + 18, ry, 8) + circ(x + 24, ry + 6, 3.6, acts[i]) + (acts[i] === C.teal ? ic.check(x + 24, ry + 6, 3.6) : acts[i] === C.coral ? heart(x + 24, ry + 5.6, 2.1, C.white) : star(x + 24, ry + 6, 2.4, C.white, 0.4)) + bars(x + 34, ry - 4, [{
        w: 74,
        fill: i === 0 ? C.teal : C.line,
        h: 3.4
      }, {
        w: 50
      }], 7);
      if (i < 2) g += rr(x + 16, ry + 13, w - 32, 1, 0.5, C.lineSoft);
    }
    // coral pulse notification badge
    g += badge2(x + w, y + 10, 15, C.coral, sh);
    g += `<path d="M${x + w - 9} ${y + 10} l3 0 l2 -6 l4 12 l2 -6 l3 0" fill="none" stroke="${C.white}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>`;
    return g;
  });

  // ---------- ANALYTICS ----------
  S['analytics'] = wrap(sh => {
    const x = 50,
      y = 34,
      w = 146,
      h = 92;
    let g = card(x, y, w, h, 11, sh);
    g += rr(x + 14, y + 14, 40, 4, 2, C.line);
    // area chart panel
    const ax = x + 14,
      ay = y + 28,
      aw = 66,
      ah = 46;
    g += rr(ax, ay, aw, ah, 5, C.tealPale);
    g += `<path d="M${ax + 4} ${ay + ah - 8} L${ax + 18} ${ay + 20} L${ax + 30} ${ay + 30} L${ax + 44} ${ay + 12} L${ax + aw - 4} ${ay + 22} L${ax + aw - 4} ${ay + ah - 4} L${ax + 4} ${ay + ah - 4} Z" fill="${C.tealSoft}"/>` + `<path d="M${ax + 4} ${ay + ah - 8} L${ax + 18} ${ay + 20} L${ax + 30} ${ay + 30} L${ax + 44} ${ay + 12} L${ax + aw - 4} ${ay + 22}" fill="none" stroke="${C.coral}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    // bars + donut panel
    const bx = x + 90;
    const bh = [16, 28, 22, 34];
    bh.forEach((hh, i) => {
      g += rr(bx + i * 11, y + 58 - hh, 7, hh, 2, i % 2 ? C.coral : C.teal);
    });
    g += donut(x + w - 26, y + 34, 12, 6, [{
      f: 5,
      c: C.teal
    }, {
      f: 3,
      c: C.coral
    }, {
      f: 2,
      c: C.gold
    }]);
    return g;
  });

  // ---------- VIDEO ANALYTICS ----------
  S['video-analytics'] = wrap(sh => {
    const x = 50,
      y = 38,
      w = 104,
      h = 64;
    let g = card(x, y, w, h, 9, sh, {
      fill: C.teal,
      border: false
    });
    g += badge2(x + w / 2, y + h / 2 - 4, 15, C.white);
    g += ic.play(x + w / 2, y + h / 2 - 4, 13, C.teal);
    g += rr(x + 12, y + h - 12, w - 24, 4, 2, 'rgba(255,255,255,0.35)') + rr(x + 12, y + h - 12, 44, 4, 2, C.coral);
    // bar chart climbing to the right
    const bx = x + w + 6,
      bh = [14, 22, 30, 40];
    bh.forEach((hh, i) => {
      g += rr(bx + i * 12, y + h - hh + 8, 8, hh, 2, i === bh.length - 1 ? C.coral : C.ink);
    });
    return g;
  });

  // ---------- ANALYTICS EXPORTS ----------
  S['analytics-exports'] = wrap(sh => {
    let g = donut(86, 72, 30, 15, [{
      f: 4,
      c: C.teal
    }, {
      f: 3,
      c: C.coral
    }, {
      f: 2,
      c: C.gold
    }, {
      f: 2,
      c: C.line
    }]);
    g += circ(86, 72, 11, C.white);
    // bars
    const bx = 58,
      bh = [12, 20, 16, 26];
    bh.forEach((hh, i) => {
      g += rr(bx + i * 8, 118 - hh, 5, hh, 2, C.glyphSoft);
    });
    // export arrow
    g += `<path d="M138 70 q26 -6 40 4" fill="none" stroke="${C.coral}" stroke-width="6" stroke-linecap="round"/>` + `<path d="M176 64 l10 10 l-13 5 Z" fill="${C.coral}"/>`;
    return g;
  });

  // ---------- ASSESSMENT CRITERIA ----------
  S['assessment-criteria'] = wrap(sh => {
    // donut chart
    let g = donut(92, 68, 30, 0, [{
      f: 4,
      c: C.teal
    }, {
      f: 3,
      c: C.coral
    }, {
      f: 2,
      c: C.gold
    }, {
      f: 1.5,
      c: C.line
    }]);
    g += circ(92, 68, 12, C.white);
    // medal badge bottom-right
    const mx = 150,
      my = 92;
    g += `<path d="M${mx - 7} ${my + 8} l-6 18 l9 -5 l4 9 l6 -20 Z" fill="${C.coral}"/>`;
    g += `<path d="M${mx + 7} ${my + 8} l6 18 l-9 -5 l-4 9 l-6 -20 Z" fill="${C.teal}"/>`;
    g += badge2(mx, my, 17, C.gold, sh);
    g += star(mx, my, 9, C.white, 0.45);
    return g;
  });
  return S;
};
// simple shadowed/plain badge circle used by later illos
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/build-illos.js", error: String((e && e.message) || e) }); }

// social-posts/case-visuals.js
try { (() => {
// Custom on-brand case-study visuals for the Spotlite Use Case series.
// Flat Annoto style: coral #F1615C, teal #0AC6BF, yellow #FFD15A, ink #16181A, white.
// Each is a 480×340 SVG depicting its use case as an Annoto video-UI vignette.
(function () {
  const C = {
    coral: "#F1615C",
    coralD: "#E0534E",
    coralT: "#FBE7E5",
    yellow: "#FFD15A",
    teal: "#0AC6BF",
    tealD: "#0AA39D",
    ink: "#1F2533",
    navy: "#2A3142",
    line: "#E6E8EB",
    chrome: "#F2F3F5",
    bar: "#D7DBE0",
    barL: "#E9ECEF"
  };

  // shared window chrome dots
  const dots = (x, y) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${C.coralD}"/><circle cx="${x + 13}" cy="${y}" r="3.6" fill="${C.yellow}"/><circle cx="${x + 26}" cy="${y}" r="3.6" fill="${C.teal}"/>`;
  // play glyph centered at cx,cy radius r
  const play = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/><path d="M${cx - r * 0.28} ${cy - r * 0.42} L${cx + r * 0.5} ${cy} L${cx - r * 0.28} ${cy + r * 0.42} Z" fill="${C.coral}"/>`;
  const wrap = inner => `<svg viewBox="0 0 480 340" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" font-family="Poppins, sans-serif">${inner}</svg>`;
  const V = {};

  // 01 — Guided Watching: video + timeline markers + a guiding prompt bubble
  V["01"] = wrap(`
    <rect x="40" y="62" width="300" height="216" rx="18" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(62, 82)}
    <rect x="58" y="98" width="264" height="142" rx="10" fill="${C.teal}"/>
    <path d="M58 200 h264 v30 a10 10 0 0 1 -10 10 h-244 a10 10 0 0 1 -10 -10 Z" fill="${C.tealD}" opacity=".35"/>
    ${play(190, 162, 28)}
    <rect x="58" y="252" width="264" height="8" rx="4" fill="#EDEFF1"/>
    <rect x="58" y="252" width="150" height="8" rx="4" fill="${C.coral}"/>
    <circle cx="116" cy="256" r="7" fill="${C.yellow}" stroke="#fff" stroke-width="2.5"/>
    <circle cx="182" cy="256" r="7" fill="${C.coral}" stroke="#fff" stroke-width="2.5"/>
    <circle cx="252" cy="256" r="7" fill="${C.teal}" stroke="#fff" stroke-width="2.5"/>
    <g>
      <rect x="300" y="86" width="150" height="96" rx="16" fill="${C.coral}"/>
      <circle cx="326" cy="114" r="13" fill="#fff"/>
      <path d="M326 106 a8 8 0 0 1 4 15 v3 h-8 v-3 a8 8 0 0 1 4 -15 Z" fill="${C.yellow}"/>
      <rect x="322.5" y="124" width="7" height="4" rx="2" fill="#fff"/>
      <rect x="348" y="106" width="84" height="7" rx="3.5" fill="#fff"/>
      <rect x="348" y="119" width="58" height="7" rx="3.5" fill="#fff" opacity=".7"/>
      <rect x="316" y="142" width="116" height="7" rx="3.5" fill="#fff" opacity=".6"/>
      <rect x="316" y="155" width="92" height="7" rx="3.5" fill="#fff" opacity=".6"/>
      <path d="M326 180 l-5 20 l21 -12 Z" fill="${C.coral}"/>
    </g>
  `);

  // 02 — Flipped Classroom: prep video + checklist + "before class" arrow/clock
  V["02"] = wrap(`
    <rect x="36" y="96" width="196" height="150" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(56, 114)}
    <rect x="52" y="128" width="164" height="92" rx="9" fill="${C.teal}"/>
    ${play(134, 174, 23)}
    <rect x="52" y="228" width="164" height="7" rx="3.5" fill="#EDEFF1"/>
    <rect x="52" y="228" width="74" height="7" rx="3.5" fill="${C.coral}"/>
    <rect x="262" y="80" width="186" height="182" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    <rect x="282" y="102" width="104" height="11" rx="5.5" fill="${C.navy}"/>
    <g>
      <circle cx="290" cy="142" r="12" fill="${C.teal}"/><path d="M285 142 l4 4 l7 -8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="312" y="137" width="112" height="9" rx="4.5" fill="${C.bar}"/>
      <circle cx="290" cy="178" r="12" fill="${C.coral}"/><path d="M285 178 l4 4 l7 -8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="312" y="173" width="96" height="9" rx="4.5" fill="${C.bar}"/>
      <circle cx="290" cy="214" r="12" fill="${C.yellow}"/><path d="M285 214 l4 4 l7 -8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="312" y="209" width="104" height="9" rx="4.5" fill="${C.bar}"/>
    </g>
    <path d="M210 92 q40 -26 70 -2" stroke="${C.coral}" stroke-width="2.6" fill="none" stroke-linecap="round" marker-end=""/>
    <path d="M280 90 l-9 -3 l3 9 Z" fill="${C.coral}"/>
    <circle cx="244" cy="64" r="17" fill="#fff" stroke="${C.yellow}" stroke-width="3"/>
    <path d="M244 64 v-9 M244 64 l7 4" stroke="${C.navy}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  `);

  // 03 — Learner Interaction: video + stacked comment bubbles with avatars + heart
  V["03"] = wrap(`
    <rect x="30" y="98" width="206" height="150" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(50, 116)}
    <rect x="46" y="130" width="174" height="92" rx="9" fill="${C.teal}"/>
    ${play(133, 176, 23)}
    <rect x="46" y="230" width="174" height="7" rx="3.5" fill="#EDEFF1"/><rect x="46" y="230" width="96" height="7" rx="3.5" fill="${C.coral}"/>
    <g>
      <rect x="250" y="74" width="200" height="58" rx="15" fill="#fff" stroke="${C.line}" stroke-width="2"/>
      <circle cx="278" cy="103" r="15" fill="${C.coral}"/>
      <rect x="302" y="90" width="70" height="8" rx="4" fill="${C.navy}"/>
      <rect x="302" y="105" width="130" height="7" rx="3.5" fill="${C.bar}"/>
      <rect x="302" y="117" width="104" height="7" rx="3.5" fill="${C.barL}"/>
    </g>
    <g>
      <rect x="236" y="142" width="214" height="58" rx="15" fill="${C.coralT}"/>
      <circle cx="264" cy="171" r="15" fill="${C.teal}"/>
      <rect x="288" y="158" width="84" height="8" rx="4" fill="${C.navy}"/>
      <rect x="288" y="173" width="144" height="7" rx="3.5" fill="#F0C9C6"/>
      <rect x="288" y="185" width="110" height="7" rx="3.5" fill="#F4D6D3"/>
    </g>
    <g>
      <rect x="256" y="210" width="184" height="52" rx="15" fill="#fff" stroke="${C.line}" stroke-width="2"/>
      <circle cx="282" cy="236" r="14" fill="${C.yellow}"/>
      <rect x="305" y="225" width="60" height="8" rx="4" fill="${C.navy}"/>
      <rect x="305" y="240" width="118" height="7" rx="3.5" fill="${C.bar}"/>
    </g>
    <g transform="translate(214,150)">
      <path d="M12 22 C2 14 0 7 6 3 C10 0 14 2 12 6 C10 2 14 0 18 3 C24 7 22 14 12 22 Z" fill="${C.coral}"/>
    </g>
  `);

  // 04 — Interactive Activities: video + quiz/poll card (options, submit, check badge)
  V["04"] = wrap(`
    <rect x="44" y="50" width="300" height="150" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(66, 70)}
    <rect x="60" y="86" width="268" height="98" rx="9" fill="${C.teal}"/>
    ${play(194, 135, 24)}
    <g>
      <rect x="150" y="150" width="262" height="158" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
      <rect x="172" y="174" width="150" height="11" rx="5.5" fill="${C.navy}"/>
      <rect x="172" y="190" width="92" height="9" rx="4.5" fill="${C.barL}"/>
      <g>
        <rect x="172" y="214" width="218" height="34" rx="10" fill="${C.coralT}" stroke="${C.coral}" stroke-width="2"/>
        <circle cx="192" cy="231" r="9" fill="${C.coral}"/><circle cx="192" cy="231" r="3.4" fill="#fff"/>
        <rect x="210" y="227" width="120" height="9" rx="4.5" fill="${C.coral}" opacity=".8"/>
      </g>
      <g>
        <rect x="172" y="256" width="218" height="34" rx="10" fill="#fff" stroke="${C.line}" stroke-width="2"/>
        <circle cx="192" cy="273" r="9" fill="#fff" stroke="${C.bar}" stroke-width="2.4"/>
        <rect x="210" y="269" width="104" height="9" rx="4.5" fill="${C.bar}"/>
      </g>
      <circle cx="392" cy="160" r="18" fill="${C.teal}"/><path d="M385 160 l5 5 l9 -10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  `);

  // 05 — Video-Based Assignments: video timeline anchor → note card with criteria + add feedback
  V["05"] = wrap(`
    <rect x="36" y="56" width="262" height="160" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(58, 76)}
    <rect x="52" y="92" width="230" height="92" rx="9" fill="${C.teal}"/>
    ${play(167, 138, 23)}
    <rect x="52" y="194" width="230" height="8" rx="4" fill="#EDEFF1"/>
    <rect x="52" y="194" width="120" height="8" rx="4" fill="${C.coral}"/>
    <circle cx="172" cy="198" r="8" fill="${C.coral}" stroke="#fff" stroke-width="2.5"/>
    <path d="M172 206 Q200 244 250 248" stroke="${C.coralD}" stroke-width="2.4" stroke-dasharray="1 7" fill="none" stroke-linecap="round" opacity=".6"/>
    <rect x="248" y="120" width="200" height="186" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    <circle cx="272" cy="146" r="13" fill="${C.yellow}"/>
    <rect x="292" y="138" width="78" height="8" rx="4" fill="${C.navy}"/>
    <rect x="292" y="151" width="56" height="7" rx="3.5" fill="${C.barL}"/>
    <rect x="268" y="172" width="160" height="8" rx="4" fill="${C.bar}"/>
    <rect x="268" y="187" width="132" height="8" rx="4" fill="${C.barL}"/>
    <g>
      <circle cx="274" cy="218" r="9" fill="${C.teal}"/><path d="M270 218 l3 3 l5 -6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="290" y="214" width="120" height="8" rx="4" fill="${C.bar}"/>
      <circle cx="274" cy="242" r="9" fill="${C.teal}"/><path d="M270 242 l3 3 l5 -6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="290" y="238" width="98" height="8" rx="4" fill="${C.bar}"/>
    </g>
    <rect x="268" y="268" width="160" height="26" rx="13" fill="${C.coral}"/>
    <path d="M286 281 h13 M292.5 274.5 v13" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <rect x="308" y="277" width="92" height="7" rx="3.5" fill="#fff"/>
  `);

  // 06 — Better Questions: video + a coral "?" prompt card + small question bubbles + lightbulb
  V["06"] = wrap(`
    <rect x="36" y="104" width="216" height="150" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${dots(56, 122)}
    <rect x="52" y="136" width="184" height="92" rx="9" fill="${C.teal}"/>
    ${play(144, 182, 23)}
    <rect x="52" y="236" width="184" height="7" rx="3.5" fill="#EDEFF1"/><rect x="52" y="236" width="84" height="7" rx="3.5" fill="${C.coral}"/>
    <g>
      <rect x="256" y="96" width="192" height="128" rx="16" fill="${C.coral}"/>
      <circle cx="288" cy="132" r="20" fill="#fff"/>
      <path d="M281 126 a7 7 0 0 1 13 3 c0 5 -6 5 -6 9 M288 145 v.5" stroke="${C.coral}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="318" y="120" width="108" height="9" rx="4.5" fill="#fff"/>
      <rect x="318" y="136" width="80" height="9" rx="4.5" fill="#fff" opacity=".7"/>
      <rect x="276" y="166" width="150" height="8" rx="4" fill="#fff" opacity=".6"/>
      <rect x="276" y="182" width="124" height="8" rx="4" fill="#fff" opacity=".6"/>
      <rect x="276" y="198" width="138" height="8" rx="4" fill="#fff" opacity=".6"/>
    </g>
    <g>
      <rect x="300" y="236" width="60" height="40" rx="12" fill="#fff" stroke="${C.line}" stroke-width="2"/>
      <text x="330" y="263" text-anchor="middle" font-size="22" font-weight="700" fill="${C.teal}">?</text>
      <path d="M316 274 l-3 10 l11 -6 Z" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    </g>
    <g>
      <rect x="372" y="244" width="52" height="36" rx="11" fill="${C.teal}"/>
      <text x="398" y="268" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">?</text>
    </g>
    <g transform="translate(232,70)">
      <path d="M12 2 a11 11 0 0 1 6 20 q-1 1 -1 4 h-10 q0 -3 -1 -4 a11 11 0 0 1 6 -20 Z" fill="${C.yellow}"/>
      <rect x="7" y="27" width="10" height="4" rx="2" fill="${C.navy}"/>
    </g>
  `);
  window.SPOTLITE_VISUALS = V;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-posts/case-visuals.js", error: String((e && e.message) || e) }); }

// social-posts/posts-data.js
try { (() => {
// Shared content + helpers for the Spotlite Use Case social series.
// Edit copy here once; square / landscape / portrait layouts all read from it.
window.SPOTLITE_POSTS = [{
  n: "01",
  series: "Guided Watching",
  pre: "Guided",
  key: "Watching",
  sub: "Through interactive video learning",
  illo: "marketing-illustrations/scene-video-collaboration.png",
  values: ["Active, not passive learning", "Focus on the moments that matter", "Reflection while learning happens"]
}, {
  n: "02",
  series: "Flipped Classroom",
  pre: "The Flipped",
  key: "Classroom",
  sub: "Through interactive video preparation",
  illo: "marketing-illustrations/scene-self-reflection.png",
  values: ["Students arrive prepared", "Spot misconceptions early", "Richer, discussion-led class time"]
}, {
  n: "03",
  series: "Learner Interaction",
  pre: "Learner",
  key: "Interaction",
  sub: "Through contextual video discussion",
  illo: "marketing-illustrations/scene-peer-review.png",
  values: ["Discussion tied to the moment", "Stronger peer-to-peer dialogue", "Room for many perspectives"]
}, {
  n: "04",
  series: "Interactive Activities",
  pre: "Interactive",
  key: "Activities",
  sub: "Through video-based engagement",
  illo: "marketing-illustrations/scene-group-critique.png",
  values: ["Reflections, exit slips & prompts", "Active participation, not observing", "Collaboration and knowledge sharing"]
}, {
  n: "05",
  series: "Video-Based Assignments",
  pre: "Video-Based",
  key: "Assignments",
  sub: "Through interactive learning",
  illo: "marketing-illustrations/scene-skill-assessment.png",
  values: ["Responses anchored to moments", "More authentic assessment", "Real visibility into thinking"]
}, {
  n: "06",
  series: "Better Questions",
  pre: "Better",
  key: "Questions",
  sub: "Through contextual discussion prompts",
  illo: "marketing-illustrations/scene-self-reflection.png",
  flip: true,
  values: ["Intentional, well-timed prompts", "Sharper critical thinking", "More meaningful conversations"]
}];
window.SPOTLITE_CHECK = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
window.SPOTLITE_PLAY_BADGE = '<span class="badge"><span class="play"></span>Spotlite Use Case</span>';
window.SPOTLITE_BRANDMARK = '<span class="brandmark"><img src="../assets/logo-annoto-wordmark-coral.png" alt="Annoto"><span class="heart">\u2764</span></span>';

// Sparse diagonal pill field generator for a coral band of width w × height h.
window.spotlitePills = function (w, h) {
  const cols = ["#ED7571", "#E6534E"];
  const seeds = [[-0.04, 0.10, 0.14, 0.15], [0.12, 0.66, 0.09, 0.12], [0.31, -0.06, 0.07, 0.22], [0.70, 0.12, 0.13, 0.14], [0.86, 0.55, 0.17, 0.17], [0.57, 0.78, 0.06, 0.19], [0.94, -0.10, 0.08, 0.25], [0.03, 0.46, 0.05, 0.16]];
  return seeds.map((s, i) => `<span class="pill" style="left:${s[0] * w | 0}px; top:${s[1] * h | 0}px; width:${s[2] * w | 0}px; height:${s[3] * h | 0}px; background:${cols[i % 2]};"></span>`).join("");
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "social-posts/posts-data.js", error: String((e && e.message) || e) }); }

})();
