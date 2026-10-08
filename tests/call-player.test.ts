import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import CallPlayer from '../src/components/player/CallPlayer.astro';
import clinic from '../public/audio/clinic.json';

describe('CallPlayer without JavaScript', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(CallPlayer, { props: { clip: 'clinic' } });

  it('has a native audio element with both sources and no autoplay', () => {
    expect(html).toMatch(/<audio[^>]*controls[^>]*>/);
    expect(html).toMatch(/preload="none"/);
    expect(html).not.toMatch(/autoplay/);
    expect(html).toContain('/audio/clinic.opus');
    expect(html).toContain('/audio/clinic.m4a');
  });

  it('labels the call by business, without "Example"', () => { expect(html).toContain('>Sunrise Clinic<'); expect(html).not.toContain('Example'); });

  it('prints every transcript line as text', () => {
    for (const l of clinic.lines) expect(html).toContain(l.text.replace(/'/g, '&#39;'));
  });

  it('renders a remote real call with a given transcript', async () => {
    const out = await container.renderToString(CallPlayer, {
      props: { src: 'https://cdn.example.com/a.mp3', label: 'Real call · Pathibhara', transcript: [{ speaker: 'caller', text: 'Namaste' }] },
    });
    expect(out).toContain('https://cdn.example.com/a.mp3');
    expect(out).toContain('Real call · Pathibhara');
    expect(out).toContain('Namaste');
  });
});
