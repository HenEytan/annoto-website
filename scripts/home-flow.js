/* Annoto Home — "How it works" 4-step interactive section.
   Injected into <div class="anr-flow-mount"> on the Home page via Shadow DOM
   (full style isolation; canvas charts; stays in the page for SEO/a11y). */
(function () {
  var MOUNT = '.anr-flow-mount';

  var CSS = `
  :host{display:block; margin:0; background:var(--ink); color:#EDE7EA; overflow-x:hidden;
    -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
    --ink:#0C0910; --ink2:#151019; --ink3:#1F1726;
    --coral:#F1615C; --coral2:#FF8B78; --coralDeep:#C8433F; --teal:#12B5AD;
    --paper:#FBFAFB; --paper2:#F2F0F5; --line:#E7E3EC; --line2:#EEEBF1;
    --tx:#1B1622; --tx2:#524C5C; --tx3:#8A8393;
    --display:-apple-system,BlinkMacSystemFont,"SF Pro Display","Segoe UI",system-ui,sans-serif;
    --mono:"SF Mono",ui-monospace,"JetBrains Mono","Roboto Mono",monospace;
    --shadow:0 44px 130px -32px rgba(0,0,0,.72), 0 8px 30px -12px rgba(0,0,0,.55);
    font-family:var(--display)}
  *{box-sizing:border-box}
  .stage{position:relative; padding:clamp(52px,8vh,104px) 20px clamp(64px,9vh,120px); isolation:isolate}
  .amb{position:absolute; inset:0; z-index:-1; overflow:hidden; pointer-events:none}
  .amb .bloom{position:absolute; left:64%; top:-6%; width:1080px; height:760px; transform:translateX(-50%);
    background:radial-gradient(58% 55% at 50% 40%, rgba(241,97,92,.30), rgba(241,97,92,.05) 55%, transparent 72%); filter:blur(4px)}
  .amb .bloom2{position:absolute; left:-12%; bottom:-24%; width:720px; height:600px;
    background:radial-gradient(50% 50% at 50% 50%, rgba(18,181,173,.16), transparent 70%)}
  .amb .grid{position:absolute; inset:0; opacity:.5;
    background:linear-gradient(rgba(255,255,255,.032) 1px,transparent 1px) 0 0/66px 66px,
      linear-gradient(90deg,rgba(255,255,255,.032) 1px,transparent 1px) 0 0/66px 66px;
    -webkit-mask-image:radial-gradient(76% 60% at 62% 26%,#000,transparent 80%);
    mask-image:radial-gradient(76% 60% at 62% 26%,#000,transparent 80%)}
  .amb .vig{position:absolute; inset:0; background:radial-gradient(120% 90% at 50% 0%,transparent 55%,rgba(0,0,0,.5))}
  .head{max-width:1120px; margin:0 auto clamp(28px,4vh,52px)}
  .hbar{display:flex; align-items:center; justify-content:space-between; gap:16px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,.09)}
  .eyebrow{display:inline-flex; align-items:center; gap:9px; font:600 12px/1 var(--display); letter-spacing:.2em; text-transform:uppercase; color:#CFC5D0}
  .eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--coral);box-shadow:0 0 12px var(--coral)}
  .hmeta{font:600 11.5px/1 var(--mono); letter-spacing:.04em; color:#8A8393}
  h1{font:800 clamp(36px,6vw,72px)/1.0 var(--display); letter-spacing:-.032em; margin:26px 0 0; text-wrap:balance; color:#F7F3F5; max-width:16ch}
  h1 u{text-decoration:none; color:var(--coral)}
  .lede{margin:20px 0 0; max-width:60ch; font:400 clamp(16px,1.4vw,18.5px)/1.6 var(--display); color:#B9B0BE; text-wrap:pretty}
  .wrap{max-width:1120px; margin:0 auto; position:relative}
  .device{position:relative; border-radius:24px; background:var(--paper); box-shadow:var(--shadow); overflow:hidden; outline:1px solid rgba(255,255,255,.14); outline-offset:-1px}
  .device::before{content:""; position:absolute; inset:0; border-radius:24px; pointer-events:none; z-index:5; background:linear-gradient(180deg,rgba(255,255,255,.5),transparent 20%); mix-blend-mode:overlay}
  .chrome{display:flex; align-items:center; gap:14px; padding:13px 18px; border-bottom:1px solid var(--line2)}
  .dots{display:flex; gap:7px}
  .dots i{width:11px;height:11px;border-radius:50%;background:#E0DCE4}
  .dots i:first-child{background:#FF5F57}.dots i:nth-child(2){background:#FEBC2E}.dots i:nth-child(3){background:#28C840}
  .url{flex:1; display:flex; align-items:center; gap:8px; justify-content:center; font:500 12.5px/1 var(--mono); color:var(--tx3)}
  .url b{color:var(--tx2); font-weight:600}
  .stamp{display:inline-flex; align-items:center; gap:7px; font:600 11px/1 var(--display); letter-spacing:.12em; text-transform:uppercase; color:var(--coralDeep); background:rgba(241,97,92,.10); padding:6px 10px; border-radius:100px}
  .stamp .pulse{width:6px;height:6px;border-radius:50%;background:var(--coral);animation:pulse 1.6s infinite}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}
  .tabs{position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:6px; padding:13px; background:linear-gradient(180deg,#fff,var(--paper2)); border-bottom:1px solid var(--line2)}
  .tab{position:relative; z-index:1; display:flex; align-items:center; gap:11px; padding:12px 14px; border:0; background:transparent; cursor:pointer; border-radius:12px; font-family:var(--display); text-align:left; transition:background .25s}
  .tab:focus-visible{outline:2px solid var(--coral); outline-offset:2px}
  .tab .n{font:600 12px/1 var(--mono); color:var(--tx3); transition:color .25s}
  .tab .l{display:flex; flex-direction:column; gap:2px; min-width:0}
  .tab .l b{font:650 14.5px/1.1 var(--display); color:var(--tx2); letter-spacing:-.01em; transition:color .25s}
  .tab .l span{font:500 11.5px/1 var(--display); color:var(--tx3); transition:color .25s}
  .tab:hover{background:rgba(0,0,0,.028)}
  .tab[aria-selected="true"] .n{color:var(--coral)}
  .tab[aria-selected="true"] .l b{color:var(--tx)}
  .tab[aria-selected="true"] .l span{color:var(--coralDeep)}
  .glider{position:absolute; z-index:0; top:13px; height:calc(100% - 26px); border-radius:12px; background:#fff; box-shadow:0 6px 18px -6px rgba(241,97,92,.4), 0 0 0 1px rgba(241,97,92,.22); transition:transform .42s cubic-bezier(.5,.05,.2,1), width .42s cubic-bezier(.5,.05,.2,1)}
  @media (max-width:720px){ .tab{flex-direction:column; align-items:flex-start; gap:5px; padding:10px 9px} .tab .l span{display:none} }
  .view{position:relative; background:var(--paper2); height:min(58vw,520px); min-height:440px; overflow:hidden}
  .panel{position:absolute; inset:0; padding:24px; opacity:0; visibility:hidden; transform:translateY(9px) scale(.994); transition:opacity .5s, transform .5s, visibility .5s}
  .panel[data-active]{opacity:1; visibility:visible; transform:none}
  @media (prefers-reduced-motion:reduce){ .panel{transition:opacity .2s} .panel:not([data-active]){transform:none} }
  .ptitle{display:flex; align-items:baseline; gap:11px; margin:0 0 4px; flex-wrap:wrap}
  .ptitle h3{font:750 19px/1.15 var(--display); letter-spacing:-.02em; color:var(--tx); margin:0}
  .ptitle .step{font:600 11px/1 var(--mono); color:var(--coral); letter-spacing:.05em}
  .psub{font:400 13px/1.5 var(--display); color:var(--tx2); margin:0 0 16px; max-width:52ch}
  .soft{box-shadow:0 12px 34px -18px rgba(20,16,24,.28)}
  .p1{display:grid; grid-template-columns:1.15fr .85fr; gap:20px; height:100%}
  .vthumb{position:relative; border-radius:15px; overflow:hidden; display:flex; align-items:flex-end; background:radial-gradient(120% 120% at 30% 8%,#2a2530,#141019 60%,#0e0b13); border:1px solid #241d2b}
  .vthumb .board{position:absolute; inset:14px 118px 52px 14px; border-radius:8px; background:repeating-linear-gradient(115deg,rgba(255,255,255,.045) 0 2px,transparent 2px 26px),radial-gradient(80% 90% at 60% 30%,#20303a,#16232c 70%,#101a20); box-shadow:inset 0 0 40px rgba(0,0,0,.5)}
  .vdock{position:absolute; right:14px; top:14px; bottom:52px; width:92px; border-radius:8px; background:rgba(255,255,255,.96); padding:9px; display:flex; flex-direction:column; gap:7px; box-shadow:-8px 0 24px -12px rgba(0,0,0,.5)}
  .vdock .dh{display:flex; align-items:center; gap:5px; font:700 9px/1 var(--display); color:var(--coralDeep); letter-spacing:.04em}
  .vdock .dh em{width:12px;height:12px;border-radius:3px;background:var(--coral);font-style:normal}
  .vdrow{display:flex; gap:5px; align-items:center}
  .vdrow i{width:14px;height:14px;border-radius:50%;background:#E9E4EE;flex:0 0 auto;font-style:normal}
  .vdrow u{flex:1;text-decoration:none;height:6px;border-radius:3px;background:#EDE8F0}
  .vdrow u.s{width:70%}
  .vthumb .play{position:absolute; left:calc(50% - 52px); top:44%; transform:translate(-50%,-50%); width:56px; height:56px; border-radius:50%; background:var(--coral); display:grid; place-items:center; box-shadow:0 12px 34px -6px rgba(241,97,92,.7), 0 0 0 8px rgba(241,97,92,.14)}
  .vthumb .play::after{content:""; margin-left:4px; border-left:18px solid #fff; border-top:11px solid transparent; border-bottom:11px solid transparent}
  .vbar{position:relative; z-index:1; width:100%; padding:11px 14px; display:flex; align-items:center; gap:10px; background:linear-gradient(0deg,rgba(8,6,10,.92),transparent)}
  .vbar .t{font:600 11px/1 var(--mono); color:#EAD9D8}
  .vbar .track{flex:1; height:4px; border-radius:3px; background:rgba(255,255,255,.18); position:relative}
  .vbar .track::before{content:""; position:absolute; inset:0 62% 0 0; background:var(--coral); border-radius:3px}
  .vmeta{position:absolute; left:14px; top:14px; z-index:1; display:flex; gap:8px}
  .badge{font:600 10.5px/1 var(--display); padding:6px 9px; border-radius:8px; background:rgba(0,0,0,.5); color:#fff; backdrop-filter:blur(4px); border:1px solid rgba(255,255,255,.12)}
  .badge.red{background:rgba(241,97,92,.92); border-color:transparent}
  .addcol{display:flex; flex-direction:column; gap:13px; min-width:0}
  .field{display:flex; align-items:center; border:1.5px solid var(--line); border-radius:12px; background:#fff; padding:5px 5px 5px 13px}
  .field .ic{color:var(--tx3); display:flex}
  .field input{flex:1; border:0; outline:0; font:500 12.5px/1 var(--mono); color:var(--tx); background:transparent; padding:10px; min-width:0; text-overflow:ellipsis}
  .field .go{border:0; background:var(--coral); color:#fff; font:650 13px/1 var(--display); padding:10px 16px; border-radius:9px; cursor:pointer; box-shadow:0 8px 18px -8px rgba(241,97,92,.7); white-space:nowrap}
  .orlbl{font:600 11px/1 var(--display); letter-spacing:.14em; text-transform:uppercase; color:var(--tx3)}
  .chips{display:flex; flex-wrap:wrap; gap:8px}
  .chip{display:inline-flex; align-items:center; gap:7px; padding:8px 12px; border-radius:10px; border:1px solid var(--line); background:#fff; font:600 12.5px/1 var(--display); color:var(--tx2); cursor:pointer; transition:border-color .2s, transform .1s}
  .chip:hover{border-color:var(--coral); transform:translateY(-1px)}
  .chip .sw{width:9px;height:9px;border-radius:3px}
  .note{display:flex; gap:9px; align-items:flex-start; margin-top:auto; padding:12px 14px; border-radius:12px; background:rgba(18,181,173,.07); border:1px solid rgba(18,181,173,.2)}
  .note svg{flex:0 0 auto; color:var(--teal); margin-top:1px}
  .note p{margin:0; font:500 12.5px/1.5 var(--display); color:var(--tx2)}
  .note b{color:var(--tx)}
  @media (max-width:720px){ .p1{grid-template-columns:1fr} .vthumb{aspect-ratio:16/10} .note{display:none} }
  .p2{display:flex; flex-direction:column; height:100%}
  .fgrid{display:grid; grid-template-columns:repeat(3,1fr); gap:11px; flex:1; align-content:start}
  .fcard{display:flex; align-items:center; gap:11px; padding:13px; border-radius:14px; border:1px solid var(--line); background:#fff}
  .fcard.on{border-color:rgba(241,97,92,.35); background:linear-gradient(180deg,#fff,#fff8f7)}
  .ftile{width:36px;height:36px;border-radius:10px; flex:0 0 auto; display:grid; place-items:center; color:#fff}
  .ftile svg{width:19px;height:19px}
  .fname{flex:1; min-width:0}
  .fname b{display:block; font:650 13px/1.15 var(--display); color:var(--tx); letter-spacing:-.01em}
  .fname span{font:500 11px/1.2 var(--display); color:var(--tx3)}
  .tog{flex:0 0 auto; width:40px; height:23px; border-radius:100px; background:#DED9E3; position:relative; transition:background .3s}
  .tog::after{content:""; position:absolute; top:3px; left:3px; width:17px;height:17px;border-radius:50%; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,.2); transition:transform .3s}
  .fcard.on .tog{background:var(--coral)}
  .fcard.on .tog::after{transform:translateX(17px)}
  .lvls{display:flex; gap:8px; margin-top:13px; padding-top:13px; border-top:1px dashed var(--line)}
  .lvl{flex:1; text-align:center; padding:9px; border-radius:11px; background:var(--paper2); font:600 12px/1.2 var(--display); color:var(--tx2)}
  .lvl b{display:block; font:600 10px/1 var(--mono); color:var(--coral); letter-spacing:.06em; margin-bottom:4px}
  .lvl.act{background:rgba(241,97,92,.1); color:var(--tx)}
  @media (max-width:720px){ .fgrid{grid-template-columns:repeat(2,1fr)} .fcard:nth-child(n+7){display:none} }
  .p3{display:grid; grid-template-columns:1.35fr .95fr; gap:16px; height:100%}
  .player{position:relative; border-radius:15px; overflow:hidden; border:1px solid #241d2b; display:flex; flex-direction:column; background:radial-gradient(120% 130% at 35% 5%,#26212c,#130f19 62%,#0c0912)}
  .stagevid{flex:1; position:relative; overflow:hidden; min-height:0}
  .stagevid .board{position:absolute; inset:18px; border-radius:10px; background:repeating-linear-gradient(112deg,rgba(255,255,255,.05) 0 2px,transparent 2px 30px),radial-gradient(85% 95% at 62% 26%,#22333d,#16232c 68%,#0f1a20); box-shadow:inset 0 0 60px rgba(0,0,0,.5)}
  .presenter{position:absolute; left:16px; bottom:16px; z-index:2; display:flex; align-items:center; gap:8px; background:rgba(12,9,16,.62); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,.12); border-radius:100px; padding:5px 12px 5px 5px}
  .presenter .pav{width:24px;height:24px;border-radius:50%;background:#12B5AD;display:grid;place-items:center;color:#fff;font:700 10px/1 var(--display)}
  .presenter b{font:600 11px/1 var(--display); color:#EDE7EA}
  .react{position:absolute; right:22px; top:18px; display:flex; gap:6px; z-index:2}
  .react span{width:30px;height:30px;border-radius:50%; background:#fff; display:grid; place-items:center; font-size:15px; box-shadow:0 6px 16px -4px rgba(0,0,0,.5); animation:float 3.4s ease-in-out infinite}
  .react span:nth-child(2){animation-delay:.5s}.react span:nth-child(3){animation-delay:1s}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  .pcontrols{padding:11px 14px 13px; background:linear-gradient(0deg,#0b0810,rgba(11,8,16,.15)); position:relative; z-index:2}
  .pscrub{height:5px; border-radius:4px; background:rgba(255,255,255,.16); position:relative; margin-bottom:9px}
  .pscrub .fill{position:absolute; inset:0 50% 0 0; background:var(--coral); border-radius:4px}
  .pscrub .head{position:absolute; left:50%; top:-3px; width:11px;height:11px;border-radius:50%;background:#fff; box-shadow:0 0 0 4px rgba(241,97,92,.4)}
  .pscrub .mk{position:absolute; top:-2px; width:8px;height:8px;border-radius:50%; background:var(--coral); border:2px solid #0b0810}
  .prow{display:flex; align-items:center; gap:12px}
  .prow .pl{width:26px;height:26px;border-radius:50%;background:#fff;display:grid;place-items:center}
  .prow .pl::after{content:"";margin-left:2px;border-left:9px solid #14101a;border-top:6px solid transparent;border-bottom:6px solid transparent}
  .prow .tm{font:600 11px/1 var(--mono); color:#D9CFD8}
  .prow .ttl{margin-left:auto; font:600 11.5px/1 var(--display); color:#B7ADBE; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .widget{display:flex; flex-direction:column; background:#fff; border:1px solid var(--line); border-radius:15px; overflow:hidden}
  .wtabs{display:flex; gap:2px; padding:11px 12px 0; border-bottom:1px solid var(--line2)}
  .wtabs b{font:650 12.5px/1 var(--display); color:var(--tx); padding:7px 10px; border-bottom:2px solid var(--coral)}
  .wtabs span{font:600 12.5px/1 var(--display); color:var(--tx3); padding:7px 10px}
  .wbody{flex:1; overflow:hidden; padding:12px; display:flex; flex-direction:column; gap:10px}
  .cmt{display:flex; gap:9px}
  .av{width:28px;height:28px;border-radius:50%; flex:0 0 auto; display:grid; place-items:center; color:#fff; font:700 11px/1 var(--display)}
  .cbody{min-width:0}
  .cmeta{display:flex; align-items:center; gap:7px; margin-bottom:2px}
  .cmeta b{font:650 12px/1 var(--display); color:var(--tx)}
  .cmeta .ts{font:600 10px/1 var(--mono); color:var(--coralDeep); background:rgba(241,97,92,.1); padding:3px 5px; border-radius:5px}
  .cmt p{margin:0; font:400 12px/1.45 var(--display); color:var(--tx2)}
  .quiz{border:1px solid rgba(241,97,92,.3); border-radius:12px; padding:11px 12px; background:#fff8f7}
  .quiz .qh{display:flex; align-items:center; justify-content:space-between; margin-bottom:7px}
  .quiz .qh b{font:700 11px/1 var(--display); letter-spacing:.08em; text-transform:uppercase; color:var(--coralDeep)}
  .quiz .qh span{font:600 10px/1 var(--mono); color:var(--tx3)}
  .quiz p{margin:0 0 9px; font:600 12.5px/1.4 var(--display); color:var(--tx)}
  .qopt{display:flex; gap:7px}
  .qopt i{flex:1; height:26px; border-radius:8px; border:1px solid var(--line); font-style:normal; font:600 11px/26px var(--display); color:var(--tx2); text-align:center}
  .qopt i.sel{background:var(--coral); color:#fff; border-color:transparent}
  .winput{margin-top:auto; display:flex; align-items:center; gap:8px; border:1px solid var(--line); border-radius:10px; padding:8px 8px 8px 12px}
  .winput span{flex:1; font:400 12px/1 var(--display); color:var(--tx3)}
  .winput b{width:26px;height:26px;border-radius:8px;background:var(--coral); display:grid; place-items:center; color:#fff}
  @media (max-width:720px){ .p3{grid-template-columns:1fr} .widget{display:none} }
  .p4{display:flex; flex-direction:column; height:100%; gap:13px}
  .stats{display:grid; grid-template-columns:repeat(4,1fr); gap:11px}
  .stat{padding:12px 13px; border-radius:14px; border:1px solid var(--line); background:#fff; position:relative; overflow:hidden}
  .stat .k{font:600 10.5px/1 var(--display); color:var(--tx3)}
  .stat .v{font:750 23px/1 var(--display); letter-spacing:-.02em; color:var(--tx); margin-top:6px; font-variant-numeric:tabular-nums}
  .stat .v i{font-style:normal; font-size:13px; color:var(--tx3); font-weight:600}
  .stat .d{font:600 10.5px/1 var(--mono); margin-top:5px}
  .stat .d.up{color:#12A594}
  .stat canvas{position:absolute; right:8px; bottom:9px; width:52px; height:22px}
  .charts{display:grid; grid-template-columns:1.55fr .85fr; gap:11px; flex:1; min-height:0}
  .chart{border:1px solid var(--line); border-radius:15px; background:#fff; padding:13px 15px; display:flex; flex-direction:column; min-height:0}
  .chart .ch{display:flex; align-items:center; justify-content:space-between; margin-bottom:6px}
  .chart .ch b{font:700 12.5px/1 var(--display); color:var(--tx); letter-spacing:-.01em}
  .chart .ch span{font:600 10px/1 var(--mono); color:var(--tx3)}
  .cwrap{position:relative; flex:1; min-height:0}
  .cwrap canvas{position:absolute; inset:0; width:100%; height:100%}
  .donutwrap{position:relative; flex:1; display:grid; place-items:center; min-height:0}
  .donutwrap canvas{width:min(148px,42vw);height:min(148px,42vw)}
  .donutwrap .dc{position:absolute; inset:0; display:grid; place-items:center; align-content:center; text-align:center}
  .donutwrap .dc b{display:block; font:750 28px/1 var(--display); color:var(--tx); font-variant-numeric:tabular-nums}
  .donutwrap .dc span{font:600 10.5px/1 var(--display); color:var(--tx3)}
  .leg{display:flex; gap:14px; justify-content:center; margin-top:4px}
  .leg i{font-style:normal; display:inline-flex; align-items:center; gap:6px; font:600 10.5px/1 var(--display); color:var(--tx2)}
  .leg i em{width:9px;height:9px;border-radius:3px;font-style:normal}
  @media (max-width:720px){ .stats{grid-template-columns:repeat(2,1fr)} .charts{grid-template-columns:1fr} }
  .spine{display:flex; align-items:center; gap:13px; padding:15px 20px; background:var(--paper); border-top:1px solid var(--line2)}
  .spine .cap{font:600 11px/1 var(--mono); color:var(--tx3); white-space:nowrap; letter-spacing:.02em; min-width:96px}
  .spine .cap b{color:var(--coralDeep)}
  .tl{position:relative; flex:1; height:16px}
  .tl .rail{position:absolute; left:0; right:0; top:50%; transform:translateY(-50%); height:5px; border-radius:4px; background:#E7E2EC}
  .tl .fill{position:absolute; left:0; top:50%; transform:translateY(-50%); height:5px; border-radius:4px; background:linear-gradient(90deg,var(--coral2),var(--coral)); width:16%; transition:width .6s cubic-bezier(.4,.1,.2,1)}
  .tl .curve{position:absolute; left:0; right:0; top:50%; transform:translateY(-50%); height:32px; opacity:0; transition:opacity .5s}
  .tl .ph{position:absolute; left:16%; top:50%; margin-top:-6.5px; margin-left:-6.5px; width:13px;height:13px;border-radius:50%;background:#fff; box-shadow:0 2px 8px rgba(0,0,0,.25), 0 0 0 4px rgba(241,97,92,.4); transition:left .6s cubic-bezier(.4,.1,.2,1); z-index:3}
  .pin{position:absolute; top:50%; transform:translate(-50%,-50%); width:9px;height:9px;border-radius:50%; opacity:0; transition:opacity .45s, transform .45s; z-index:2}
  .pin.c{background:var(--teal); box-shadow:0 0 0 3px rgba(18,181,173,.18)}
  .pin.q{background:var(--coral); box-shadow:0 0 0 3px rgba(241,97,92,.18)}
  .tt{font:600 10.5px/1 var(--mono); color:var(--tx3); white-space:nowrap}
  .spine[data-vstep="1"] .fill{width:40%} .spine[data-vstep="1"] .ph{left:40%}
  .spine[data-vstep="2"] .fill{width:62%} .spine[data-vstep="2"] .ph{left:62%}
  .spine[data-vstep="3"] .fill{width:88%} .spine[data-vstep="3"] .ph{left:88%}
  .spine[data-vstep="2"] .pin, .spine[data-vstep="3"] .pin{opacity:1}
  .spine[data-vstep="3"] .curve{opacity:1}
  @media (max-width:720px){ .spine{padding:12px 14px; gap:10px} .spine .cap{display:none} .tt{display:none} }
  .rise{opacity:0; transform:translateY(20px); transition:opacity .85s cubic-bezier(.2,.7,.2,1), transform .85s cubic-bezier(.2,.7,.2,1)}
  .in .rise{opacity:1; transform:none}
  .in .rise.d1{transition-delay:.06s}.in .rise.d2{transition-delay:.13s}.in .rise.d3{transition-delay:.22s}
  @media (prefers-reduced-motion:reduce){ .rise{transition:none;opacity:1;transform:none} .react span,.stamp .pulse{animation:none!important} }
  `;

  var HTML = `
  <section class="stage" id="stage">
    <div class="amb"><div class="bloom"></div><div class="bloom2"></div><div class="grid"></div><div class="vig"></div></div>
    <div class="head">
      <div class="hbar rise"><span class="eyebrow"><span class="dot"></span>How Annoto works</span><span class="hmeta">FOUR STEPS · ONE VIDEO</span></div>
      <h1 class="rise d1">Any video <u>in</u>.<br>Active learning <u>out</u>.</h1>
      <p class="lede rise d2">Layer Annoto onto a video you already teach with, switch on the features the activity needs, and watch the discussion, and the insight behind it, build right on the timeline.</p>
    </div>
    <div class="wrap rise d3">
      <div class="device" id="device">
        <div class="chrome">
          <span class="dots"><i></i><i></i><i></i></span>
          <span class="url">your-lms.edu<b>/course/cs-188</b></span>
          <span class="stamp"><span class="pulse"></span>Live</span>
        </div>
        <div class="tabs" role="tablist" aria-label="How Annoto works">
          <span class="glider" id="glider"></span>
          <button class="tab" id="tab0" role="tab" aria-controls="p0" aria-selected="true" data-i="0"><span class="n">01</span><span class="l"><b>Add video</b><span>Any source</span></span></button>
          <button class="tab" id="tab1" role="tab" aria-controls="p1" aria-selected="false" data-i="1"><span class="n">02</span><span class="l"><b>Set features</b><span>Per activity</span></span></button>
          <button class="tab" id="tab2" role="tab" aria-controls="p2" aria-selected="false" data-i="2"><span class="n">03</span><span class="l"><b>Engage</b><span>In the video</span></span></button>
          <button class="tab" id="tab3" role="tab" aria-controls="p3" aria-selected="false" data-i="3"><span class="n">04</span><span class="l"><b>Get insights</b><span>Every moment</span></span></button>
        </div>
        <div class="view">
          <div class="panel" id="p0" data-i="0" data-active role="tabpanel" aria-labelledby="tab0">
            <div class="p1">
              <div class="vthumb soft">
                <div class="board"></div>
                <div class="vdock"><div class="dh"><em></em>Annoto</div><div class="vdrow"><i></i><u class="s"></u></div><div class="vdrow"><i></i><u></u></div><div class="vdrow"><i></i><u class="s"></u></div><div class="vdrow"><i></i><u></u></div></div>
                <div class="vmeta"><span class="badge red">● Lecture 04</span><span class="badge">YouTube</span></div>
                <div class="play"></div>
                <div class="vbar"><span class="t">00:00</span><span class="track"></span><span class="t">24:18</span></div>
              </div>
              <div class="addcol">
                <div class="ptitle"><span class="step">STEP 01</span><h3>Start with a video you already have</h3></div>
                <p class="psub">Paste a link or pick it from your LMS. No re-uploading, no new player. Annoto docks onto the video right where you teach.</p>
                <div class="field">
                  <span class="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg></span>
                  <input value="youtube.com/watch?v=cs188-backprop" readonly aria-label="Video URL">
                  <button class="go">Add</button>
                </div>
                <div class="orlbl">Or bring it from</div>
                <div class="chips">
                  <span class="chip"><span class="sw" style="background:#E2453B"></span>Canvas</span>
                  <span class="chip"><span class="sw" style="background:#F98012"></span>Moodle</span>
                  <span class="chip"><span class="sw" style="background:#00B5E2"></span>Kaltura</span>
                  <span class="chip"><span class="sw" style="background:#1AAD19"></span>Vimeo</span>
                  <span class="chip"><span class="sw" style="background:#B7ADBE"></span>Upload</span>
                </div>
                <div class="note"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><p><b>Works everywhere.</b> YouTube, Vimeo, Kaltura, HTML5 and 15+ players, inside Canvas, Moodle, Blackboard, or your own site.</p></div>
              </div>
            </div>
          </div>
          <div class="panel" id="p1" data-i="1" role="tabpanel" aria-labelledby="tab1">
            <div class="p2">
              <div class="ptitle"><span class="step">STEP 02</span><h3>Switch on what the activity needs</h3></div>
              <p class="psub">Turn features on with a tap: comments, quizzes, notes, reactions and more. Set defaults for the whole site, one course, or a single video.</p>
              <div class="fgrid">
                <div class="fcard on"><span class="ftile" style="background:#F1615C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span><span class="fname"><b>Comments</b><span>Time-anchored</span></span><span class="tog"></span></div>
                <div class="fcard on"><span class="ftile" style="background:#7B61FF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3 8-8"/><path d="M21 12a9 9 0 1 1-6.2-8.5"/></svg></span><span class="fname"><b>Quizzes</b><span>In-video Q&amp;A</span></span><span class="tog"></span></div>
                <div class="fcard on"><span class="ftile" style="background:#12B5AD"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span><span class="fname"><b>Personal Notes</b><span>Private notebook</span></span><span class="tog"></span></div>
                <div class="fcard on"><span class="ftile" style="background:#F0A020"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.8 9.4 2.3 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.7 0 5.2 3.9 3.5 7C19 16.65 12 21 12 21z"/></svg></span><span class="fname"><b>Reactions</b><span>Emoji feedback</span></span><span class="tog"></span></div>
                <div class="fcard on"><span class="ftile" style="background:#2AA5F0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 4-6"/></svg></span><span class="fname"><b>Analytics</b><span>Engagement</span></span><span class="tog"></span></div>
                <div class="fcard"><span class="ftile" style="background:#B7ADBE"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/></svg></span><span class="fname"><b>Anonymous</b><span>Post privately</span></span><span class="tog"></span></div>
                <div class="fcard"><span class="ftile" style="background:#B7ADBE"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg></span><span class="fname"><b>Reflection Point</b><span>Pause &amp; prompt</span></span><span class="tog"></span></div>
                <div class="fcard on"><span class="ftile" style="background:#E45FA0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 8v6M22 11h-6"/></svg></span><span class="fname"><b>People</b><span>Presence &amp; @</span></span><span class="tog"></span></div>
                <div class="fcard"><span class="ftile" style="background:#B7ADBE"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6z"/></svg></span><span class="fname"><b>Badges</b><span>Recognition</span></span><span class="tog"></span></div>
              </div>
              <div class="lvls">
                <span class="lvl"><b>SITE</b>Org defaults</span>
                <span class="lvl act"><b>COURSE</b>This course</span>
                <span class="lvl"><b>VIDEO</b>Per activity</span>
              </div>
            </div>
          </div>
          <div class="panel" id="p2" data-i="2" role="tabpanel" aria-labelledby="tab2">
            <div class="p3">
              <div class="player soft">
                <div class="stagevid">
                  <div class="board"></div>
                  <div class="presenter"><span class="pav">R</span><b>Dr. Reyes · live</b></div>
                  <div class="react"><span>❤️</span><span>👏</span><span>💡</span></div>
                </div>
                <div class="pcontrols">
                  <div class="pscrub"><div class="fill"></div><div class="mk" style="left:22%"></div><div class="mk" style="left:41%"></div><div class="mk" style="left:68%"></div><div class="head"></div></div>
                  <div class="prow"><span class="pl"></span><span class="tm">12:04 / 24:18</span><span class="ttl">Backpropagation: the chain rule</span></div>
                </div>
              </div>
              <div class="widget soft">
                <div class="wtabs"><b>Discussion</b><span>Notes</span><span>Quiz</span></div>
                <div class="wbody">
                  <div class="cmt"><span class="av" style="background:#7B61FF">TP</span><div class="cbody"><div class="cmeta"><b>Tom Preece</b><span class="ts">08:32</span></div><p>Wait, why do we transpose the weight matrix here?</p></div></div>
                  <div class="cmt"><span class="av" style="background:#12B5AD">MR</span><div class="cbody"><div class="cmeta"><b>Dr. Reyes</b><span class="ts">08:41</span></div><p>Good catch. It lines the gradients up with the inputs. ↩ 3 replies</p></div></div>
                  <div class="quiz"><div class="qh"><b>Question 3 of 5</b><span>12:00</span></div><p>What does the chain rule let us compute here?</p><div class="qopt"><i>Loss</i><i class="sel">Gradients</i><i>Weights</i></div></div>
                  <div class="winput"><span>Add a comment at 12:04…</span><b><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg></b></div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel" id="p3" data-i="3" role="tabpanel" aria-labelledby="tab3">
            <div class="p4">
              <div class="ptitle"><span class="step">STEP 04</span><h3>See exactly what happened, moment by moment</h3></div>
              <div class="stats">
                <div class="stat"><div class="k">Avg engagement</div><div class="v">87<i>%</i></div><div class="d up">▲ 18 pts vs. plain video</div><canvas data-spark="1"></canvas></div>
                <div class="stat"><div class="k">Completion</div><div class="v">92<i>%</i></div><div class="d up">▲ 9 pts</div><canvas data-spark="2"></canvas></div>
                <div class="stat"><div class="k">Comments</div><div class="v">1,240</div><div class="d up">▲ 4.1×</div><canvas data-spark="3"></canvas></div>
                <div class="stat"><div class="k">Avg watch time</div><div class="v">18:40</div><div class="d up">of 24:18</div><canvas data-spark="4"></canvas></div>
              </div>
              <div class="charts">
                <div class="chart"><div class="ch"><b>Engagement across the video</b><span>peaks 12:04 · quiz</span></div><div class="cwrap"><canvas id="area"></canvas></div></div>
                <div class="chart"><div class="ch"><b>Course completion</b><span>3,120 learners</span></div><div class="donutwrap"><canvas id="donut"></canvas><div class="dc"><b>92%</b><span>completed</span></div></div><div class="leg"><i><em style="background:var(--coral)"></em>Completed</i><i><em style="background:#EAE4EE"></em>Dropped off</i></div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="spine" id="spine" data-vstep="0">
          <span class="cap" id="spineCap">Ready to <b>play</b></span>
          <span class="tt">00:00</span>
          <div class="tl">
            <div class="rail"></div>
            <div class="fill"></div>
            <canvas class="curve" id="tlcurve"></canvas>
            <span class="pin c" style="left:22%"></span>
            <span class="pin q" style="left:50%"></span>
            <span class="pin c" style="left:41%"></span>
            <span class="pin c" style="left:68%"></span>
            <span class="ph"></span>
          </div>
          <span class="tt">24:18</span>
        </div>
      </div>
    </div>
  </section>`;

  function run(R){
    var reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    var tabs=[].slice.call(R.querySelectorAll('.tab'));
    var panels=[].slice.call(R.querySelectorAll('.panel'));
    var glider=R.querySelector('#glider');
    var spine=R.querySelector('#spine'), cap=R.querySelector('#spineCap');
    var caps=['Ready to <b>play</b>','Features <b>armed</b>','<b>4 discussions</b> live','Engagement <b>mapped</b>'];
    var cur=0, timer=null;

    function moveGlider(){ var t=tabs[cur]; if(!t) return; glider.style.width=t.offsetWidth+'px'; glider.style.transform='translateX('+t.offsetLeft+'px)'; }
    function setStep(i,user){
      cur=i;
      tabs.forEach(function(t,ix){ t.setAttribute('aria-selected', ix===i?'true':'false'); t.tabIndex = ix===i?0:-1; });
      panels.forEach(function(p,ix){ ix===i ? p.setAttribute('data-active','') : p.removeAttribute('data-active'); });
      spine.setAttribute('data-vstep', i);
      cap.innerHTML = caps[i];
      moveGlider();
      if(i===3){ drawCharts(); drawCurve(); }
      if(user) restart();
    }
    function next(){ setStep((cur+1)%4); }
    function restart(){ if(timer) clearInterval(timer); if(!reduce) timer=setInterval(next,4900); }

    tabs.forEach(function(t){
      t.addEventListener('click', function(){ setStep(+t.dataset.i,true); });
      t.addEventListener('keydown', function(e){
        if(e.key==='ArrowRight'){e.preventDefault(); var n=(cur+1)%4; setStep(n,true); tabs[n].focus();}
        if(e.key==='ArrowLeft'){e.preventDefault(); var n=(cur+3)%4; setStep(n,true); tabs[n].focus();}
      });
      t.tabIndex = +t.dataset.i===0?0:-1;
    });
    var device=R.querySelector('#device');
    device.addEventListener('pointerenter', function(){ if(timer) clearInterval(timer); });
    device.addEventListener('pointerleave', restart);
    addEventListener('resize', function(){ moveGlider(); if(cur===3){drawCharts(); drawCurve();} });

    var stage=R.querySelector('#stage');
    function reveal(){ if(stage.classList.contains('in')) return; stage.classList.add('in'); moveGlider(); restart(); }
    if(reduce){ reveal(); }
    else{
      try{
        var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); reveal(); setTimeout(moveGlider,60); } }); },{threshold:.12});
        io.observe(stage);
      }catch(e){ reveal(); }
      setTimeout(reveal, 1800); /* failsafe: never leave the section hidden */
    }
    setTimeout(moveGlider,90);

    function dpr(c){ var r=c.getBoundingClientRect(), d=Math.min(devicePixelRatio||1,2); c.width=r.width*d; c.height=r.height*d; var x=c.getContext('2d'); x.setTransform(d,0,0,d,0,0); return {x:x,w:r.width,h:r.height}; }
    var PTS=[0.42,0.5,0.46,0.55,0.6,0.58,0.7,0.9,0.82,0.68,0.72,0.6,0.55,0.63,0.5,0.44];
    function spline(x,pts,X,Y,close,base){ x.beginPath(); if(close) x.moveTo(X(0),base); pts.forEach(function(v,i){ var px=X(i),py=Y(v); if(i===0){ close?x.lineTo(px,py):x.moveTo(px,py);} else { var ppx=X(i-1),ppy=Y(pts[i-1]),cx=(ppx+px)/2; x.bezierCurveTo(cx,ppy,cx,py,px,py);} }); if(close){ x.lineTo(X(pts.length-1),base); x.closePath(); } }
    function drawArea(){
      var c=R.querySelector('#area'); if(!c) return; var o=dpr(c),x=o.x,w=o.w,h=o.h; x.clearRect(0,0,w,h);
      var pad=6, bh=h-16; x.strokeStyle='rgba(20,16,24,.06)'; x.lineWidth=1;
      for(var g=0;g<=3;g++){ var yy=pad+(bh-pad)*g/3; x.beginPath(); x.moveTo(0,yy); x.lineTo(w,yy); x.stroke(); }
      var X=function(i){return w*i/(PTS.length-1);}, Y=function(v){return pad+(bh-pad)*(1-v);};
      var grad=x.createLinearGradient(0,0,0,bh); grad.addColorStop(0,'rgba(241,97,92,.34)'); grad.addColorStop(1,'rgba(241,97,92,0)');
      spline(x,PTS,X,Y,true,bh); x.fillStyle=grad; x.fill();
      spline(x,PTS,X,Y,false); x.strokeStyle='#F1615C'; x.lineWidth=2.4; x.lineJoin='round'; x.stroke();
      var pi=7; x.beginPath(); x.arc(X(pi),Y(PTS[pi]),4.5,0,7); x.fillStyle='#F1615C'; x.fill(); x.strokeStyle='#fff'; x.lineWidth=2; x.stroke();
      [2,7,11].forEach(function(i){ x.beginPath(); x.arc(X(i),h-5,2.4,0,7); x.fillStyle='#12B5AD'; x.fill(); });
      x.fillStyle='rgba(20,16,24,.4)'; x.font="600 9px 'SF Mono',ui-monospace,monospace"; x.textAlign='left'; x.fillText('00:00',0,h-1); x.textAlign='right'; x.fillText('24:18',w,h-1);
    }
    function drawDonut(){
      var c=R.querySelector('#donut'); if(!c) return; var o=dpr(c),x=o.x,w=o.w,h=o.h; x.clearRect(0,0,w,h);
      var cx=w/2,cy=h/2,r=Math.min(w,h)/2-9,lw=14; x.lineWidth=lw; x.lineCap='round';
      x.beginPath(); x.strokeStyle='#EAE4EE'; x.arc(cx,cy,r,0,7); x.stroke();
      var a=-Math.PI/2; x.beginPath(); x.strokeStyle='#F1615C'; x.arc(cx,cy,r,a+.04,a+.92*Math.PI*2-.04); x.stroke();
    }
    function drawSparks(){
      R.querySelectorAll('.stat canvas').forEach(function(c,ix){
        var o=dpr(c),x=o.x,w=o.w,h=o.h; x.clearRect(0,0,w,h);
        var seed=[[.3,.35,.4,.5,.55,.7,.85],[.4,.42,.5,.55,.6,.72,.9],[.2,.3,.35,.5,.7,.8,.95],[.5,.55,.5,.6,.65,.7,.75]][ix]||[.3,.5,.7];
        x.beginPath(); seed.forEach(function(v,i){ var px=w*i/(seed.length-1), py=h-2-(h-4)*v; i===0?x.moveTo(px,py):x.lineTo(px,py); });
        x.strokeStyle='rgba(241,97,92,.85)'; x.lineWidth=1.6; x.lineJoin='round'; x.stroke();
        var ly=h-2-(h-4)*seed[seed.length-1]; x.beginPath(); x.arc(w-1,ly,2,0,7); x.fillStyle='#F1615C'; x.fill();
      });
    }
    function drawCurve(){
      var c=R.querySelector('#tlcurve'); if(!c) return; var o=dpr(c),x=o.x,w=o.w,h=o.h; x.clearRect(0,0,w,h);
      var X=function(i){return w*i/(PTS.length-1);}, Y=function(v){return 4+(h-8)*(1-v);};
      spline(x,PTS,X,Y,false); x.strokeStyle='rgba(241,97,92,.55)'; x.lineWidth=1.6; x.lineJoin='round'; x.stroke();
    }
    function drawCharts(){ requestAnimationFrame(function(){ drawArea(); drawDonut(); drawSparks(); }); }
  }

  function boot(){
    var host=document.querySelector(MOUNT);
    if(!host || host.__anrFlow) return; host.__anrFlow=true;
    var R = host.attachShadow ? host.attachShadow({mode:'open'}) : host;
    R.innerHTML = '<style>'+CSS+'</style>'+HTML;
    run(R);
  }
  if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
