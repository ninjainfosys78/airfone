import Lenis from 'lenis';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Groups whose children reveal one after another.
const GROUPS: [string, string][] = [
  ['.asks', 'li'],
  ['.lines', 'li'],
  ['.steps', 'li'],
  ['.strip', 'figure'],
  ['.who-list', '.who-row'],
  ['.faq-list', 'details'],
  ['.list', 'li'],
  ['.channels', '.channel'],
  ['.cols', '.col'],
];
// Single elements that reveal on their own.
const SINGLES = ['main section:not(.hero) h2', '.problem-media', '.launch-band .waitlist-form', '.date', '.ask-row .phone'];

function setupReveals() {
  const fold = window.innerHeight * 0.92;
  const targets: HTMLElement[] = [];

  const mark = (el: HTMLElement, delay: number) => {
    // Anything already on screen stays as it is: no flash, no waiting.
    if (el.getBoundingClientRect().top < fold) return;
    el.classList.add('reveal');
    if (el.matches('.problem-media, .strip figure')) el.classList.add('reveal-photo');
    el.style.setProperty('--reveal-delay', `${delay}ms`);
    targets.push(el);
  };

  GROUPS.forEach(([group, child]) => {
    document.querySelectorAll<HTMLElement>(group).forEach((g) => {
      g.querySelectorAll<HTMLElement>(`:scope > ${child}`).forEach((el, i) => mark(el, Math.min(i, 6) * 70));
    });
  });
  SINGLES.forEach((sel) => document.querySelectorAll<HTMLElement>(sel).forEach((el) => mark(el, 0)));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.willChange = 'transform, opacity';
        el.classList.add('is-in');
        io.unobserve(el);
        setTimeout(() => (el.style.willChange = ''), 1500);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  targets.forEach((el) => io.observe(el));
}

function setupSmoothScroll() {
  // Inertia scrolling on wheel/trackpad; touch devices keep native scrolling.
  // Ease-out quart over a fixed duration reads weighted but not sluggish.
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  const lenis = new Lenis({
    autoRaf: true,
    duration: 1.05,
    easing: easeOutQuart,
    smoothWheel: true,
    anchors: { offset: -84, duration: 1.2, easing: easeOutQuart },
  });

  // After an in-page jump to the waitlist, put the cursor in the number field.
  document.querySelectorAll<HTMLAnchorElement>('a[href$="#waitlist"]').forEach((a) => {
    a.addEventListener('click', () => {
      if (new URL(a.href).pathname !== location.pathname) return;
      const field = document.querySelector<HTMLElement>('#waitlist input[type="tel"]');
      if (field) setTimeout(() => field.focus({ preventScroll: true }), 1100);
    });
  });

  // Disclosures change the page height; keep Lenis's limits in sync.
  document.querySelectorAll('details').forEach((d) => d.addEventListener('toggle', () => setTimeout(() => lenis.resize(), 260)));
}

if (!reduced) {
  setupReveals();
  setupSmoothScroll();
}
