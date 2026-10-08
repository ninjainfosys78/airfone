// Play buttons that invite a tap: a soft ring until the first play anywhere
// on the page, and a slight magnetic pull toward the pointer on desktop.
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

export function initTaps() {
  const taps = Array.from(document.querySelectorAll<HTMLElement>('.tap'));
  if (!taps.length || still) return;

  taps.forEach((t) => t.classList.add('invite'));
  const stopInvite = () => taps.forEach((t) => t.classList.remove('invite'));
  document.addEventListener('play', stopInvite, { capture: true, once: true });
  document.addEventListener('pointerdown', (e) => { if ((e.target as Element).closest('[data-play-for], .tap')) stopInvite(); });

  if (!fine) return;
  for (const t of taps) {
    const zone = t.closest<HTMLElement>('[data-play-for]') ?? t;
    zone.addEventListener('pointermove', (e) => {
      const r = t.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.18;
      t.style.translate = `${Math.max(-10, Math.min(10, dx))}px ${Math.max(-10, Math.min(10, dy))}px`;
    });
    zone.addEventListener('pointerleave', () => { t.style.translate = ''; });
  }
}
