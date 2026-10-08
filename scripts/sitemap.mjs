#!/usr/bin/env node
// Writes dist/sitemap.xml from the built pages themselves, so the sitemap can
// never disagree with what is served. A page is listed only when it is
// indexable: it has a self-referencing canonical, no `noindex`, and is not an
// error page. Each entry carries an honest lastmod (post dates, else the last
// git commit touching the page's sources) and its images.
//
//   node scripts/sitemap.mjs dist
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { parse } from 'node-html-parser';

export const SITE = 'https://airfone.app';
const MAX_URLS = 50000;
const MAX_BYTES = 50 * 1024 * 1024;

/** dist file -> public path: `blog/x.html` -> `/blog/x`, `index.html` -> `/`. */
export function pathFor(file) {
  const p = `/${file.replace(/\\/g, '/').replace(/\.html$/, '')}`;
  if (p === '/index') return '/';
  return p.replace(/\/index$/, '');
}

export const urlFor = (path) => (path === '/' ? `${SITE}/` : `${SITE}${path}`);

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

/** Reads what the sitemap needs from one built page. */
export function readPage(html, path) {
  const root = parse(html);
  const meta = (sel) => root.querySelector(sel)?.getAttribute('content') ?? null;
  const robots = (meta('meta[name="robots"]') ?? '').toLowerCase();
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;
  const images = new Set();
  const og = meta('meta[property="og:image"]');
  if (og) images.add(og);
  for (const img of root.querySelectorAll('main img')) {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('data:')) images.add(new URL(src, urlFor(path)).href);
  }
  return {
    path,
    canonical,
    noindex: /\bnoindex\b|\bnone\b/.test(robots),
    modified: meta('meta[property="article:modified_time"]') ?? meta('meta[property="article:published_time"]'),
    images: [...images].filter((u) => u.startsWith(SITE)),
  };
}

/** Why a page is left out, or null when it belongs in the sitemap. */
export function exclusion(page) {
  if (page.path === '/404' || /^\/(og|orb-pick)(\/|$)/.test(page.path)) return 'not a page';
  if (page.noindex) return 'noindex';
  if (!page.canonical) return 'no canonical';
  if (page.canonical !== urlFor(page.path)) return `canonical points to ${page.canonical}`;
  return null;
}

/** Source files whose last commit dates a page. */
export function sourcesFor(path) {
  const data = { products: 'src/data/products.ts', solutions: 'src/data/solutions.ts' };
  if (path === '/') return ['src/pages/index.astro', 'src/components/home', 'src/data/products.ts'];
  const [, section, slug] = path.split('/');
  if (data[section] && slug) return [`src/pages/${section}/[slug].astro`, data[section]];
  return [`src/pages${path}.astro`, `src/pages${path}`];
}

function gitDate(files) {
  const present = files.filter((f) => existsSync(f));
  if (!present.length) return null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...present], { encoding: 'utf8' }).trim();
    return out || null;
  } catch {
    return null;
  }
}

/** W3C datetime, date only: the precision we can honestly claim. */
export const day = (iso) => (iso ? new Date(iso).toISOString().slice(0, 10) : null);

export function toXml(entries) {
  const urls = entries.map((e) => {
    const lines = [`  <url>`, `    <loc>${xmlEscape(e.loc)}</loc>`];
    if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
    for (const img of e.images) lines.push(`    <image:image><image:loc>${xmlEscape(img)}</image:loc></image:image>`);
    lines.push(`  </url>`);
    return lines.join('\n');
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
}

/** Hard checks on the finished list; any failure stops the build. */
export function validate(entries, xml, exists) {
  const errors = [];
  const seen = new Set();
  for (const e of entries) {
    if (seen.has(e.loc)) errors.push(`duplicate ${e.loc}`);
    seen.add(e.loc);
    if (!e.loc.startsWith(`${SITE}/`)) errors.push(`foreign or relative loc ${e.loc}`);
    if (e.loc !== `${SITE}/` && e.loc.endsWith('/')) errors.push(`trailing slash ${e.loc}`);
    if (/[?#]/.test(e.loc)) errors.push(`query or fragment in ${e.loc}`);
    if (e.loc !== e.loc.toLowerCase()) errors.push(`uppercase in ${e.loc}`);
    if (e.lastmod && !/^\d{4}-\d{2}-\d{2}$/.test(e.lastmod)) errors.push(`bad lastmod ${e.lastmod} on ${e.loc}`);
    if (e.lastmod && e.lastmod > day(new Date().toISOString())) errors.push(`future lastmod on ${e.loc}`);
    for (const img of e.images) if (!exists(img)) errors.push(`missing image ${img} on ${e.loc}`);
  }
  if (!seen.has(`${SITE}/`)) errors.push('home page missing');
  if (entries.length > MAX_URLS) errors.push(`${entries.length} urls exceeds ${MAX_URLS}`);
  if (Buffer.byteLength(xml) > MAX_BYTES) errors.push('sitemap exceeds 50 MB');
  return errors;
}

function htmlFiles(dir, base = dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return htmlFiles(full, base);
    return name.endsWith('.html') ? [relative(base, full)] : [];
  });
}

export function build(dist) {
  const pages = htmlFiles(dist).map((f) => readPage(readFileSync(join(dist, f), 'utf8'), pathFor(f)));
  const skipped = [];
  const listed = pages.filter((p) => {
    const why = exclusion(p);
    if (why) skipped.push(`${p.path}: ${why}`);
    return !why;
  });
  // Blog index and tag pages change when their newest post does.
  const posts = listed.filter((p) => p.modified);
  const newestIn = (pred) => posts.filter(pred).map((p) => p.modified).sort().at(-1) ?? null;
  const entries = listed
    .map((p) => {
      let iso = p.modified;
      if (!iso && p.path.startsWith('/blog')) {
        const tag = p.path.match(/^\/blog\/tag\/([^/]+)$/)?.[1];
        iso = newestIn((q) => !tag || readFileSync(join(dist, `${q.path.slice(1)}.html`), 'utf8').includes(`/blog/tag/${tag}"`));
      }
      iso ??= gitDate(sourcesFor(p.path));
      return { loc: urlFor(p.path), lastmod: day(iso), images: p.images };
    })
    .sort((a, b) => (a.loc === `${SITE}/` ? -1 : b.loc === `${SITE}/` ? 1 : a.loc.localeCompare(b.loc)));
  const xml = toXml(entries);
  const exists = (url) => {
    const rel = decodeURIComponent(new URL(url).pathname).slice(1);
    return existsSync(join(dist, rel));
  };
  return { entries, xml, skipped, errors: validate(entries, xml, exists) };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const dist = process.argv[2] ?? 'dist';
  const { entries, xml, skipped, errors } = build(dist);
  if (errors.length) {
    console.error(`sitemap: ${errors.length} problem(s)\n  ${errors.join('\n  ')}`);
    process.exit(1);
  }
  writeFileSync(join(dist, 'sitemap.xml'), xml);
  const imgs = entries.reduce((n, e) => n + e.images.length, 0);
  console.log(`sitemap: ${entries.length} urls, ${imgs} images, ${skipped.length} left out (${skipped.join('; ')})`);
}
