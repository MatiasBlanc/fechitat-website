// Interacciones globales del sitio (menú móvil, scroll-spy del riel
// hangul y contadores animados). Portadas de fechitat-inspiration/main.js.
// Los scripts de Astro se ejecutan como módulos (DOM ya parseado).

// Menú móvil del header
const burger = document.querySelector('[data-burger]');
const mobileNav = document.querySelector('.mobile-nav');
if (burger && mobileNav) {
  const toggle = (open) => {
    mobileNav.classList.toggle('open', open);
    burger.textContent = open ? '✕' : '☰';
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    // Bloquear scroll del body cuando el menú está abierto
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggle(!mobileNav.classList.contains('open')));
  // Al navegar desde un enlace del menú, se cierra
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
}

// Scroll-spy del riel hangul + variante oscura sobre el hero
const rail = document.querySelector('.hangul-rail');
const railLinks = document.querySelectorAll('.hangul-rail a');
if (railLinks.length) {
  const sections = Array.from(railLinks)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    if (!sections.length) return;

    // Determinar qué sección está actualmente visible
    let current = sections[0];
    const y = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((s) => {
      if (s.getBoundingClientRect().top + window.scrollY <= y) {
        current = s;
      }
    });

    // Actualizar clases active en los enlaces
    railLinks.forEach((a) => {
      const target = document.querySelector(a.getAttribute('href'));
      a.classList.toggle('active', target === current);
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  // Establecer el primer enlace como activo al cargar
  setActive();
}

// Variante oscura del riel cuando el hero está visible
const hero = document.querySelector('.hero');
if (hero && rail) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      rail.classList.toggle('hangul-rail--dark', entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  heroObserver.observe(hero);
}

// Contadores animados de estadísticas
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const dur = 900;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min((t - start) / dur, 1);
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
