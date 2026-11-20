(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.slide')];
  const dialog = document.querySelector('#toc');
  const counter = document.querySelector('#counter');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const progress = document.querySelector('#progress');
  let current = 0;
  let printState = [];
  document.body.classList.add('js-mode');
  function fromHash() {
    const found = /^#slide-(\d+)$/.exec(location.hash);
    return found ? Math.max(0, Math.min(slides.length - 1, Number(found[1]) - 1)) : 0;
  }
  function show(index, {hash = true, focus = false} = {}) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    counter.textContent = `${current + 1} / ${slides.length}`;
    progress.value = current + 1;
    document.querySelectorAll('#toc a').forEach((a, i) => {
      if (i === current) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (hash && location.hash !== `#slide-${current + 1}`) history.pushState(null, '', `#slide-${current + 1}`);
    window.scrollTo({top:0,behavior:'instant'});
    if (focus) slides[current].querySelector('h1,h2').focus({preventScroll:true});
  }
  const closeTOC = () => dialog.close();
  const openTOC = () => { if (!dialog.open) dialog.showModal(); };
  async function fullScreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      document.querySelector('#status').textContent = '此瀏覽器無法啟用全螢幕，可使用瀏覽器的全螢幕功能。';
    }
  }
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  document.querySelector('#toc-open').addEventListener('click', openTOC);
  document.querySelector('#toc-close').addEventListener('click', closeTOC);
  dialog.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a) { e.preventDefault(); closeTOC(); show(Number(a.hash.slice(7)) - 1, {focus:true}); }
    else if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeTOC();
    }
  });
  document.querySelector('#fullscreen').addEventListener('click', fullScreen);
  document.querySelector('#print').addEventListener('click', () => window.print());
  window.addEventListener('hashchange', () => show(fromHash(), {hash:false}));
  window.addEventListener('popstate', () => show(fromHash(), {hash:false}));
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    if (dialog.open) return;
    if (['ArrowRight','ArrowLeft','PageDown','PageUp','Home','End'].includes(e.key)) {
      e.preventDefault();
      show(e.key === 'Home' ? 0 : e.key === 'End' ? slides.length - 1 : current + (['ArrowRight','PageDown'].includes(e.key) ? 1 : -1));
    } else if (e.key === ' ' && !e.target.closest('button,a,summary')) { e.preventDefault(); show(current + 1); }
    else if (!e.target.closest('button,a,summary')) {
      if (e.key.toLowerCase() === 'm') openTOC();
      if (e.key.toLowerCase() === 'f') fullScreen();
      if (e.key.toLowerCase() === 'a') {
        const d = slides[current].querySelector('details');
        if (d) d.open = !d.open;
      }
    }
  });
  window.addEventListener('beforeprint', () => {
    printState = [...document.querySelectorAll('details')].map(d => d.open);
    document.querySelectorAll('details').forEach(d => { d.open = true; });
  });
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('details').forEach((d,i) => { d.open = printState[i] ?? false; });
  });
  show(fromHash(), {hash:false});
})();
