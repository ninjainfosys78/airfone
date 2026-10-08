export type OrbMood = 'idle' | 'listening' | 'thinking' | 'speaking';

export interface TimingLine {
  speaker: 'agent' | 'caller';
  start: number;
  end: number;
  text?: string;
}

export interface Timing {
  duration: number;
  lines: TimingLine[];
}

/** A pause shorter than this is a breath, not thinking. */
export const THINK_GAP = 0.3;

/** What the orb should be doing at `t` seconds into a call. */
export function orbState(t: number, timing: Timing | null | undefined): OrbMood {
  if (!timing || timing.lines.length === 0) return 'idle';
  const { lines } = timing;
  if (t < lines[0].start || t >= lines[lines.length - 1].end) return 'idle';
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (t >= l.start && t < l.end) return l.speaker === 'agent' ? 'speaking' : 'listening';
    const next = lines[i + 1];
    if (next && t >= l.end && t < next.start) {
      return next.start - l.end >= THINK_GAP ? 'thinking' : l.speaker === 'agent' ? 'speaking' : 'listening';
    }
  }
  return 'idle';
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** One step of exponential smoothing toward `next`, clamped to 0..1. */
export function smooth(prev: number, next: number, k = 0.15): number {
  return clamp01(prev + (clamp01(next) - prev) * clamp01(k));
}
