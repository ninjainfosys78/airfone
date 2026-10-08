import type { Timing } from '../orb/orb-state';
import { demoCall } from '../../data/demo-call';
import { demoWaveform } from '../../data/demo-waveform';
import { DEMO_AUDIO_URL } from '../../config/site';

export interface ClipData extends Timing {
  id: string;
  label: string;
  peaks: number[];
  lines: { speaker: 'agent' | 'caller'; text: string; start: number; end: number }[];
}

const files = import.meta.glob<ClipData>('../../../public/audio/*.json', { eager: true, import: 'default' });

export function clip(id: string): ClipData {
  const hit = Object.entries(files).find(([p]) => p.endsWith(`/${id}.json`));
  if (!hit) throw new Error(`No clip "${id}" in public/audio. Run pnpm voices.`);
  return hit[1];
}

/** The real recorded Pathibhara call, in the same shape as a generated clip. */
export const realCall: ClipData & { src: string } = {
  id: 'pathibhara',
  label: 'Real call · Pathibhara Solutions',
  src: DEMO_AUDIO_URL,
  duration: demoCall.duration,
  peaks: demoWaveform.peaks,
  lines: demoCall.lines.map((l) => ({ speaker: l.speaker, text: l.en, start: l.start, end: l.end })),
};
