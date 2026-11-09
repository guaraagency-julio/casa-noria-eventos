(() => {
  'use strict';
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const updateHeader = () => header?.classList.toggle('header--fixed', window.scrollY > 85);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open',open);
    if(open) menu.querySelector('a')?.focus();
    else toggle.focus();
  }
  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if(menu.classList.contains('is-open')) setMenu(false);
  }));
  window.addEventListener('resize', () => { if(window.innerWidth > 820 && menu?.classList.contains('is-open')) setMenu(false); });

  // Animations are progressive enhancement: content remains visible with JS disabled via noscript rule.
  const animated = [...document.querySelectorAll('[data-reveal]')];
  if(reduced || !('IntersectionObserver' in window)) animated.forEach(el => el.classList.add('is-visible'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }),{threshold:.09,rootMargin:'0px 0px -25px 0px'});
    animated.forEach(el => io.observe(el));
  }

  let toastTimer;
  function showToast(message){
    const t = document.querySelector('[data-toast]');
    if(!t)return;
    t.textContent = message;
    t.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('is-visible'),5000);
  }
  document.querySelectorAll('[data-demo-channel]').forEach(btn => btn.addEventListener('click',() => {
    showToast('Demonstração: o canal ' + btn.dataset.demoChannel + ' será configurado quando o site for personalizado para um cliente.');
  }));

  const filters = [...document.querySelectorAll('[data-filter]')];
  const gallery = [...document.querySelectorAll('[data-gallery-card]')];
  filters.forEach(btn => btn.addEventListener('click',() => {
    const category=btn.dataset.filter;
    filters.forEach(b => {b.classList.toggle('is-active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
    gallery.forEach(card => {card.hidden=category!=='todos' && card.dataset.category!==category;});
  }));
  const lightbox=document.querySelector('[data-lightbox]');
  const photo=lightbox?.querySelector('[data-lightbox-photo]');
  const caption=lightbox?.querySelector('[data-lightbox-caption]');
  const count=lightbox?.querySelector('[data-lightbox-count]');
  let activeIndex=0,returnFocus=null;
  function visibleGallery(){return gallery.filter(x=>!x.hidden);}
  function updatePhoto(){
    const items=visibleGallery(),item=items[activeIndex];
    if(!item)return;
    const img=item.querySelector('img');
    photo.src=img.dataset.full || img.src;
    photo.alt=img.alt;
    caption.textContent=(item.dataset.caption||'Imagem de referência visual')+' · Fotografia ilustrativa';
    count.textContent=String(activeIndex+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  }
  function closeLightbox(){
    if(!lightbox)return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
    photo?.removeAttribute('src');
    returnFocus?.focus();
  }
  function stepLightbox(direction){const items=visibleGallery();if(items.length){activeIndex=(activeIndex+direction+items.length)%items.length;updatePhoto();}}
  gallery.forEach(card=>card.addEventListener('click',()=>{
    if(!lightbox)return;
    returnFocus=card;
    activeIndex=visibleGallery().indexOf(card);
    updatePhoto();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('[data-lightbox-close]')?.focus();
  }));
  lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click',closeLightbox);
  lightbox?.querySelector('[data-lightbox-prev]')?.addEventListener('click',()=>stepLightbox(-1));
  lightbox?.querySelector('[data-lightbox-next]')?.addEventListener('click',()=>stepLightbox(1));
  lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){if(lightbox?.classList.contains('is-open'))closeLightbox();else if(menu?.classList.contains('is-open'))setMenu(false);}
    if(lightbox?.classList.contains('is-open')){
      if(e.key==='ArrowRight')stepLightbox(1);
      if(e.key==='ArrowLeft')stepLightbox(-1);
      if(e.key==='Tab') {
        const controls=[...lightbox.querySelectorAll('button')];
        const first=controls[0],last=controls[controls.length-1];
        if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
      }
    }
    if(menu?.classList.contains('is-open') && e.key==='Tab'){
      const links=[...menu.querySelectorAll('a')],first=links[0],last=toggle;
      if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  const form=document.querySelector('[data-contact-form]');
  if(form){
    const params=new URLSearchParams(location.search);
    const selected=params.get('evento');
    const select=form.querySelector('[name=tipo]');
    if(selected && select && [...select.options].some(o=>o.value===selected))select.value=selected;
    const date=form.querySelector('[name=data]');
    if(date)date.min=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().split('T')[0];
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.reportValidity())return;
      const result=form.querySelector('[data-form-message]');
      const name=form.querySelector('[name=nome]').value.trim().split(' ')[0];
      result.innerHTML='<strong>Prévia preenchida, '+escapeText(name)+'.</strong> Este site é um projeto de portfólio. Nenhuma informação foi enviada ou armazenada. Em uma versão para cliente real, este formulário pode ser conectado a e-mail, CRM ou WhatsApp.';
      result.classList.add('visible');
      result.setAttribute('role','status');
      result.scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest'});
    });
  }
  function escapeText(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
})();
