'use strict';
const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('img[data-fallback]').forEach(img => {
  function fallback() {
    if (img.dataset.replaced) return;
    img.dataset.replaced = 'true'; img.src = img.dataset.fallback;
    img.alt = 'Original illustration inspired by Arabian Sea coastal architecture; photograph unavailable';
    img.classList.add('image-fallback');
    const badge = document.createElement('span'); badge.className = 'fallback-badge'; badge.textContent = 'ILLUSTRATED VIEW';
    img.parentElement.append(badge);
  }
  img.addEventListener('error', fallback);
  if (img.complete && img.naturalWidth === 0) fallback();
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter; let count = 0;
  document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  document.querySelectorAll('[data-country]').forEach(card => { card.hidden = filter !== 'all' && card.dataset.country !== filter; if (!card.hidden) count++; });
  document.querySelector('#filter-status').textContent = `Showing ${filter === 'all' ? 'all ' : ''}${count} destinations${filter === 'all' ? '' : ' in ' + (filter === 'oman' ? 'Oman' : 'Pakistan')}`;
}));
const checklist = [...document.querySelectorAll('.checklist input')];
checklist.forEach(box => box.addEventListener('change', () => { document.querySelector('.check-status').textContent = `${checklist.filter(item => item.checked).length} of ${checklist.length} preparations checked`; }));
document.querySelector('.print-button')?.addEventListener('click', () => window.print());
document.querySelector('.back-top').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
motionButton?.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.innerHTML = paused ? 'Resume animation' : 'Pause animation';
});
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.story, .topic-card, .section-heading, .place-card').forEach(element => {
    element.classList.add('reveal-pending'); observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); document.querySelectorAll('.reveal-pending').forEach(element => element.classList.add('is-visible')); }
  });
}

// A single scheduled frame maps native scroll position to reversible transforms.
const voyage = document.querySelector('.scroll-voyage');
if (voyage) {
  const hero = document.querySelector('.hero');
  const sea = document.querySelector('.sea-story');
  let scrollFrame = 0;
  const clamp = value => Math.max(0, Math.min(1, value));
  function renderScrollDepth() {
    scrollFrame = 0;
    if (reducedMotion.matches || document.body.classList.contains('motion-paused')) return;
    const viewport = window.innerHeight;
    const rect = voyage.getBoundingClientRect();
    const distance = rect.height - viewport;
    const progress = distance > 50 ? clamp(-rect.top / distance) : clamp((viewport - rect.top) / (viewport + rect.height));
    voyage.style.setProperty('--voyage', progress.toFixed(4));
    const heroProgress = clamp(-hero.getBoundingClientRect().top / hero.offsetHeight);
    hero.style.setProperty('--hero-shift', `${(heroProgress * 35).toFixed(2)}px`);
    hero.style.setProperty('--inset-shift', `${(-heroProgress * 55).toFixed(2)}px`);
    hero.style.setProperty('--inset-angle', `${(-heroProgress * 4).toFixed(2)}deg`);
    const seaRect = sea.getBoundingClientRect();
    const seaProgress = clamp((viewport * .8 - seaRect.top) / (viewport * .5 + seaRect.height));
    sea.style.setProperty('--sea-progress', `${(seaProgress * 100).toFixed(2)}%`);
    sea.style.setProperty('--route-offset', (-seaProgress * 180).toFixed(2));
  }
  function scheduleScrollDepth() {
    if (!scrollFrame && !reducedMotion.matches && !document.body.classList.contains('motion-paused')) scrollFrame = requestAnimationFrame(renderScrollDepth);
  }
  function setScrollMode() {
    document.body.classList.toggle('scroll-depth-enabled', !reducedMotion.matches);
    scheduleScrollDepth();
  }
  window.addEventListener('scroll', scheduleScrollDepth, { passive: true });
  window.addEventListener('resize', scheduleScrollDepth, { passive: true });
  window.addEventListener('pageshow', scheduleScrollDepth);
  window.addEventListener('load', scheduleScrollDepth, { once: true });
  reducedMotion.addEventListener('change', setScrollMode);
  motionButton?.addEventListener('click', scheduleScrollDepth);
  setScrollMode();
}
