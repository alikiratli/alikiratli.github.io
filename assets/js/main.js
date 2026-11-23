// Mobile Navigation
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav ul');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Einblenden beim Scrollen (nur wenn JS läuft; ?static schaltet es ab)
if (!location.search.includes("static") && "IntersectionObserver" in window) document.documentElement.classList.add("js");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Screenshots vergrößern
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
document.querySelectorAll('.shots img').forEach(img => img.addEventListener('click', () => {
  lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open');
}));
lb.addEventListener('click', () => lb.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
