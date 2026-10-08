#!/usr/bin/env node
// Audits a built site (dist/) against the launch ledger rows that code can
// check. Prints `ROW path: message` and exits 1 on any finding.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parse } from 'node-html-parser';

const SITE = 'https://airfone.app';

const BANNED_COPY = [
  [/\u2014/, 'em-dash'],
  [/\s--\s/, 'double hyphen'],
  [/social media chat|whatsapp|instagram|messenger|viber/i, 'social media chat is off the site'],
  [/world[- ]class|supercharg|seamless|effortless|\bunlock\b|\belevate\b|cutting[- ]edge|revolutioni[sz]e|game[- ]chang/i, 'generic marketing claim'],
  [/\bRs\.?\s?\d|NPR\s?\d|रु\s?\d/, 'price on the site'],
  [/lorem ipsum|TODO|TBD/i, 'placeholder text'],
];
const BANNED_CLASSES = /\b(lead|subtitle|byline|eyebrow|kicker|tagline|overline)\b/;
const BANNED_CSS = [
  [/box-shadow\s*:\s*(?!none)/, 'box-shadow'],
  [/linear-gradient|radial-gradient|conic-gradient/, 'gradient'],
  [/backdrop-filter/, 'blur/glass'],
  [/letter-spacing\s*:\s*-/, 'negative letter spacing'],
  [/text-transform\s*:\s*uppercase/, 'uppercase text'],
  [/cubic-bezier\([^)]*-|cubic-bezier\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*1\.\d/, 'bounce easing'],
];
const SECRET = /sk_[A-Za-z0-9]{20,}|ELEVENLABS_API_KEY/;

