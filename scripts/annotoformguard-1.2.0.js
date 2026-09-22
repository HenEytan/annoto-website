/* AnnotoFormGuard 1.2.0 - spam defence for Webflow forms, no visible friction.
   1.0.0: off-screen honeypot (anr_hp_url); block the submit when a bot fills it.
   1.1.0: + minimum fill time for multi-field forms (demo/contact), + known spam
          message template match, + anr_t (seconds on page) recorded on every
          submission for auditing. Blocked submits get the normal "thank you"
          state so spammers see nothing to adapt to.
   1.2.0 (2026-09-22): + server-validated conversion events. GA4 enhanced
          measurement and HubSpot's collector both fire on the Submit CLICK,
          before reCAPTCHA and Webflow's server accept anything. This version
          watches the .w-form-done block and fires a GA4 event only when Webflow
          shows the success state: demo_request (/demo form), contact_request
          (contact form), newsletter_signup (footer/blog INBOX forms),
          form_accepted (anything else). Blocked spam also shows the done state
          and is skipped. Mark demo_request and contact_request as key events.
          Also records the HubSpot hutk cookie in a hidden field so a server-side
          Webflow -> HubSpot feed can keep source attribution. */
(function(){
  var T0=Date.now(),MIN_MS=3000;
  var TPL=[/exploring potential partnership/i,/pricing structure,? and any case studies/i,/president \| chief executive/i,/i am the ceo at/i];
  function why(f,h){
    if(h.value)return 'honeypot';
    var fields=f.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([name=anr_hp_url]),textarea,select').length;
    if(fields>=3&&Date.now()-T0<MIN_MS)return 'too-fast';
    var msg='';[].forEach.call(f.querySelectorAll('textarea'),function(t){msg+=' '+(t.value||'');});
    var hits=0;for(var i=0;i<TPL.length;i++)if(TPL[i].test(msg))hits++;
    if(hits>=2)return 'template';
    return '';
  }
  function done(f){var w=f.closest?f.closest('.w-form'):null;var d=w&&w.querySelector('.w-form-done');f.style.display='none';if(d)d.style.display='block';}
  function eventName(f){
    var id=f.id||'',name=f.getAttribute('data-name')||'',cls=f.className||'';
    if(id==='wf-form-Email-Form'&&/\/demo/.test(location.pathname))return 'demo_request';
    if(/Contact/i.test(id)||/\/contact/.test(location.pathname))return 'contact_request';
    if(/nlfoot-fields-a1/.test(cls)||f.hasAttribute('data-anr-sub'))return 'newsletter_signup';
    return 'form_accepted';
  }
  function accepted(f){
    if(f.__anrBlocked||f.__anrSent)return;f.__anrSent=1;
    var ev=eventName(f),p={form_id:f.id||f.getAttribute('data-name')||'form',form_name:f.getAttribute('data-name')||f.id||'form',page_path:location.pathname};
    try{if(typeof window.gtag==='function'){window.gtag('event',ev,p);}else{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:ev,form_id:p.form_id,page_path:p.page_path});}}catch(e){}
    try{console.log('[AnnotoFormGuard] accepted: '+ev);}catch(e){}
  }
  function watch(f){
    var w=f.closest?f.closest('.w-form'):null;var d=w&&w.querySelector('.w-form-done');
    if(!d||!window.MutationObserver)return;
    var mo=new MutationObserver(function(){try{if(getComputedStyle(d).display!=='none')accepted(f);}catch(e){}});
    mo.observe(d,{attributes:true,attributeFilter:['style','class']});
  }
  function guard(f){
    if(f.getAttribute('data-anr-hp'))return;f.setAttribute('data-anr-hp','1');
    var l=document.createElement('label');l.setAttribute('aria-hidden','true');l.style.cssText='position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden';l.textContent='Do not fill this field';
    var h=document.createElement('input');h.type='text';h.name='anr_hp_url';h.tabIndex=-1;h.setAttribute('autocomplete','off');l.appendChild(h);f.appendChild(l);
    var t=document.createElement('input');t.type='hidden';t.name='anr_t';f.appendChild(t);
    var hk=document.createElement('input');hk.type='hidden';hk.name='hutk';f.appendChild(hk);
    f.addEventListener('submit',function(e){
      t.value=String(Math.round((Date.now()-T0)/1000));
      try{var m=document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/);hk.value=m?m[1]:'';}catch(x){}
      var r=why(f,h);
      if(r){f.__anrBlocked=1;e.preventDefault();e.stopImmediatePropagation();done(f);try{console.log('[AnnotoFormGuard] blocked: '+r);}catch(x){}}
    },true);
    watch(f);
  }
  function g(){[].forEach.call(document.querySelectorAll('form'),guard);}
  if(document.readyState!=='loading')g();else document.addEventListener('DOMContentLoaded',g);
})();
