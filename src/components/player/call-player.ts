// Upgrades <call-player>: play/pause button, waveform, transcript that
// follows the audio. Without this script the native controls remain.
interface T { duration: number; lines: { speaker: string; start: number; end: number }[]; peaks: number[] }

class CallPlayer extends HTMLElement {
  private audio!: HTMLAudioElement;
  private btn!: HTMLButtonElement;
  private wave!: HTMLCanvasElement;
  private items: HTMLLIElement[] = [];
  private t: T = { duration: 0, lines: [], peaks: [] };
  private raf = 0;

  connectedCallback() {
    this.audio = this.querySelector('audio')!;
    this.btn = this.querySelector('.play')!;
    this.wave = this.querySelector('.wave')!;
    this.items = Array.from(this.querySelectorAll('.transcript li'));
    try { this.t = JSON.parse(this.dataset.timing ?? '{}'); } catch { /* keep defaults */ }

    this.btn.hidden = false;
    if (this.t.peaks.length) this.wave.hidden = false;
    this.classList.add('is-live');

    this.btn.addEventListener('click', () => (this.audio.paused ? this.play() : this.audio.pause()));
    this.audio.addEventListener('play', () => { this.btn.setAttribute('aria-pressed', 'true'); this.classList.add('is-playing'); this.loop(); });
    this.audio.addEventListener('pause', () => { this.btn.setAttribute('aria-pressed', 'false'); cancelAnimationFrame(this.raf); this.draw(); });
    this.audio.addEventListener('ended', () => { this.classList.remove('is-playing'); this.audio.currentTime = 0; this.draw(); });
    this.audio.addEventListener('error', () => this.fail(), true);
    this.wave.addEventListener('click', (e) => {
      const r = this.wave.getBoundingClientRect();
      const d = this.audio.duration || this.t.duration;
      if (d) { this.audio.currentTime = ((e.clientX - r.left) / r.width) * d; this.play(); }
    });
    this.items.forEach((li) => li.addEventListener('click', () => { this.audio.currentTime = Number(li.dataset.start) || 0; this.play(); }));
    new ResizeObserver(() => this.draw()).observe(this.wave);

    // One call at a time on the page.
    document.addEventListener('play', (e) => { if (e.target !== this.audio && !this.audio.paused) this.audio.pause(); }, true);
  }

  private play() {
    this.audio.play().catch(() => this.fail());
  }

  private fail() {
    this.classList.remove('is-live', 'is-playing');
    this.btn.hidden = true;
    this.wave.hidden = true;
    (this.querySelector('.error') as HTMLElement).hidden = false;
  }

  private loop = () => {
    this.draw();
    if (!this.audio.paused) this.raf = requestAnimationFrame(this.loop);
  };

  private draw() {
    const now = this.audio.currentTime;
    const d = this.audio.duration || this.t.duration || 1;
    const el = this.querySelector('.now');
    if (el) el.textContent = `${Math.floor(now / 60)}:${String(Math.floor(now % 60)).padStart(2, '0')}`;

    this.items.forEach((li) => {
      const s = Number(li.dataset.start), e = Number(li.dataset.end);
      li.classList.toggle('is-now', now >= s && now < e);
      li.classList.toggle('is-past', now >= e);
    });

    const c = this.wave;
    if (c.hidden || !this.t.peaks.length) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = c.clientWidth, h = c.clientHeight;
    if (!w) return;
    c.width = w * dpr; c.height = h * dpr;
    const g = c.getContext('2d')!;
    g.scale(dpr, dpr);
    const css = getComputedStyle(this);
    const on = css.getPropertyValue('--lime').trim() || '#8BC53E';
    const off = css.getPropertyValue('--line').trim() || '#DCE5CC';
    const n = this.t.peaks.length, gap = 2, bw = Math.max(1, (w - gap * (n - 1)) / n);
    const at = (now / d) * w;
    for (let i = 0; i < n; i++) {
      const x = i * (bw + gap);
      const bh = Math.max(3, this.t.peaks[i] * h);
      g.fillStyle = x + bw <= at ? on : off;
      g.fillRect(x, (h - bh) / 2, bw, bh);
    }
  }
}

if (!customElements.get('call-player')) customElements.define('call-player', CallPlayer);
