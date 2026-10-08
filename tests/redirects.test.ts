import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
// @ts-expect-error plain JS module
import { exact, nginxConf } from '../scripts/redirects.mjs';

const map = exact as Map<string, string>;
const dist = new URL('../dist/', import.meta.url);
const builds = (p: string) => p === "/" ? existsSync(new URL("index.html", dist)) : existsSync(new URL(/\.[a-z]+$/.test(p) ? `.${p}` : `.${p}.html`, dist));

describe('redirects', () => {
  it('never chain: no target is itself a source', () => {
    for (const [, to] of map) expect(map.has(to), `${to} is also redirected`).toBe(false);
  });
  it('never point a page at itself', () => {
    for (const [from, to] of map) expect(from).not.toBe(to);
  });
  it('send old locale URLs to English pages', () => {
    expect(map.get('/ne/pricing/')).toBe('/pricing');
    expect(map.get('/en/contact/')).toBe('/contact');
    expect(map.get('/en/')).toBe('/');
    expect(map.get('/features/')).toBe('/products/ai-call-agent');
    expect(map.get('/en/waitlist/thanks/')).toBe('/thanks');
  });
  it('send auth pages to the app', () => expect(map.get('/login/')).toBe('https://app.airfone.app/login'));
  it.runIf(existsSync(new URL('index.html', dist)))('every internal target is a built page', () => {
    for (const [, to] of map) if (to.startsWith('/')) expect(builds(to), `${to} not built`).toBe(true);
  });
  it('sends /en and /ne (and everything under them) home for Cloudflare', async () => {
    const { cloudflareRedirects } = await import('../scripts/redirects.mjs');
    const out = cloudflareRedirects();
    expect(out).toContain('/en / 301');
    expect(out).toContain('/en/* /:splat 301');
    expect(out).toContain('/ne/* /:splat 301');
    // Exact rules come before the catch-alls.
    expect(out.indexOf('/en / 301')).toBeLessThan(out.indexOf('/en/* /:splat 301'));
  });
  it('writes a trailing-slash rule and a real 404', () => {
    const conf = nginxConf();
    expect(conf).toContain('location ~ ^(/.+)/$');
    expect(conf).toContain('error_page 404 /404.html;');
  });
});
