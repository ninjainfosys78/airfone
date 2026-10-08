#!/usr/bin/env node
// Tells Bing, Yandex, Seznam and Naver (IndexNow) that pages changed, so they
// recrawl in hours instead of weeks. Run after a deploy:
//   node scripts/indexnow.mjs            every URL in dist/sitemap.xml
//   node scripts/indexnow.mjs /blog/x    just these paths
// The key file public/<key>.txt must be live on https://airfone.app first.
import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'airfone.app';
const key = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f))?.slice(0, -4);
if (!key) throw new Error('no IndexNow key file in public/');

const args = process.argv.slice(2);
const urls = args.length
  ? args.map((p) => `https://${HOST}${p.startsWith('/') ? p : `/${p}`}`)
  : [...readFileSync('dist/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls }),
});
console.log(`indexnow: ${res.status} ${res.statusText} for ${urls.length} url(s)`);
if (res.status >= 400) process.exit(1);
