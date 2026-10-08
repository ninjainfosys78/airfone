import { describe, expect, it } from 'vitest';
// @ts-expect-error plain JS module
import { planClip, stitch, charCount, cacheKey, peaksFrom } from '../scripts/make-voices.mjs';

const voices = { a: 'VOICE_A', c: 'VOICE_C' };
const script = {
  id: 'x',
  label: 'Example call · Test',
  lines: [
    { speaker: 'agent', voice: 'a', text: 'Hello.' },
    { speaker: 'caller', voice: 'c', text: 'Hi there.' },
  ],
};

describe('make-voices', () => {
  it('plans one request per line with resolved voice ids', () => {
    const plan = planClip(script, voices);
    expect(plan).toHaveLength(2);
    expect(plan[0]).toMatchObject({ voiceId: 'VOICE_A', text: 'Hello.', speaker: 'agent' });
    expect(plan[1].voiceId).toBe('VOICE_C');
  });

  it('rejects an unknown voice name', () => {
    expect(() => planClip({ ...script, lines: [{ speaker: 'agent', voice: 'nope', text: 'x' }] }, voices)).toThrow(/nope/);
  });

  it('stitches cumulative start and end with gaps', () => {
    const t = stitch([1.5, 2], 0.35);
    expect(t).toEqual([
      { start: 0, end: 1.5 },
      { start: 1.85, end: 3.85 },
    ]);
  });

  it('counts characters', () => expect(charCount([script])).toBe(15));

  it('cache key changes with text or voice', () => {
    const k = cacheKey('VOICE_A', 'Hello.');
    expect(cacheKey('VOICE_A', 'Hello.')).toBe(k);
    expect(cacheKey('VOICE_B', 'Hello.')).not.toBe(k);
    expect(cacheKey('VOICE_A', 'Hello!')).not.toBe(k);
  });

  it('reduces samples to normalised peaks', () => {
    const samples = new Float32Array([0, 0.5, -1, 0.25, 0, 0, 0.1, -0.1]);
    expect(peaksFrom(samples, 4)).toEqual([0.5, 1, 0, 0.1]);
  });
});

describe('Nepali lines', () => {
  const ne = { id: 'n', label: 'L', lines: [{ speaker: 'agent', voice: 'a', ne: 'नमस्ते', text: 'Hello' }] };
  it('speaks the Nepali text and bills its length', () => {
    expect(planClip(ne, voices)[0].text).toBe('नमस्ते');
    expect(charCount([ne])).toBe('नमस्ते'.length);
  });
});
