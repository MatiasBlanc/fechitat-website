// Interacciones globales del sitio

// Menú móvil del header
const burger = document.querySelector('[data-burger]');
const mobileNav = document.querySelector('.mobile-nav');
if (burger && mobileNav) {
  const toggle = (open) => {
    mobileNav.classList.toggle('open', open);
    mobileNav.classList.toggle('translate-x-full', !open);
    burger.textContent = open ? '✕' : '☰';
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  burger.addEventListener('click', () => toggle(!mobileNav.classList.contains('open')));
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
}

// Scroll-spy del riel hangul
const rail = document.querySelector('.hangul-rail');
const railLinks = document.querySelectorAll('.hangul-rail a');
if (railLinks.length) {
  const sections = Array.from(railLinks)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    if (!sections.length) return;
    let current = sections[0];
    const y = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((s) => {
      if (s.getBoundingClientRect().top + window.scrollY <= y) current = s;
    });
    railLinks.forEach((a) => {
      const target = document.querySelector(a.getAttribute('href'));
      a.classList.toggle('active', target === current);
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}

// Variante oscura del riel cuando el hero está visible
const hero = document.querySelector('.hero');
if (hero && rail) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => rail.classList.toggle('hangul-rail--dark', entry.isIntersecting),
    { threshold: 0.1 }
  );
  heroObserver.observe(hero);
}

// Contadores animados
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const start = performance.now();
          const step = (t) => {
            const p = Math.min((t - start) / 900, 1);
            el.textContent = Math.floor(p * target) + (el.dataset.suffix || '');
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => io.observe(c));
}
