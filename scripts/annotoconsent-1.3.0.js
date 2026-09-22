(function(){var K='annoto_consent',MID='G-RB2LBDL082';
/* AnnotoConsent 1.3.0 (2026-09-22)
   1.2.0 silenced GA4 for automation clients. 1.3.0 keeps that for HARD signals
   (webdriver, headless UA, automation globals, non-production host) and TAGS
   soft signals (bot-shaped viewports, no languages, software WebGL) with
   traffic_type=bot so a GA4 Data filter (Admin > Data settings > Data filters >
   Internal traffic, value "bot") excludes them while the raw stream stays
   inspectable under the "Test data filter name" dimension.
   It also LOADS the GA4 tag itself, after the consent default, so the tag never
   fires before consent is declared. Remove the measurement ID from Webflow >
   Site settings > Integrations > Google Analytics; while it is still there this
   script detects the native tag and does not load a second copy. */
function hardBot(){try{
 if(navigator.webdriver===true)return'webdriver';
 var ua=navigator.userAgent||'';
 if(/HeadlessChrome|PhantomJS|Puppeteer|Playwright|Slimer|Electron\//i.test(ua))return'ua';
 if(window._phantom||window.callPhantom||window.__nightmare||window.domAutomation||window.__selenium_unwrapped||window.__webdriver_evaluate)return'automation';
 return null;}catch(e){return null;}}
function softBot(){try{
 if(!navigator.languages||navigator.languages.length===0)return'no-languages';
 var w=screen.width,h=screen.height;
 if((w===800&&h===600)||(w===1366&&h===1366)||(w===1280&&h===1200)||(w===h&&w>=1024))return'viewport';
 try{var c=document.createElement('canvas'),g=c.getContext('webgl')||c.getContext('experimental-webgl');
  if(g){var d=g.getExtension('WEBGL_debug_renderer_info');var r=d?String(g.getParameter(d.UNMASKED_RENDERER_WEBGL)||''):'';
  if(/SwiftShader|llvmpipe|Mesa OffScreen|Software Adapter|Basic Render Driver/i.test(r))return'software-gl';}}catch(e){}
 return null;}catch(e){return null;}}
function offProd(){try{var hn=(location.hostname||'').toLowerCase();return !(hn==='annoto.net'||hn==='www.annoto.net');}catch(e){return false;}}
var hard=hardBot()||(offProd()?'non-production-host':null),soft=hard?null:softBot();
window.__anrBot=hard||soft||null;
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;
if(hard){try{window['ga-disable-'+MID]=true;}catch(e){}}
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
var s=null;try{s=localStorage.getItem(K);}catch(e){}
function grant(){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}
if(s==='granted')grant();
if(soft){gtag('set',{traffic_type:'bot'});}
if(hard==='non-production-host'){gtag('set',{traffic_type:'internal'});}
if(!hard){
 var native=document.querySelector('script[src*="googletagmanager.com/gtag/js?id='+MID+'"]');
 if(!native){var t=document.createElement('script');t.async=true;t.src='https://www.googletagmanager.com/gtag/js?id='+MID;(document.head||document.documentElement).appendChild(t);}
 gtag('js',new Date());
 gtag('config',MID,soft?{anr_bot:soft}:{});
}
function hide(){var b=document.getElementById('anr-cc');if(b&&b.parentNode)b.parentNode.removeChild(b);}
function set(v){try{localStorage.setItem(K,v);}catch(e){}if(v==='granted')grant();hide();}
function build(){if(hard)return;if(s==='granted'||s==='denied')return;if(document.getElementById('anr-cc'))return;
 var css='#anr-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:520px;margin:0 auto;background:#fff;border:1px solid #E2E2E5;border-radius:16px;box-shadow:0 18px 50px rgba(22,24,26,.18);padding:20px 22px;font-family:Arial,sans-serif}#anr-cc .anr-cct{margin:0 0 6px;font:700 16px Poppins,Arial,sans-serif;color:#16181A}#anr-cc p{margin:0 0 14px;font:400 13px/1.5 Arial,sans-serif;color:#3B3F45}#anr-cc a{color:#C6403B}#anr-ccr{display:flex;gap:10px;flex-wrap:wrap}#anr-cc button{border:0;border-radius:10px;padding:10px 18px;font:700 13px Arial,sans-serif;cursor:pointer}.anr-cca{background:#C6403B;color:#fff}.anr-ccd{background:#F1F1F3;color:#16181A}';
 var st=document.createElement('style');st.appendChild(document.createTextNode(css));document.head.appendChild(st);
 var d=document.createElement('div');d.id='anr-cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie consent');
 d.innerHTML='<div class="anr-cct">We value your privacy</div><p>We use cookies to analyze traffic and improve your experience. See our <a href="/privacy" target="_blank" rel="noopener">Privacy Policy</a>.</p><div id="anr-ccr"><button class="anr-cca" id="anr-cca">Accept all</button><button class="anr-ccd" id="anr-ccd">Decline</button></div>';
 document.body.appendChild(d);document.getElementById('anr-cca').onclick=function(){set('granted');};document.getElementById('anr-ccd').onclick=function(){set('denied');};}
if(document.readyState!=='loading')build();else document.addEventListener('DOMContentLoaded',build);
})();
