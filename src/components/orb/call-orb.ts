import { createOrb, type OrbEngine, type OrbVariant } from './engine';
import { orbState, smooth, type Timing } from './orb-state';
import { palettes } from './palettes';

/**
 * <airfone-orb variant="shdr-14" for="audio-id" timing="/audio/clinic.json">
 * Upgrades its static fallback to a WebGL orb that follows the linked call:
 * speaking while the agent talks, listening while the caller talks, thinking
 * in pauses. Does nothing without WebGL or with reduced motion.
 */
export function defineOrb(variants: Record<string, OrbVariant>) {
  if (customElements.get('airfone-orb')) return;

  class AirfoneOrb extends HTMLElement {
    private engine: OrbEngine | null = null;
    private io: IntersectionObserver | null = null;
    private visible = false;
    private timing: Timing | null = null;
    private audio: HTMLAudioElement | null = null;
    private analyser: AnalyserNode | null = null;
    private bins: Uint8Array | null = null;
    private level = 0;
    private tick = 0;

    connectedCallback() {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { console.info('[airfone-orb] reduced motion is on, showing the still'); return; }
      const variant = variants[this.getAttribute('variant') ?? ''];
      if (!variant) return;
      const canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden', 'true');
      this.engine = createOrb(canvas, variant, palettes[variant.key]);
      if (!this.engine) return;
      this.append(canvas);
      this.classList.add('is-live');

      this.io = new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; this.sync(); });
      this.io.observe(this);
      document.addEventListener('visibilitychange', this.sync);

      const id = this.getAttribute('for');
      this.audio = id ? (document.getElementById(id) as HTMLAudioElement | null) : null;
      const url = this.getAttribute('timing');
      if (url) fetch(url).then((r) => (r.ok ? r.json() : null)).then((t) => { this.timing = t; }).catch(() => {});
      this.audio?.addEventListener('play', this.onPlay);
      this.audio?.addEventListener('pause', this.onStop);
      this.audio?.addEventListener('ended', this.onStop);
    }

    disconnectedCallback() {
      this.io?.disconnect();
      document.removeEventListener('visibilitychange', this.sync);
      this.audio?.removeEventListener('play', this.onPlay);
      this.audio?.removeEventListener('pause', this.onStop);
      this.audio?.removeEventListener('ended', this.onStop);
      cancelAnimationFrame(this.tick);
      this.engine?.destroy();
    }

    private sync = () => this.engine?.setRunning(this.visible && !document.hidden);

    private onPlay = () => {
      const a = this.audio!;
      // Live level only works for same-origin audio; otherwise the engine
      // synthesizes levels from the state.
      if (!this.analyser && new URL(a.currentSrc, location.href).origin === location.origin) {
        try {
          const ctx = new AudioContext();
          const src = ctx.createMediaElementSource(a);
          this.analyser = ctx.createAnalyser();
          this.analyser.fftSize = 1024;
          src.connect(this.analyser);
          this.analyser.connect(ctx.destination);
          this.bins = new Uint8Array(this.analyser.frequencyBinCount);
          a.addEventListener('play', () => ctx.resume(), { passive: true });
          ctx.resume();
        } catch { this.analyser = null; }
      }
      cancelAnimationFrame(this.tick);
      const loop = () => {
        const mood = orbState(a.currentTime, this.timing);
        this.engine?.setState(mood === 'listening' ? 'idle' : mood);
        let raw: number | null = null;
        if (this.analyser && this.bins) {
          this.analyser.getByteFrequencyData(this.bins);
          // Speech band, roughly 300 to 3400 Hz.
          const hz = this.analyser.context.sampleRate / this.analyser.fftSize;
          const lo = Math.floor(300 / hz), hi = Math.min(this.bins.length, Math.ceil(3400 / hz));
          let sum = 0;
          for (let i = lo; i < hi; i++) sum += (this.bins[i] / 255) ** 2;
          raw = Math.min(1, Math.sqrt(sum / Math.max(1, hi - lo)) * 1.8);
          this.level = smooth(this.level, raw);
        }
        if (raw === null) this.engine?.setLevels(null, null);
        else if (mood === 'listening') this.engine?.setLevels(this.level, 0.3);
        else this.engine?.setLevels(0.2, this.level);
        this.tick = requestAnimationFrame(loop);
      };
      loop();
    };

    private onStop = () => {
      cancelAnimationFrame(this.tick);
      this.engine?.setState('idle');
      this.engine?.setLevels(null, null);
    };
  }

  customElements.define('airfone-orb', AirfoneOrb);
}
