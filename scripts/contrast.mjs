#!/usr/bin/env node
// WCAG 2.2 contrast table for the public surfaces of airfone.app.
//
// ENGINEERING-STANDARDS §7.2: any palette or typeface change re-runs the FULL
// table for the surface and records the measured ratios in the MR — not a spot
// check on the pair that changed. This script is that table.
//
//   node scripts/contrast.mjs          # print the table, exit 1 on any failure
//   node scripts/contrast.mjs --all    # also print the rows that pass
//   node scripts/contrast.mjs '#fff' '#4F7F14'   # one-off pair
//
// Tokens below are transcribed from src/styles/tokens.css. When a token
// changes there, change it here in the same MR and paste the new table.

// --- WCAG maths -------------------------------------------------------------

const parse = (c) => {
  const s = String(c).trim().replace(/^#/, '');
  const hex = s.length === 3 ? s.split('').map((h) => h + h).join('') : s;
  if (!/^[0-9a-f]{6}$/i.test(hex)) throw new Error(`not a hex colour: ${c}`);
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
};

// Composite a possibly-translucent foreground over an opaque backdrop.
const over = (fg, bg, alpha = 1) =>
  alpha >= 1 ? fg : fg.map((v, i) => Math.round(v * alpha + bg[i] * (1 - alpha)));

const luminance = (rgb) => {
  const [r, g, b] = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const ratio = (fg, bg, alpha = 1) => {
  const back = parse(bg);
  const front = over(parse(fg), back, alpha);
  const [hi, lo] = [luminance(front), luminance(back)].sort((a, b) => b - a);
  return (hi + 0.05) / (lo + 0.05);
};

// --- Tokens (src/styles/tokens.css) -----------------------------------------

const light = {
  paper: '#FCFCF9',
  surface: '#FFFFFF',
  ink: '#16190F',
  inkMuted: '#363B2F',
  line: '#E1E4D9',
  brand: '#8BC53E',
  onBrand: '#0D1502',
  brandInk: '#2F4D07',
  night: '#141A0D',
  nightInk: '#EEF2E6',
  nightMuted: '#CDD4C2',
  nightLine: '#2C3520',
  nightBrandInk: '#A6D86A',
  nightSurface: '#1C2414',
  tint: '#F2F6E9',
  error: '#B3261E',
};

// prefers-color-scheme: dark overrides only these.
const dark = {
  ...light,
  paper: '#10140B',
  surface: '#171D10',
  ink: '#EEF2E6',
  inkMuted: '#CDD4C2',
  line: '#2A3220',
  brandInk: '#A6D86A',
  night: '#0A0D07',
  nightSurface: '#161C0F',
  tint: '#151A0E',
  error: '#FF8A80',
};

// TeaserBody.astro sets its own background; it is not a token.
const TEASER_GREEN = '#4F7F14';
const TEASER_DEEP = '#3A5F0D';

// HomeBody's hero has no solid background: it is a photo under an 88% scrim,
// rgb(20 26 13 / 0.88). The backdrop therefore depends on the photo. Measure
// the worst case (scrim over a blown-out white region) as well as the best.
const HERO_SCRIM = '#141A0D';
const heroOver = (photo) => {
  const [r, g, b] = over(parse(HERO_SCRIM), parse(photo), 0.88);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};
const HERO_DARKEST = heroOver('#000000'); // scrim over a black photo region
const HERO_LIGHTEST = heroOver('#FFFFFF'); // scrim over a white photo region

// --- The table --------------------------------------------------------------
// need: 4.5 body text · 3 large text (>=24px, or >=18.66px bold) · 3 UI
// boundary and focus indicator (WCAG 1.4.11, and §7.2's explicit focus number).
//
// Kinds that do NOT gate: `decorative` (aria-hidden ornament), `divider` (a
// separator rule carrying no information — 1.4.11 does not reach it) and
// `state` (a state also signalled by something else). They are printed with
// their measured ratio so a palette change can see them move, but they are
// reported as INFO, not FAIL.

const rows = (T) => [
  // --- teaser hero, the only page indexed today ---
  ['teaser', 'h1 on hero green', '#FFFFFF', TEASER_GREEN, 3, 'large'],
  ['teaser', 'contact label 14px on hero green', '#FFFFFF', TEASER_GREEN, 4.5, 'body'],
  ['teaser', 'contact link 20px/600 on hero green', '#FFFFFF', TEASER_GREEN, 3, 'large'],
  ['teaser', ':focus-visible ring (--brand-ink) on hero green', T.brandInk, TEASER_GREEN, 3, 'focus'],
  ['teaser', 'signal glyph on hero green (aria-hidden)', TEASER_DEEP, TEASER_GREEN, 3, 'decorative'],
  ['teaser', 'cloud mark on hero green (aria-hidden)', TEASER_DEEP, TEASER_GREEN, 3, 'decorative'],
  ['teaser', 'waitlist panel edge against hero green', T.paper, TEASER_GREEN, 3, 'divider'],

  // --- waitlist panel, sitting on the hero ---
  ['panel', 'body text on panel', T.ink, T.paper, 4.5, 'body'],
  ['panel', 'secondary text 16px on panel', T.inkMuted, T.paper, 4.5, 'body'],
  ['panel', 'link (--brand-ink) on panel', T.brandInk, T.paper, 4.5, 'body'],
  ['panel', 'input border (--line) against panel', T.line, T.paper, 3, 'boundary'],
  ['panel', 'input border (--line) against input fill', T.line, T.surface, 3, 'boundary'],
  ['panel', 'input text on input fill', T.ink, T.surface, 4.5, 'body'],
  ['panel', 'error text on panel', T.error, T.paper, 4.5, 'body'],
  ['panel', 'primary button label on --brand', T.onBrand, T.brand, 4.5, 'body'],
  ['panel', 'primary button fill against panel', T.brand, T.paper, 3, 'boundary'],
  ['panel', ':focus-visible ring (--brand-ink) on panel', T.brandInk, T.paper, 3, 'focus'],

  // --- header and footer, on every page ---
  ['night', 'header nav link (--night-muted) on --night', T.nightMuted, T.night, 4.5, 'body'],
  ['night', 'header nav link hover (--night-ink) on --night', T.nightInk, T.night, 4.5, 'body'],
  ['night', 'header/footer hairline (--night-line) on --night', T.nightLine, T.night, 3, 'divider'],
  ['night', 'header hover chip (--night-surface) on --night', T.nightSurface, T.night, 3, 'state'],
  ['night', 'footer copyright 14px (--night-muted) on --night', T.nightMuted, T.night, 4.5, 'body'],
  ['night', 'footer link (--night-brand-ink) on --night', T.nightBrandInk, T.night, 4.5, 'body'],
  ['night', ':focus-visible ring on --night', T.nightBrandInk, T.night, 3, 'focus'],

  // --- full-site surfaces behind PUBLIC_SITE_MODE=full and /preview/ ---
  ['page', 'body text on --paper', T.ink, T.paper, 4.5, 'body'],
  ['page', 'secondary text on --paper', T.inkMuted, T.paper, 4.5, 'body'],
  ['page', 'body text on --tint band', T.ink, T.tint, 4.5, 'body'],
  ['page', 'secondary text on --tint band', T.inkMuted, T.tint, 4.5, 'body'],
  ['page', 'link on --tint band', T.brandInk, T.tint, 4.5, 'body'],
  ['page', 'panel hairline (--line) on --paper', T.line, T.paper, 3, 'divider'],
  ['page', 'setup band label on --brand', T.onBrand, T.brand, 4.5, 'body'],
  ['page', 'mobile menu accent (--brand) on --night', T.brand, T.night, 4.5, 'body'],

  // --- the hero, where the backdrop is a photo under an 88% scrim ---
  ['hero', 'hero title over scrim (darkest photo)', T.nightInk, HERO_DARKEST, 3, 'large'],
  ['hero', 'hero title over scrim (lightest photo)', T.nightInk, HERO_LIGHTEST, 3, 'large'],
  ['hero', 'CallCard business name 16px over scrim (lightest)', T.nightInk, HERO_LIGHTEST, 4.5, 'body'],
  ['hero', 'CallCard clock 14px (--night-muted) over scrim (darkest)', T.nightMuted, HERO_DARKEST, 4.5, 'body'],
  ['hero', 'CallCard clock 14px (--night-muted) over scrim (lightest)', T.nightMuted, HERO_LIGHTEST, 4.5, 'body'],
  ['hero', 'CallCard speaker 16px (--brand) over scrim (lightest)', T.brand, HERO_LIGHTEST, 4.5, 'body'],
  ['hero', 'unspoken words #808A72 20-24px/600 over scrim (darkest)', '#808A72', HERO_DARKEST, 3, 'large'],
  ['hero', 'unspoken words #808A72 20-24px/600 over scrim (lightest)', '#808A72', HERO_LIGHTEST, 3, 'large'],
  ['hero', 'spoken words (--night-ink) over scrim (lightest)', T.nightInk, HERO_LIGHTEST, 3, 'large'],
  ['hero', 'CallCard hairline (--night-line) over scrim (darkest)', T.nightLine, HERO_DARKEST, 3, 'divider'],
];

const SOFT = new Set(['decorative', 'divider', 'state']);

const measure = (T) =>
  rows(T).map(([surface, what, fg, bg, need, kind]) => {
    const r = ratio(fg, bg);
    return { surface, what, fg, bg, need, kind, r, ok: r >= need };
  });

// `--md` prints the table as markdown, for pasting into DESIGN.md and the MR.
function markdown() {
  for (const [scheme, T] of [['light', light], ['dark', dark]]) {
    console.log(`\n**${scheme}** (\`prefers-color-scheme: ${scheme}\`)\n`);
    console.log('| | Pair | Measured | Needs |');
    console.log('|---|---|---|---|');
    for (const row of measure(T)) {
      const mark = row.ok ? 'ok' : SOFT.has(row.kind) ? 'info' : '**FAIL**';
      console.log(
        `| ${mark} | ${row.what} (\`${row.fg}\` on \`${row.bg}\`) | ${row.r.toFixed(2)}:1 | ${row.need}:1 |`,
      );
    }
  }
}

function run() {
  const showAll = process.argv.includes('--all');
  let failed = 0;
  for (const [scheme, T] of [['light', light], ['dark', dark]]) {
    const table = measure(T);
    const shown = showAll ? table : table.filter((row) => !row.ok);
    console.log(`\n## ${scheme} (prefers-color-scheme: ${scheme})`);
    if (!shown.length) {
      console.log('  all rows pass');
      continue;
    }
    for (const row of shown) {
      const mark = row.ok ? 'PASS' : SOFT.has(row.kind) ? 'INFO' : 'FAIL';
      if (!row.ok && !SOFT.has(row.kind)) failed += 1;
      console.log(
        `  ${mark}  ${row.r.toFixed(2).padStart(6)}:1  (need ${String(row.need).padStart(3)}:1)  ` +
          `[${row.surface}/${row.kind}] ${row.what}  ${row.fg} on ${row.bg}`,
      );
    }
  }
  console.log(`\n${failed} failing row(s).`);
  process.exit(failed ? 1 : 0);
}

const [, , a, b, alpha] = process.argv;
if (a && b && !a.startsWith('--')) {
  console.log(`${ratio(a, b, alpha ? Number(alpha) : 1).toFixed(2)}:1  ${a} on ${b}`);
} else if (import.meta.url === `file://${process.argv[1]}`) {
  if (process.argv.includes('--md')) markdown();
  else run();
}
