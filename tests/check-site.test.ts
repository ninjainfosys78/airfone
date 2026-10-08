import { describe, expect, it } from 'vitest';
import { fileURLToPath } from 'node:url';
// @ts-expect-error plain JS module
import { audit } from '../scripts/check-site.mjs';

const fx = (name: string) => fileURLToPath(new URL(`./fixtures/${name}`, import.meta.url));
const colours = new Set(['#15181F', '#000000', '#FFFFFF']);

describe('check-site', () => {
  it('reports nothing on a clean build', () => {
    expect(audit(fx('good'), { designColours: colours })).toEqual([]);
  });

  const found = audit(fx('bad'), { designColours: colours }) as { row: string; file: string; msg: string }[];
  const has = (row: string, re: RegExp) => found.some((f) => f.row === row && re.test(f.msg));

  it.each([
    ['A11Y-6', /lang/],
    ['SEO-6', /2 h1/],
    ['SEO-6', /h1 to h4/],
    ['SEO-4', /description is 5 chars/],
    ['SEO-4', /title "Dup" also used/],
    ['SEO-2', /canonical .* should be https:\/\/airfone\.app\/$/],
    ['SEO-5', /og:image/],
    ['SD-2', /offers/],
    ['SD-7', /does not parse/],
    ['SLOP', /box-shadow/],
    ['SLOP', /gradient/],
    ['SLOP', /negative letter spacing/],
    ['SLOP', /uppercase/],
    ['SLOP', /eyebrow/],
    ['DS-1', /#123456/],
    ['CV-8', /em-dash/],
    ['CV-8', /generic marketing/],
    ['CV-8', /price/],
    ['CV-8', /social media/],
    ['LN-1', /broken internal link \/missing/],
    ['LN-1', /broken internal link \/blog\//],
    ['LN-1', /relative link/],
    ['SEO-14', /absolute link/],
    ['SEC-4', /noopener/],
    ['SEO-13', /without alt/],
    ['CWV-5', /width\/height/],
    ['SEC-3', /secret/],
  ])('%s %s', (row, re) => {
    expect(has(row, re), JSON.stringify(found, null, 1)).toBe(true);
  });
});
