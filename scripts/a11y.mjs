#!/usr/bin/env node
// axe-core WCAG 2.2 AA scan of every built page at phone and desktop width,
// using the installed Chrome. Serve dist first: pnpm exec astro preview --port 4363
import puppeteer from 'puppeteer-core';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.argv[2] ?? 'http://localhost:4363';
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const axe = readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');
const walk = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? walk(join(d, n)) : [join(d, n)]));
const routes = walk('dist').filter((f) => f.endsWith('.html') && !/google[0-9a-f]+\.html$/.test(f))
  .map((f) => f.slice(4).replace(/\.html$/, '').replace(/\/index$/, '/'));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
let total = 0;
for (const r of routes) for (const width of [375, 1280]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900 });
  // Measure final colours, not text halfway through its fade-in.
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(BASE + r, { waitUntil: 'load', timeout: 20000 });
  await page.evaluate(axe);
  // @ts-ignore
  const res = await page.evaluate(() => window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  for (const v of res.violations) { total++; console.log(`${r} @${width}: ${v.id} (${v.impact}) ${v.help} :: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`); }
  if (overflow) { total++; console.log(`${r} @${width}: horizontal scroll`); }
  await page.close();
}
await browser.close();
console.log(total ? `\n${total} issue(s) on ${routes.length} pages` : `a11y: ${routes.length} pages x 2 widths clean`);
process.exit(total ? 1 : 0);
