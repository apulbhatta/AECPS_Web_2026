const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-button');
menu.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.logo-track').forEach(track => {
  const group = track.querySelector('.logo-group');
  if (!group) return;
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('img').forEach(image => image.alt = '');
  track.appendChild(duplicate);
});

// Lightweight source-inspection deterrent. This does not provide real security.
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  const modifier = event.ctrlKey || event.metaKey;
  const devToolsShortcut = event.key === 'F12' ||
    (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
    (modifier && key === 'u');

  if (devToolsShortcut) event.preventDefault();
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
