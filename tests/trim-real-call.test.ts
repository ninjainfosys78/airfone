import { describe, expect, it } from 'vitest';
// @ts-expect-error plain JS module
import { cutsFrom, parseSilences, remap } from '../scripts/trim-real-call.mjs';

describe('trim real call', () => {
  const log = 'x silence_start: 0\ny silence_end: 5.2 | silence_duration: 5.2\nsilence_start: 13\nsilence_end: 13.3\nsilence_start: 20\nsilence_end: 22\n';
  it('parses silence intervals', () => expect(parseSilences(log)).toEqual([[0, 5.2], [13, 13.3], [20, 22]]));
  it('keeps short pauses and trims long ones to 0.35 s', () => {
    expect(cutsFrom(parseSilences(log))).toEqual([[0.175, 5.025], [20.175, 21.825]]);
  });
  it('shifts later times by the time removed', () => {
    const cuts = [[0.175, 5.025], [20.175, 21.825]];
    expect(remap(5.2, cuts)).toBe(0.35);
    expect(remap(12.96, cuts)).toBe(8.11);
    expect(remap(22.1, cuts)).toBe(15.6);
  });
  it('maps a time inside a cut to the cut point', () => expect(remap(3, [[0.175, 5.025]])).toBe(0.175));
});
