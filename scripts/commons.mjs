// Fetch an image from Wikimedia Commons into a blog post's folder and print its
// credit, taken from Commons' own metadata so author and licence are exact.
//
//   node scripts/commons.mjs search "<words>"            Commons files with licences
//   node scripts/commons.mjs get <slug> "File:Name.jpg" <out-name.jpg> ["changes"]
//   node scripts/commons.mjs ov-search "<words>"         Openverse (Flickr, museums, Commons...),
//                                                        only licences allowing commercial use + changes
//   node scripts/commons.mjs ov-get <slug> <openverse-id> <out-name.jpg> ["changes"]
//
// `get` downloads a 1600px-wide copy to src/assets/blog/<slug>/<out-name> and
// prints the YAML credit to paste under `credits:`. Licences that forbid
// commercial use or changes (NC, ND) are refused.
import { mkdirSync, writeFileSync } from 'node:fs';

const API = 'https://commons.wikimedia.org/w/api.php';
const UA = { 'User-Agent': 'NinjaInfosysBlogBot/1.0 (info@ninjainfosys.com)' };
const decode = (h = '') => h.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const strip = (h = '') => decode(h.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
// A profile link is kept only when it is a real page (Commons red links are not).
const goodUrl = (u) => (u && !/redlink=1/.test(u) ? decode(u.startsWith('//') ? `https:${u}` : u) : undefined);
// Download an image and refuse anything that is not one (error pages, redirects to HTML).
async function download(url, path) {
  const res = await fetch(url, { headers: UA, redirect: 'follow' });
  const type = res.headers.get('content-type') ?? '';
  const buf = Buffer.from(await res.arrayBuffer());
  if (!res.ok || !type.startsWith('image/') || buf.length < 10000) throw new Error(`not an image (${res.status} ${type}, ${buf.length} bytes): ${url}`);
  writeFileSync(path, buf);
}
const LICENCE_MAP = [
  [/^cc0/i, 'CC0 1.0'], [/^public domain|^pd/i, 'Public domain'],
  [/^cc by-sa 4\.0$/i, 'CC BY-SA 4.0'], [/^cc by-sa 3\.0$/i, 'CC BY-SA 3.0'], [/^cc by-sa 2\.5$/i, 'CC BY-SA 2.5'], [/^cc by-sa 2\.0$/i, 'CC BY-SA 2.0'],
  [/^cc by 4\.0$/i, 'CC BY 4.0'], [/^cc by 3\.0$/i, 'CC BY 3.0'], [/^cc by 2\.5$/i, 'CC BY 2.5'], [/^cc by 2\.0$/i, 'CC BY 2.0'],
];
const licenceOf = (short) => (/\b(nc|nd)\b/i.test(short) ? null : LICENCE_MAP.find(([re]) => re.test(short.trim().replace(/\s+/g, ' ')))?.[1] ?? null);

async function info(titles) {
  const q = new URLSearchParams({ action: 'query', format: 'json', prop: 'imageinfo', iiprop: 'url|extmetadata|size', iiurlwidth: '1600', titles });
  return Object.values((await (await fetch(`${API}?${q}`, { headers: UA })).json()).query?.pages ?? {});
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'search') {
  const q = new URLSearchParams({ action: 'query', format: 'json', list: 'search', srnamespace: '6', srlimit: '20', srsearch: `${args.join(' ')} filetype:bitmap` });
  const hits = (await (await fetch(`${API}?${q}`, { headers: UA })).json()).query.search.map((h) => h.title);
  for (const p of await info(hits.join('|'))) {
    const ii = p.imageinfo?.[0]; if (!ii) continue;
    const m = ii.extmetadata ?? {};
    const lic = licenceOf(strip(m.LicenseShortName?.value));
    console.log(`${lic ? 'OK ' : 'NO '} ${ii.width}x${ii.height}  ${strip(m.LicenseShortName?.value)}  ${p.title}`);
  }
} else if (cmd === 'get') {
  const [slug, title, out, changes] = args;
  const [p] = await info(title);
  const ii = p?.imageinfo?.[0];
  if (!ii) throw new Error(`not found: ${title}`);
  const m = ii.extmetadata ?? {};
  const short = strip(m.LicenseShortName?.value);
  const licence = licenceOf(short);
  if (!licence) throw new Error(`licence not allowed for our sites: ${short}`);
  const author = strip(m.Artist?.value);
  if (!author || /^unknown/i.test(author)) throw new Error(`no author recorded, cannot credit it properly: ${title}`);
  const authorUrl = goodUrl(m.Artist?.value?.match(/href="([^"]+)"/)?.[1]);
  const dir = `src/assets/blog/${slug}`;
  mkdirSync(dir, { recursive: true });
  await download(ii.thumburl ?? ii.url, `${dir}/${out}`);
  const absUrl = (u) => (u.startsWith('//') ? `https:${u}` : u);
  const lines = [
    `  - file: ${out}`,
    `    title: ${JSON.stringify(strip(m.ObjectName?.value) || title.replace(/^File:/, '').replace(/\.\w+$/, ''))}`,
    `    author: ${JSON.stringify(author)}`,
    ...(authorUrl ? [`    authorUrl: ${JSON.stringify(authorUrl)}`] : []),
    `    source: ${JSON.stringify(ii.descriptionurl)}`,
    `    licence: ${licence}`,
    `    changes: ${JSON.stringify(changes ?? 'Resized')}`,
  ];
  console.log(lines.join('\n'));
} else if (cmd === 'ov-search') {
  const q = new URLSearchParams({ q: args.join(' '), license_type: 'commercial,modification', page_size: '20', mature: 'false' });
  const res = await (await fetch(`https://api.openverse.org/v1/images/?${q}`, { headers: UA })).json();
  for (const r of res.results ?? []) {
    console.log(`${r.id}  ${r.width ?? '?'}x${r.height ?? '?'}  CC ${r.license.toUpperCase()} ${r.license_version ?? ''}  ${r.source}  ${r.title}`);
  }
} else if (cmd === 'ov-get') {
  const [slug, id, out, changes] = args;
  const r = await (await fetch(`https://api.openverse.org/v1/images/${id}/`, { headers: UA })).json();
  if (!r.url) throw new Error(`not found: ${id}`);
  const short = r.license === 'cc0' ? 'cc0' : r.license === 'pdm' ? 'public domain' : `cc ${r.license} ${r.license_version}`;
  const licence = licenceOf(short);
  if (!licence) throw new Error(`licence not allowed for our sites: ${short}`);
  if (!r.creator || /^unknown/i.test(r.creator)) throw new Error(`no author recorded, cannot credit it properly: ${id}`);
  const dir = `src/assets/blog/${slug}`;
  mkdirSync(dir, { recursive: true });
  // Openverse's own thumbnail proxy works when the origin blocks hotlinking.
  await download(r.url, `${dir}/${out}`).catch(() => download(`https://api.openverse.org/v1/images/${id}/thumb/?full_size=true`, `${dir}/${out}`));
  console.log([
    `  - file: ${out}`,
    `    title: ${JSON.stringify(r.title || 'Untitled')}`,
    `    author: ${JSON.stringify(r.creator)}`,
    ...(goodUrl(r.creator_url) ? [`    authorUrl: ${JSON.stringify(goodUrl(r.creator_url))}`] : []),
    `    source: ${JSON.stringify(r.foreign_landing_url)}`,
    `    licence: ${licence}`,
    `    changes: ${JSON.stringify(changes ?? 'Resized')}`,
  ].join('\n'));
} else {
  console.log('usage: commons.mjs search "<words>" | get <slug> "File:Name.jpg" <out.jpg> ["changes"]');
}
