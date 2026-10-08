import { describe, expect, it } from 'vitest';
import { orbState, smooth, type Timing } from '../src/components/orb/orb-state';

const timing: Timing = {
  duration: 10,
  lines: [
    { speaker: 'agent', start: 0.5, end: 3 },
    { speaker: 'caller', start: 3.1, end: 5 },
    { speaker: 'agent', start: 6, end: 9 },
  ],
};

describe('orbState', () => {
  it('is idle before the call starts', () => expect(orbState(0.2, timing)).toBe('idle'));
  it('speaks while the agent talks', () => expect(orbState(1, timing)).toBe('speaking'));
  it('listens while the caller talks', () => expect(orbState(4, timing)).toBe('listening'));
  it('keeps the last state over a short breath', () => expect(orbState(3.05, timing)).toBe('speaking'));
  it('thinks in a gap of 300 ms or more', () => expect(orbState(5.5, timing)).toBe('thinking'));
  it('is idle after the last line', () => expect(orbState(9.5, timing)).toBe('idle'));
  it('is idle with no timing', () => expect(orbState(1, null)).toBe('idle'));
});

describe('smooth', () => {
  it('moves toward the target', () => {
    const v = smooth(0, 1);
    expect(v).toBeGreaterThan(0);
    expect(v).toBeLessThan(1);
  });
  it('converges without overshooting 1', () => {
    let v = 0;
    for (let i = 0; i < 200; i++) {
      v = smooth(v, 1);
      expect(v).toBeLessThanOrEqual(1);
    }
    expect(v).toBeGreaterThan(0.999);
  });
  it('clamps input to 0..1', () => expect(smooth(0.5, 7, 1)).toBe(1));
});
