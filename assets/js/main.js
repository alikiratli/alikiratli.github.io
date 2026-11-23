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

// Blick ins Buch (Leseprobe: nur Ansicht, kein Download)
const peeks = document.querySelectorAll('.peek');
if (peeks.length) {
  const lang = document.documentElement.lang;
  const T = { de: ['Leseprobe', 'Seite', 'Bei Amazon kaufen', 'Ausgewählte Seiten · nur zur Ansicht', 'Schließen', 'Zurück', 'Weiter'],
              en: ['Sample pages', 'Page', 'Buy on Amazon', 'Selected pages · view only', 'Close', 'Previous', 'Next'],
              tr: ['Örnek sayfalar', 'Sayfa', "Amazon'da satın al", 'Seçilmiş sayfalar · yalnızca görüntüleme', 'Kapat', 'Geri', 'İleri'] }[lang] || [];
  const base = lang === 'de' ? '' : '../';
  const N = 6;
  const r = document.createElement('div');
  r.className = 'reader'; r.setAttribute('role', 'dialog'); r.setAttribute('aria-modal', 'true');
  r.innerHTML = `<div class="reader-top"><div><strong></strong><span></span></div><button class="reader-close" aria-label="${T[4]}">×</button></div>
    <div class="reader-stage"><button class="reader-nav reader-prev" aria-label="${T[5]}">‹</button><img alt="" draggable="false"><button class="reader-nav reader-next" aria-label="${T[6]}">›</button></div>
    <div class="reader-bot"><small>${T[3]}</small><div class="reader-dots">${'<i></i>'.repeat(N)}</div><a class="btn btn-primary" target="_blank" rel="noopener">${T[2]}</a></div>`;
  document.body.appendChild(r);
  const img = r.querySelector('img'), title = r.querySelector('strong'), count = r.querySelector('.reader-top span'),
        prev = r.querySelector('.reader-prev'), next = r.querySelector('.reader-next'), buy = r.querySelector('.reader-bot a'),
        dots = r.querySelectorAll('.reader-dots i');
  let book = '', i = 1, opener = null;
  const show = () => {
    img.src = `${base}assets/img/preview/${book}/${i}.webp`;
    img.alt = `${title.textContent} – ${T[1]} ${i}`;
    count.textContent = `${T[0]} · ${T[1]} ${i} / ${N}`;
    prev.disabled = i === 1; next.disabled = i === N;
    dots.forEach((d, k) => d.classList.toggle('on', k === i - 1));
    if (i < N) new Image().src = `${base}assets/img/preview/${book}/${i + 1}.webp`;
  };
  const close = () => { r.classList.remove('open'); document.body.style.overflow = ''; opener && opener.focus(); };
  peeks.forEach(b => b.addEventListener('click', () => {
    book = b.dataset.book; title.textContent = b.dataset.title; buy.href = b.dataset.buy; i = 1; opener = b;
    show(); r.classList.add('open'); document.body.style.overflow = 'hidden'; r.querySelector('.reader-close').focus();
  }));
  prev.addEventListener('click', () => { if (i > 1) { i--; show(); } });
  next.addEventListener('click', () => { if (i < N) { i++; show(); } });
  r.querySelector('.reader-close').addEventListener('click', close);
  r.addEventListener('click', e => { if (e.target === r || e.target.classList.contains('reader-stage')) close(); });
  r.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    if (!r.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
  });
  let x0 = null;
  r.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  r.addEventListener('touchend', e => {
    if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev).click();
  });
}
