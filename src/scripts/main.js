// Interacciones globales del sitio
// Nota: el menú móvil está inicializado en Header.astro con is:inline

function initHangulRail() {
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
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          if (reduceMotion) {
            el.textContent = target + (el.dataset.suffix || '');
            io.unobserve(el);
            return;
          }
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

function initAll() {
  initHangulRail();
  initCounters();
}

// Ejecutar en carga inicial y en cada transición de página de Astro
initAll();
document.addEventListener('astro:page-load', initAll);

