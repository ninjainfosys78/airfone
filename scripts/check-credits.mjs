// Every image a blog post uses must be credited, and every credit must point
// at a real file. Images live in src/assets/blog/<slug>/; credits are the
// post's `credits` front matter (see src/lib/blog-schema.ts). Exits 1 on any
// problem so an uncredited Creative Commons photo never ships.
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const posts = 'src/content/blog';
const assets = 'src/assets/blog';
const problems = [];

for (const f of readdirSync(posts).filter((x) => x.endsWith('.md'))) {
  const slug = f.replace(/\.md$/, '');
  const src = readFileSync(`${posts}/${f}`, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const credited = new Set([...fm.matchAll(/^\s*-?\s*file:\s*["']?([^"'\n]+?)["']?\s*$/gm)].map((m) => m[1]));
  const dir = `${assets}/${slug}`;
  const files = existsSync(dir) ? readdirSync(dir).filter((x) => !x.startsWith('.')) : [];
  for (const file of files) if (!credited.has(file)) problems.push(`${slug}: ${file} has no credit`);
  for (const file of credited) if (!files.includes(file)) problems.push(`${slug}: credit for missing file ${file}`);
  // Images must come from the post's own folder, so the two lists above cover them.
  for (const m of src.matchAll(/(?:!\[[^\]]*\]\(|cover:\s*)["']?([^"')\s]+\.(?:jpe?g|png|webp|avif|svg|gif))/gi)) {
    if (!m[1].includes(`assets/blog/${slug}/`)) problems.push(`${slug}: image ${m[1]} is outside src/assets/blog/${slug}/`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} credit problem(s)`);
  process.exit(1);
}
console.log('credits: every blog image is credited');
