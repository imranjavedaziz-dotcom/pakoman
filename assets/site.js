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
