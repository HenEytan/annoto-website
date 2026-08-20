(function(){
  if(window.__axmNav) return; window.__axmNav=1;

  var IC={
    chat:'<path d="M4 5h16v11H9l-4 3v-3H4z"/>',
    check:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12.5l2.6 2.5L16 9"/>',
    ai:'<path d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4z"/><path d="M18 15l.7 1.8 1.8.7-1.8.7L18 21l-.7-1.8-1.8-.7 1.8-.7z"/>',
    chart:'<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="2.6" height="5"/><rect x="12" y="8" width="2.6" height="9"/><rect x="17" y="10" width="2.6" height="7"/>',
    plug:'<path d="M9 3v5M15 3v5"/><rect x="6" y="8" width="12" height="6" rx="2"/><path d="M12 14v4a3 3 0 0 0 3 3"/>',
    people:'<circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 6.5a3 3 0 0 1 0 5.8M17 20a5.5 5.5 0 0 0-2.4-4.5"/>',
    building:'<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    book:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M19 17H8a3 3 0 0 0-3 3"/>',
    folder:'<path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z"/>',
    learn:'<path d="M12 4L2 9l10 5 10-5z"/><path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"/>',
    video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-2.5v9L16 14z"/>',
    handshake:'<path d="M8 12l3-3 3 2 3-3"/><path d="M2 8l4-2 6 3 6-3 4 2"/><path d="M6 6v8l4 4 2-2 2 2 4-4V6"/>'
  };
  var svg=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var ARW='<svg class="axm-arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var TICK='<svg class="axm-tk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4 4 10-10"/></svg>';

  var motifFeature='<svg viewBox="0 0 320 130" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="axmg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fde7e6"/><stop offset="1" stop-color="#eef1fb"/></linearGradient></defs><rect width="320" height="130" fill="url(#axmg)"/><rect x="34" y="20" width="188" height="104" rx="9" fill="#fff" stroke="#eceef4"/><rect x="34" y="20" width="188" height="18" rx="9" fill="#16181c"/><circle cx="46" cy="29" r="2.4" fill="#f1615c"/><circle cx="55" cy="29" r="2.4" fill="#f6c343"/><circle cx="64" cy="29" r="2.4" fill="#37c99a"/><circle cx="128" cy="76" r="16" fill="#f1615c" opacity=".14"/><path d="M124 70l10 6-10 6z" fill="#f1615c"/><rect x="46" y="104" width="164" height="4" rx="2" fill="#e9ebf1"/><circle cx="96" cy="106" r="4" fill="#37c99a"/><circle cx="150" cy="106" r="4" fill="#f6c343"/><rect x="196" y="34" width="96" height="42" rx="8" fill="#fff" stroke="#eceef4"/><rect x="204" y="60" width="7" height="10" fill="#37c99a"/><rect x="215" y="54" width="7" height="16" fill="#f1615c"/><rect x="226" y="57" width="7" height="13" fill="#37c99a"/><rect x="237" y="50" width="7" height="20" fill="#f1615c"/><rect x="248" y="58" width="7" height="12" fill="#37c99a"/><rect x="259" y="52" width="7" height="18" fill="#f1615c"/><rect x="204" y="42" width="42" height="4" rx="2" fill="#e9ebf1"/><rect x="206" y="86" width="86" height="30" rx="8" fill="#fff" stroke="#eceef4"/><rect x="214" y="94" width="9" height="9" rx="4.5" fill="#f1615c"/><rect x="228" y="95" width="54" height="3.5" rx="1.75" fill="#e9ebf1"/><rect x="228" y="102" width="40" height="3.5" rx="1.75" fill="#eef0f4"/></svg>';
  var mediaSolutions='<svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="axsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1615c"/><stop offset="1" stop-color="#b3423e"/></linearGradient></defs><rect width="300" height="120" fill="url(#axsg)"/><rect x="24" y="30" width="150" height="66" rx="8" fill="#fff" opacity=".14"/><circle cx="70" cy="63" r="15" fill="#fff" opacity=".9"/><path d="M66 57l9 6-9 6z" fill="#f1615c"/><rect x="188" y="34" width="88" height="24" rx="6" fill="#fff"/><rect x="196" y="42" width="10" height="8" rx="4" fill="#37c99a"/><rect x="210" y="43" width="56" height="3" rx="1.5" fill="#e9ebf1"/><rect x="210" y="49" width="40" height="3" rx="1.5" fill="#eef0f4"/><rect x="188" y="64" width="88" height="24" rx="6" fill="#fff"/><rect x="196" y="72" width="10" height="8" rx="4" fill="#f6c343"/><rect x="210" y="73" width="56" height="3" rx="1.5" fill="#e9ebf1"/><rect x="210" y="79" width="34" height="3" rx="1.5" fill="#eef0f4"/></svg>';
  var mediaCase='<svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="axcg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#20242e"/><stop offset="1" stop-color="#3a2030"/></linearGradient></defs><rect width="300" height="120" fill="url(#axcg)"/><circle cx="150" cy="52" r="120" fill="#f1615c" opacity=".16"/><path d="M40 92q30-40 70-30 34 9 62-14 24-20 60-8" fill="none" stroke="#f1615c" stroke-width="3" opacity=".8"/><circle cx="110" cy="62" r="4" fill="#fff"/><circle cx="172" cy="48" r="4" fill="#fff"/><circle cx="232" cy="70" r="4" fill="#f1615c"/><text x="248" y="30" font-family="Poppins,sans-serif" font-size="34" font-weight="800" fill="#fff" opacity=".14" text-anchor="end">200+</text></svg>';
  var mediaEco='<svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="axeg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#141922"/><stop offset="1" stop-color="#1d2b3a"/></linearGradient></defs><rect width="300" height="120" fill="url(#axeg)"/><circle cx="150" cy="60" r="20" fill="#f1615c" opacity=".9"/><path d="M146 53l9 7-9 7z" fill="#fff"/><g stroke="#7fd7ff" stroke-width="2" opacity=".7"><path d="M150 60L70 34M150 60L60 86M150 60L232 32M150 60L240 90"/></g><g fill="#fff"><circle cx="70" cy="34" r="8"/><circle cx="60" cy="86" r="8"/><circle cx="232" cy="32" r="8"/><circle cx="240" cy="90" r="8"/></g></svg>';

  var MENUS={
    resources:{cls:'axm-res4',
      columns:[
        {icon:'plug',title:'INTEGRATE',items:[
          ['Any LMS','LTI 1.1 &amp; 1.3, or any site','/any-lms'],
          ['Any Video Host','YouTube, Vimeo, Kaltura &amp; more','/any-video-host'],
          ['Developers','SDK, API &amp; webhooks','/developers'],
          ['Annoto MCP','Connect AI assistants','/developers','New'],
          ['All Integrations','Every platform we support','/integrations']]},
        {icon:'learn',title:'LEARN',items:[
          ['Product Tour','Five minutes inside Annoto','/product-tour'],
          ['Guides &amp; Documentation','Setup &amp; how-to docs','/guides'],
          ['Help Center','Docs &amp; support','https://docs.annoto.net']]},
        {icon:'folder',title:'EXPLORE',items:[
          ['Blog','Guides, ideas &amp; product news','/blog'],
          ['Glossary','The language of active video','/glossary'],
          ['ROI Calculator','Estimate your impact','/roi-calculator']]},
        {icon:'check',title:'TRUST',items:[
          ['Security &amp; Trust','Our security posture','/security'],
          ['Compliance','Standards &amp; regulations','/compliance'],
          ['Accessibility','Our a11y commitment','/accessibility']]}
      ]},
    product:{cls:'axm-product',
      columns:[
        {icon:'chat',title:'ENGAGE',items:[
          ['Discussions &amp; Comments','Time-stamped, on the video','/discussions-comments'],
          ['Polls &amp; Reactions','Pulse-check any moment','/polls-reactions'],
          ['Group Chat','Live cohort conversation','/group-chat'],
          ['Activity Feed','Everything in one place','/activity-feed']]},
        {icon:'check',title:'ASSESS',items:[
          ['In-Video Quizzes','Graded checks on the timeline','/in-video-quizzes'],
          ['Peer Review','Structured student feedback','/peer-review'],
          ['Assignments &amp; Rubrics','Video submissions, scored','/video-assignments'],
          ['Reflection Points','Prompt thinking mid-video','/reflection-points']]},
        {icon:'ai',title:'CREATE WITH AI',items:[
          ['Lumo AI Copilot','Author active video in minutes','/lumo-ai','New'],
          ['Auto-Generated Quizzes','Questions from your content','/auto-generated-quizzes'],
          ['Notes &amp; Summaries','AI recap of every session','/notes-summaries']]},
        {icon:'chart',title:'MEASURE',items:[
          ['Engagement Analytics','Where learners lean in','/analytics'],
          ['Attention &amp; Comprehension','Heatmaps &amp; scores','/attention-comprehension'],
          ['Completion &amp; Gradebook','Synced to your LMS','/completion-gradebook'],
          ['Analytics Export','Take the data anywhere','/analytics-export']]}
      ],cards:true},
    solutions:{cls:'axm-solutions',
      columns:[
        {icon:'people',title:'BY ROLE',items:[
          ['Faculty','Engagement you can see','/for-faculty'],
          ['Academic Leaders','Outcomes at scale','/for-leaders'],
          ['Instructional Designers','Design active video','/for-instructional-designers'],
          ['IT &amp; LMS Admins','Deploy in minutes','/for-it-admins']]},
        {icon:'building',title:'BY SECTOR',items:[
          ['Higher Education','Active learning on campus','/higher-education'],
          ['K-12 Schools','Safe, guided participation','/k-12'],
          ['Corporate Learning','Training that sticks','/corporate-learning'],
          ['Media &amp; Communities','Audiences that talk back','/media-communities']]},
        {icon:'book',title:'BY DISCIPLINE',compact:true,items:[
          ['Nursing','','/nursing-education'],['Teacher Ed.','','/teacher-education'],
          ['STEM','','/stem'],['Business','','/business-schools'],
          ['Language','','/language-learning'],['Communication','','/communication']]},
        {icon:'learn',title:'BY LEARNING JOURNEY',items:[
          ['Self Learning','Private notes &amp; reflection','/self-learning'],
          ['Feedback &amp; Assessment','Quizzes, completion &amp; grading','/feedback-assessment'],
          ['Collaboration &amp; Engagement','Discussion on the video','/collaborative-learning'],
          ["Learners' Video Submission",'Peer review &amp; skills','/learners-video-submission'],
          ['All Learning Journeys','See the full path','/learning-journeys','New']]}
      ]},
    integrations:{cls:'axm-solutions',
      columns:[
        {icon:'plug',title:'LMS INTEGRATIONS',items:[
          ['Any LMS','LTI 1.1 &amp; 1.3, or any site','/any-lms'],
          ['Canvas','LTI 1.3 for Canvas','/integrations-canvas'],
          ['Moodle','LTI 1.3 for Moodle','/integrations-moodle'],
          ['Blackboard','LTI 1.3 for Blackboard','/integrations-blackboard'],
          ['Brightspace / D2L','LTI 1.3 for D2L','/integrations-brightspace'],
          ['Open edX','LTI 1.3 for Open edX','/integrations-openedx'],
          ['Schoology','LTI 1.3 for Schoology','/integrations-schoology']]},
        {icon:'video',title:'ANY VIDEO HOST',items:[
          ['Any Video Host','YouTube, Vimeo, Kaltura &amp; more','/any-video-host'],
          ['Kaltura','In-video engagement','/integrations-kaltura'],
          ['YouTube','Active learning on YouTube','/integrations-youtube'],
          ['Vimeo','Interactive Vimeo video','/integrations-vimeo'],
          ['Wistia','Two-way Wistia video','/integrations-wistia'],
          ['Brightcove','Engagement on Brightcove','/integrations-brightcove'],
          ['Panopto','Two-way lecture capture','/integrations-panopto']]},
        {icon:'ai',title:'DEVELOPERS',items:[
          ['Developers','SDK, API &amp; webhooks','/developers'],
          ['Annoto MCP','Connect AI assistants','/developers','New'],
          ['All Integrations','Every platform we support','/integrations'],
          ['Product Tour','Five minutes inside Annoto','/product-tour']]}
      ],
      feat:{media:motifFeature,eyebrow:'New',title:'Annoto MCP',sub:'Connect AI assistants to Annoto.',cta:'Explore',href:'/developers'}},
    customers:{cls:'axm-resources',
      columns:[
        {icon:'people',title:'CUSTOMERS',items:[
          ['Customers','Stories &amp; case studies','/customers'],
          ['Why Annoto','How we compare','/why-annoto'],
          ['Research &amp; Evidence','What the studies show','/research']]},
        {icon:'handshake',title:'PARTNERS',items:[
          ['Partners','Platform &amp; channel','/partners'],
          ['Join as a Partner','Build with Annoto','/partners'],
          ['Platforms &amp; Ecosystem','Kaltura, D2L, Canvas &amp; more','/platform-partners']]},
        {icon:'briefcase',title:'COMPANY',items:[
          ['About Annoto','Our mission &amp; story','/about'],
          ['Contact','Talk to our team','/contact'],
          ['Follow Us','LinkedIn, YouTube &amp; more','/follow']]}
      ],
      feat:{media:mediaCase,eyebrow:'Case study',title:'How 200+ institutions lifted engagement',sub:'See the outcomes teams ship with Annoto.',cta:'Read the story',href:'/customers'}}
  };

  // Synthetic top-level dropdowns to inject (not present natively in the Navbar component)
  var SYN=[{key:'customers',label:'Customers &amp; Partners'}];

  function linkHTML(it){
    var pill=it[3]?' <span class="axm-pill">'+it[3]+'</span>':'';
    var desc=it[1]?'<span class="axm-d">'+it[1]+'</span>':'';
    return '<a class="axm-link" href="'+it[2]+'"><span class="axm-t">'+it[0]+pill+'</span>'+desc+'</a>';
  }
  function colHTML(c){
    return '<div class="axm-col'+(c.compact?' axm-compact':'')+'"><div class="axm-ch"><span class="axm-ico">'+svg(IC[c.icon])+'</span><span class="axm-ct">'+c.title+'</span></div><div class="axm-list">'+c.items.map(linkHTML).join('')+'</div></div>';
  }
  function productCards(){
    return '<div class="axm-cards"><a class="axm-card" href="/security"><span class="axm-card-h">Security &amp; Compliance '+ARW+'</span><span class="axm-card-sub">Enterprise-grade, built for education.</span><span class="axm-ticks"><span class="axm-tick">'+TICK+' FERPA</span><span class="axm-tick">'+TICK+' GDPR &amp; DPA</span><span class="axm-tick">'+TICK+' LTI 1.3</span><span class="axm-tick">'+TICK+' WCAG 2.1 AA</span><span class="axm-tick">'+TICK+' ISO 27001</span></span></a><a class="axm-card axm-feature" href="/features"><span class="axm-fc-text"><span class="axm-card-h">All features '+ARW+'</span><span class="axm-card-sub">One engagement layer for any video.</span></span><span class="axm-motif">'+motifFeature+'</span></a></div>';
  }
  function featCard(f){
    return '<a class="axm-feat" href="'+f.href+'"><span class="axm-feat-media">'+f.media+'<span class="axm-feat-eye">'+f.eyebrow+'</span></span><span class="axm-feat-body"><span class="axm-feat-title">'+f.title+'</span><span class="axm-feat-sub">'+f.sub+'</span><span class="axm-feat-cta">'+f.cta+' '+ARW+'</span></span></a>';
  }
  function ctaBar(){
    return '<div class="axm-cta"><div class="axm-cta-l"><a href="/product-tour">Product tour</a><span class="axm-cta-sep"></span><a href="/contact">Talk to an expert</a><span class="axm-cta-sep"></span><a href="https://docs.annoto.net/guides">Help Center</a><span class="axm-cta-sep"></span><a href="/follow">Follow us</a></div><a class="axm-cta-get" href="/demo">Book a demo '+ARW+'</a></div>';
  }
  function panelInner(key){
    var m=MENUS[key];
    var grid='<div class="axm-grid">'+m.columns.map(colHTML).join('')+(m.feat?featCard(m.feat):'')+'</div>';
    return '<div class="axm '+m.cls+'"><div class="axm-body">'+grid+(m.cards?productCards():'')+'</div>'+ctaBar()+'</div>';
  }

  var CSS='.anr-nav .nvdd{position:static!important}'
   +'.anr-nav .nvpanel,.anr-nav .nvpanel-left{position:fixed!important;top:74px!important;left:50%!important;right:auto!important;bottom:auto!important;transform:translateX(-50%) translateY(6px)!important;width:min(1180px,96vw)!important;min-width:0!important;max-width:none!important;padding:0!important;margin:0!important;z-index:1000!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;transition:opacity .16s ease,transform .18s cubic-bezier(.2,.7,.2,1)!important}'
   +'.anr-nav .nvpanel.axm-open,.anr-nav .nvpanel-left.axm-open{opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:translateX(-50%) translateY(0)!important}'
   +'.anr-nav .axm{background:#fff;border:1px solid #e9ebf1;border-radius:16px;box-shadow:0 28px 64px -20px rgba(20,23,28,.34),0 8px 20px -12px rgba(20,23,28,.16);overflow:hidden;font-family:Poppins,Arial,sans-serif;text-align:left}'
   +'.anr-nav .axm-body{padding:24px 24px 20px}'
   +'.anr-nav .axm-grid{display:grid;gap:24px}'
   +'.axm-product .axm-grid{grid-template-columns:repeat(4,1fr)}'
   +'.axm-res4 .axm-grid{grid-template-columns:repeat(4,1fr)}'
   +'.axm-solutions .axm-grid,.axm-resources .axm-grid{grid-template-columns:1.05fr 1.05fr 1.05fr 1.32fr}'
   +'.anr-nav .axm-ch{display:flex;align-items:center;gap:9px;margin:0 0 13px}'
   +'.anr-nav .axm-ico{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:#fdecec;color:#f1615c;border:1px solid #f6c9c7;flex:0 0 auto}'
   +'.anr-nav .axm-ico svg{width:17px;height:17px}'
   +'.anr-nav .axm-ct{font:700 12px/1 Poppins,Arial,sans-serif;letter-spacing:.04em;color:#14171c}'
   +'.anr-nav .axm-list{display:flex;flex-direction:column;gap:1px}'
   +'.anr-nav .axm-link{display:block;padding:7px 10px;margin:0 -10px;border-radius:10px;text-decoration:none;transition:background .13s}'
   +'.anr-nav .axm-link:hover{background:#f4f6fa}'
   +'.anr-nav .axm-t{display:flex;align-items:center;gap:7px;font:600 14px/1.2 Poppins,Arial,sans-serif;color:#14171c}'
   +'.anr-nav .axm-link:hover .axm-t{color:#f1615c}'
   +'.anr-nav .axm-d{display:block;font:400 12px/1.35 Arial,sans-serif;color:#59616f;margin-top:2px}'
   +'.anr-nav .axm-pill{font:700 10px/1.4 Poppins,Arial,sans-serif;letter-spacing:.03em;text-transform:uppercase;color:#c8443f;background:#fdecec;border:1px solid #f6c9c7;padding:1px 6px;border-radius:999px}'
   +'.anr-nav .axm-compact .axm-list{display:grid;grid-template-columns:1fr 1fr;gap:1px 14px;align-content:start}'
   +'.anr-nav .axm-cards{display:grid;grid-template-columns:.9fr 1.55fr;gap:16px;margin-top:20px;padding-top:20px;border-top:1px solid #e9ebf1}'
   +'.anr-nav .axm-card{display:block;border:1px solid #dfe2ea;border-radius:14px;padding:17px 18px;background:#f4f6fa;text-decoration:none;transition:border-color .15s,transform .15s;position:relative;overflow:hidden}'
   +'.anr-nav .axm-card:hover{border-color:#f6c9c7;transform:translateY(-2px)}'
   +'.anr-nav .axm-card-h{display:flex;align-items:center;gap:7px;font:700 14.5px/1.2 Poppins,Arial,sans-serif;color:#14171c}'
   +'.anr-nav .axm-arw{width:15px;height:15px;color:#f1615c;transition:transform .15s;flex:0 0 auto}'
   +'.anr-nav .axm-card:hover .axm-card-h .axm-arw{transform:translateX(3px)}'
   +'.anr-nav .axm-card-sub{display:block;font:400 12.5px/1.4 Arial,sans-serif;color:#59616f;margin-top:5px}'
   +'.anr-nav .axm-ticks{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}'
   +'.anr-nav .axm-tick{display:inline-flex;align-items:center;gap:5px;font:600 12px/1 Poppins,Arial,sans-serif;color:#14171c;background:#fff;border:1px solid #dfe2ea;padding:4px 9px 4px 7px;border-radius:999px}'
   +'.anr-nav .axm-tk{width:13px;height:13px;color:#12b886}'
   +'.anr-nav .axm-feature{display:flex;align-items:center;gap:16px;padding-right:0}'
   +'.anr-nav .axm-fc-text{flex:0 0 auto;max-width:46%}'
   +'.anr-nav .axm-motif{flex:1;align-self:stretch;position:relative;min-height:116px}'
   +'.anr-nav .axm-motif svg{position:absolute;inset:0;width:100%;height:100%}'
   +'.anr-nav .axm-feat{grid-column:auto;border:1px solid #dfe2ea;border-radius:14px;overflow:hidden;display:flex;flex-direction:column;background:#f4f6fa;text-decoration:none;transition:border-color .15s,transform .15s}'
   +'.anr-nav .axm-feat:hover{border-color:#f6c9c7;transform:translateY(-2px)}'
   +'.anr-nav .axm-feat-media{position:relative;height:116px;overflow:hidden}'
   +'.anr-nav .axm-feat-media svg{position:absolute;inset:0;width:100%;height:100%}'
   +'.anr-nav .axm-feat-eye{position:absolute;left:14px;top:12px;font:800 10.5px/1 Poppins,Arial,sans-serif;letter-spacing:.09em;color:#fff;text-transform:uppercase;opacity:.92}'
   +'.anr-nav .axm-feat-body{padding:14px 15px 16px}'
   +'.anr-nav .axm-feat-title{display:block;font:700 14.5px/1.25 Poppins,Arial,sans-serif;color:#14171c}'
   +'.anr-nav .axm-feat-sub{display:block;font:400 12.5px/1.4 Arial,sans-serif;color:#59616f;margin-top:5px}'
   +'.anr-nav .axm-feat-cta{display:inline-flex;align-items:center;gap:6px;margin-top:11px;font:650 13px/1 Poppins,Arial,sans-serif;color:#f1615c}'
   +'.anr-nav .axm-feat:hover .axm-feat-cta .axm-arw{transform:translateX(3px)}'
   +'.anr-nav .axm-cta{display:flex;align-items:center;justify-content:space-between;gap:16px;background:linear-gradient(100deg,#17131a,#301820);padding:14px 24px}'
   +'.anr-nav .axm-cta-l{display:flex;align-items:center;gap:15px;font:600 13.5px/1 Poppins,Arial,sans-serif}'
   +'.anr-nav .axm-cta-l a{color:#fff;opacity:.9;text-decoration:none} .anr-nav .axm-cta-l a:hover{opacity:1}'
   +'.anr-nav .axm-cta-sep{width:1px;height:15px;background:rgba(255,255,255,.24)}'
   +'.anr-nav .axm-cta-get{display:inline-flex;align-items:center;gap:7px;font:700 14px/1 Poppins,Arial,sans-serif;color:#fff;background:#f1615c;padding:9px 17px;border-radius:10px;text-decoration:none;box-shadow:0 8px 20px -8px rgba(241,97,92,.7);transition:background .2s,transform .12s}'
   +'.anr-nav .axm-cta-get:hover{background:#c8443f;transform:translateY(-1px)}'
   +'.anr-nav .axm-cta-get .axm-arw{color:#fff}'
   +'.anr-nav .nvdd.axm-syn{position:static!important;display:flex;align-items:center}'
   +'.anr-nav .nvdd.axm-syn>.axm-syntrig{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap}'
   +'.anr-nav .axm-synchev{margin-left:5px;width:9px;height:9px;opacity:.55;flex:0 0 auto}'
   +'@media (max-width:1100px){.anr-nav .nvpanel,.anr-nav .nvpanel-left{display:none!important}.anr-nav .nvdd.axm-syn{display:none!important}}'
   +'@media (prefers-reduced-motion:reduce){.anr-nav .axm-card,.anr-nav .axm-feat,.anr-nav .axm-arw{transition:none!important}}';

  var hideT=null, escBound=false;
  function panelsOf(nav){return [].slice.call(nav.querySelectorAll('.nvpanel,.nvpanel-left'));}
  function syncAria(nav){[].slice.call(nav.querySelectorAll('.nvdd')).forEach(function(dd){var t=dd.querySelector('.anr-nav-trigger,.axm-syntrig');var p=dd.querySelector('.nvpanel,.nvpanel-left');if(t&&p)t.setAttribute('aria-expanded',p.classList.contains('axm-open')?'true':'false');});}
  function closeAll(nav){panelsOf(nav).forEach(function(p){p.classList.remove('axm-open');});syncAria(nav);}
  function openOnly(nav,panel){clearTimeout(hideT);panelsOf(nav).forEach(function(p){p.classList.toggle('axm-open',p===panel);});syncAria(nav);}
  function scheduleClose(nav){clearTimeout(hideT);hideT=setTimeout(function(){closeAll(nav);},160);}

  // Create synthetic top-level dropdowns (Integrations, Customers & Partners) that don't exist in the component.
  function ensureSyn(nav){
    var center=nav.querySelector('.anr-nav-center')||nav;
    var refTrig=nav.querySelector('.anr-nav-trigger');
    var trigCls=refTrig?refTrig.className:'anr-nav-trigger';
    var chev='<svg class="axm-synchev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    var pricing=center.querySelector('.anr-nav-pricing');
    SYN.forEach(function(s){
      if(center.querySelector('[data-axm-key="'+s.key+'"]')) return;
      var dd=document.createElement('div');
      dd.className='nvdd axm-syn';
      var trig=document.createElement('a');
      trig.className=trigCls+' axm-syntrig';
      trig.setAttribute('href','#');
      trig.setAttribute('data-axm-key',s.key);
      trig.setAttribute('role','button');
      trig.innerHTML='<span>'+s.label+'</span>'+chev;
      var panel=document.createElement('div');
      panel.className='nvpanel';
      dd.appendChild(trig); dd.appendChild(panel);
      if(pricing) center.insertBefore(dd,pricing); else center.appendChild(dd);
    });
  }

  function keyOf(trig){
    var k=trig.getAttribute('data-axm-key');
    if(k) return MENUS[k]?k:null;
    var txt=(trig.textContent||'').toLowerCase();
    return /product/.test(txt)?'product':/solution/.test(txt)?'solutions':/resource/.test(txt)?'resources':null;
  }

  function inject(){
    var nav=document.querySelector('nav.anr-nav');
    if(!nav) return false;
    if(!document.getElementById('axm-css')){var st=document.createElement('style');st.id='axm-css';st.textContent=CSS;document.head.appendChild(st);}
    if(!escBound){escBound=true;document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll(nav);});}
    ensureSyn(nav);
    var dds=nav.querySelectorAll('.nvdd');
    var mapped=0;
    dds.forEach(function(dd){
      var trig=dd.querySelector('.anr-nav-trigger,.axm-syntrig');
      var panel=dd.querySelector('.nvpanel,.nvpanel-left');
      if(!trig||!panel) return;
      var key=keyOf(trig);
      if(!key||!MENUS[key]) return;
      if(panel.getAttribute('data-axm')==='1') { mapped++; return; }
      panel.innerHTML=panelInner(key);
      panel.setAttribute('data-axm','1');
      trig.addEventListener('mouseenter',function(){openOnly(nav,panel);});
      trig.addEventListener('mouseleave',function(){scheduleClose(nav);});
      trig.addEventListener('click',function(e){e.preventDefault();panel.classList.contains('axm-open')?closeAll(nav):openOnly(nav,panel);});
      trig.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '||e.key==='Spacebar'){e.preventDefault();panel.classList.contains('axm-open')?closeAll(nav):openOnly(nav,panel);}});
      panel.addEventListener('mouseenter',function(){clearTimeout(hideT);});
      panel.addEventListener('mouseleave',function(){scheduleClose(nav);});
      mapped++;
    });
    return mapped>0;
  }

  if(document.readyState!=='loading'){inject();}else{document.addEventListener('DOMContentLoaded',inject);}
  var tries=0,iv=setInterval(function(){tries++;var nav=document.querySelector('nav.anr-nav');if(nav&&nav.querySelectorAll('[data-axm="1"]').length>=5||tries>24){clearInterval(iv);}else{inject();}},250);
})();