export function canonicalFor(path) {
  let p = (path || '/').split(/[?#]/)[0].toLowerCase();
  p = p.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (p !== '/') p = p.replace(/\/+$/, '');
  if (!p.startsWith('/')) p = `/${p}`;
  return p === '/' ? `${SITE}/` : `${SITE}${p}`;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function routeOf(dist, file) {
  let r = '/' + relative(dist, file).split('\\').join('/');
  r = r.replace(/\.html$/, '').replace(/\/index$/, '/');
  return r === '/index' ? '/' : r;
}

function resolves(dist, href) {
  const path = decodeURI(href.split(/[?#]/)[0]);
  if (path === '/' || path === '') return existsSync(join(dist, 'index.html'));
  if (path.endsWith('/')) return false; // trailing slash form is never canonical
  return [path, `${path}.html`, `${path}/index.html`].some((p) => existsSync(join(dist, p)) && statSync(join(dist, p)).isFile());
}

const DESIGN_COLOURS = (() => {
  const f = new URL('../DESIGN.md', import.meta.url);
  if (!existsSync(f)) return null;
  return new Set([...readFileSync(f, 'utf8').matchAll(/#[0-9A-Fa-f]{6}\b/g)].map((m) => m[0].toUpperCase()));
})();

export function audit(dist, { designColours = DESIGN_COLOURS } = {}) {
  const findings = [];
  const add = (row, file, msg) => findings.push({ row, file: relative(dist, file) || file, msg });
  const files = walk(dist);
  const titles = new Map();
  const descs = new Map();

  for (const file of files) {
    const ext = extname(file);
    const raw = ext === '.html' || ext === '.css' || ext === '.js' || ext === '.json' || ext === '.xml' || ext === '.txt' ? readFileSync(file, 'utf8') : '';
    if (raw && SECRET.test(raw)) add('SEC-3', file, 'secret or key name in the build');

    if (ext === '.css') {
      for (const [re, what] of BANNED_CSS) if (re.test(raw)) add('SLOP', file, `${what} in CSS`);
      if (designColours) for (const m of raw.matchAll(/#[0-9A-Fa-f]{6}\b/g)) {
        if (!designColours.has(m[0].toUpperCase())) add('DS-1', file, `colour ${m[0]} not in DESIGN.md`);
      }
    }
    if (ext !== '.html') continue;
    if (/(^|\/)google[0-9a-f]+\.html$/.test(file)) continue; // Search Console verification file

    const route = routeOf(dist, file);
    const root = parse(raw, { comment: false });
    const robots = root.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
    const noindex = /noindex/.test(robots);
    const isRedirect = !!root.querySelector('meta[http-equiv="refresh"]');
    if (isRedirect) continue;

    // Inline styles count as CSS too.
    for (const s of root.querySelectorAll('style')) {
      for (const [re, what] of BANNED_CSS) if (re.test(s.text)) add('SLOP', file, `${what} in CSS`);
      if (designColours) for (const m of s.text.matchAll(/#[0-9A-Fa-f]{6}\b/g)) {
        if (!designColours.has(m[0].toUpperCase())) add('DS-1', file, `colour ${m[0]} not in DESIGN.md`);
      }
    }

    if (root.querySelector('html')?.getAttribute('lang') !== 'en') add('A11Y-6', file, 'html lang is not "en"');

    const h1s = root.querySelectorAll('h1');
    if (h1s.length !== 1) add('SEO-6', file, `${h1s.length} h1 elements`);
    let last = 0;
    for (const h of root.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
      const lvl = Number(h.tagName[1]);
      if (last && lvl > last + 1) add('SEO-6', file, `heading jumps from h${last} to h${lvl} ("${h.text.trim().slice(0, 40)}")`);
      last = lvl;
    }

    const title = root.querySelector('title')?.text.trim() ?? '';
    if (!title) add('SEO-4', file, 'missing <title>');
    else if (!noindex) titles.set(title, [...(titles.get(title) ?? []), file]);
    const desc = root.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    if (desc.length < 70 || desc.length > 160) add('SEO-4', file, `meta description is ${desc.length} chars (70 to 160)`);
    else if (!noindex) descs.set(desc, [...(descs.get(desc) ?? []), file]);

    const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (route !== '/404' && canonical !== canonicalFor(route)) add('SEO-2', file, `canonical ${canonical} should be ${canonicalFor(route)}`);
    if (!root.querySelector('meta[property="og:image"]')) add('SEO-5', file, 'no og:image');

    for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
      try {
        const data = JSON.parse(s.text);
        if (JSON.stringify(data).includes('"offers"')) add('SD-2', file, 'JSON-LD carries offers (no prices yet)');
      } catch {
        add('SD-7', file, 'JSON-LD does not parse');
      }
    }

    const brokenSeen = new Set();
    for (const a of root.querySelectorAll('a[href]')) {
      const href = a.getAttribute('href');
      if (/^(mailto:|tel:|#|javascript:)/.test(href)) continue;
      if (/^https?:\/\//.test(href)) {
        if (href.startsWith(SITE)) add('SEO-14', file, `absolute link to own site: ${href}`);
        if (a.getAttribute('target') === '_blank' && !/noopener/.test(a.getAttribute('rel') ?? '')) add('SEC-4', file, `target=_blank without noopener: ${href}`);
        continue;
      }
      if (!href.startsWith('/')) { add('LN-1', file, `relative link ${href}`); continue; }
      if (!resolves(dist, href) && !brokenSeen.has(href)) { brokenSeen.add(href); add('LN-1', file, `broken internal link ${href}`); }
    }

    for (const img of root.querySelectorAll('img')) {
      const src = img.getAttribute('src') ?? '';
      if (img.getAttribute('alt') === undefined) add('SEO-13', file, `img without alt: ${src}`);
      if (!img.getAttribute('width') || !img.getAttribute('height')) add('CWV-5', file, `img without width/height: ${src}`);
    }

    for (const el of root.querySelectorAll('[class]')) {
      if (BANNED_CLASSES.test(el.getAttribute('class'))) add('SLOP', file, `byline/eyebrow class "${el.getAttribute('class')}"`);
    }

    // Copy checks run on visible text only.
    for (const bad of root.querySelectorAll('script, style, noscript, template')) bad.remove();
    const text = (root.querySelector('body') ?? root).text.replace(/\s+/g, ' ');
    for (const [re, what] of BANNED_COPY) {
      const m = text.match(re);
      if (m) add('CV-8', file, `${what}: "…${text.slice(Math.max(0, m.index - 30), m.index + 30).trim()}…"`);
    }
  }

  for (const [t, fs] of titles) if (fs.length > 1) add('SEO-4', fs[1], `title "${t}" also used by ${relative(dist, fs[0])}`);
  for (const [d, fs] of descs) if (fs.length > 1) add('SEO-4', fs[1], `description duplicated from ${relative(dist, fs[0])}`);
  return findings;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dist = process.argv[2] ?? 'dist';
  const findings = audit(dist);
  for (const f of findings) console.log(`${f.row} ${f.file}: ${f.msg}`);
  const pages = walk(dist).filter((f) => f.endsWith('.html')).length;
  console.log(findings.length ? `\n${findings.length} finding(s) across ${pages} pages` : `check-site: ${pages} pages clean`);
  process.exit(findings.length ? 1 : 0);
}
