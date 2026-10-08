import type { Timing } from '../orb/orb-state';

export interface ClipData extends Timing {
  id: string;
  label: string;
  peaks: number[];
  lines: { speaker: 'agent' | 'caller'; text: string; ne?: string; start: number; end: number }[];
}

const files = import.meta.glob<ClipData>('../../../public/audio/*.json', { eager: true, import: 'default' });

export function clip(id: string): ClipData {
  const hit = Object.entries(files).find(([p]) => p.endsWith(`/${id}.json`));
  if (!hit) throw new Error(`No clip "${id}" in public/audio. Run pnpm voices.`);
  return hit[1];
}

/** The real recorded Pathibhara call with its silences shortened (scripts/trim-real-call.mjs). */
export const realCall: ClipData = clip('pathibhara');
