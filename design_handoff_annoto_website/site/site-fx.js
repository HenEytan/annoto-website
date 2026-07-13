/* Annoto site FX — scroll reveal + smooth entrances (shared) */
(function () {
  if (window.__siteFx) return; window.__siteFx = true;

  var css = document.createElement('style');
  css.textContent =
    '[data-rv]{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.8,.2,1),transform .7s cubic-bezier(.2,.8,.2,1);transition-delay:var(--rvd,0s);will-change:opacity,transform}' +
    '[data-rv].rv-in{opacity:1;transform:none}' +
    '@media(prefers-reduced-motion:reduce){[data-rv]{opacity:1!important;transform:none!important;transition:none!important}}';
  (document.head || document.documentElement).appendChild(css);

  var ioFired = false;
  var io = null;
  try {
    io = new IntersectionObserver(function (es) {
      ioFired = true;
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  } catch (e) { io = null; }

  var seen = new WeakSet();
  function tag(el, delay) {
    if (!el || seen.has(el) || (el.closest && el.closest('nav'))) return;
    seen.add(el);
    el.setAttribute('data-rv', '');
    if (delay) el.style.setProperty('--rvd', delay + 'ms');
    if (io) io.observe(el);
  }

  // Fallback reveal: rect-based, used when IO is unavailable or never fires
  function revealInView() {
    var els = document.querySelectorAll('[data-rv]:not(.rv-in)');
    for (var i = 0; i < els.length; i++) {
      var r = els[i].getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) els[i].classList.add('rv-in');
    }
  }
  var fallbackOn = false;
  function enableFallback() {
    if (fallbackOn) return; fallbackOn = true;
    revealInView();
    window.addEventListener('scroll', revealInView, { passive: true });
    window.addEventListener('resize', revealInView);
    setInterval(revealInView, 700);
  }
  if (!io) enableFallback();
  // Self-test: if IO never fires shortly after elements are tagged, fall back.
  setTimeout(function () {
    if (!ioFired && document.querySelector('[data-rv]:not(.rv-in)')) enableFallback();
  }, 800);
  setTimeout(function () {
    if (!ioFired && document.querySelector('[data-rv]:not(.rv-in)')) enableFallback();
  }, 2500);

  function scan() {
    try {
      var divs = document.querySelectorAll('div,section,footer');
      for (var i = 0; i < divs.length; i++) {
        var g = divs[i];
        var st = g.getAttribute('style') || '';
        if (st.indexOf('grid-template-columns') > -1 && !(g.closest && g.closest('nav'))) {
          for (var j = 0; j < g.children.length; j++) tag(g.children[j], Math.min(j, 5) * 90);
        }
      }
      var headers = document.querySelectorAll('header');
      for (var k = 0; k < headers.length; k++) {
        var kids = headers[k].children;
        for (var m = 0; m < kids.length; m++) tag(kids[m], m * 90);
      }
      if (fallbackOn) revealInView();
    } catch (e) { /* never break the page */ }
  }

  var raf = 0;
  function rescan() { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); }

  var observing = false;
  function start() {
    if (!document.body) { setTimeout(start, 60); return; }
    scan();
    if (!observing) {
      try {
        var mo = new MutationObserver(rescan);
        mo.observe(document.body, { childList: true, subtree: true });
        observing = true;
      } catch (e) { /* polling below covers it */ }
    }
    var tries = 0;
    var t = setInterval(function () {
      scan();
      if (++tries >= 10) clearInterval(t);
    }, 500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
  window.addEventListener('load', rescan);
})();
