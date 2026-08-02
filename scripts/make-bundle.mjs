// Build → tarball pipeline.
//
// Inputs:  ./dist/  (produced by `astro build`)
// Output:  ./bundle/<slug>-landing-<timestamp>.tar.gz
//
// Constraints enforced (mirrors backend/internal/platform/route_bundles/tarball.go):
//   - compressed ≤ 50 MB
//   - uncompressed ≤ 200 MB
//   - file count ≤ 200
//   - per-file ≤ 10 MB
//   - extension whitelist (html, css, js, mjs, map, json, txt, xml,
//     svg, png, jpg, jpeg, gif, webp, ico, woff, woff2, ttf, otf, eot, pdf)
//   - at least one index.html somewhere in the tree
//   - no symlinks, no absolute paths, no path traversal
//
// We pre-validate locally so an upload never wastes a round-trip on a
// known-bad file.

import { spawnSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname, sep, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const APP_DIR = dirname(dirname(fileURLToPath(import.meta.url)));
process.chdir(APP_DIR);

const SLUG = process.env.BUNDLE_SLUG || basename(dirname(APP_DIR)); // <customer-slug>
const APP_NAME = basename(APP_DIR);                                  // landing | sewagrahi | ...

const DIST = 'dist';
const OUT_DIR = 'bundle';
const ALLOWED_EXT = new Set([
  '.html', '.css', '.js', '.mjs', '.map', '.json', '.txt', '.xml',
  '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico',
  '.woff', '.woff2', '.ttf', '.otf', '.eot', '.pdf',
]);
const MAX_FILES = 200;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_UNCOMPRESSED = 200 * 1024 * 1024;
const MAX_COMPRESSED = 50 * 1024 * 1024;

const VERIFY_ONLY = process.argv.includes('--verify-only');

function fail(msg) {
  console.error(`✘ ${msg}`);
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isSymbolicLink()) fail(`symlink not allowed: ${full}`);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) fail(`${DIST}/ not found — run \`pnpm run build\` first.`);

const files = walk(DIST);
if (files.length === 0) fail(`${DIST}/ is empty.`);
if (files.length > MAX_FILES) fail(`too many files: ${files.length} > ${MAX_FILES}`);

let totalBytes = 0;
let hasIndex = false;
for (const f of files) {
  const rel = relative(DIST, f).split(sep).join('/');
  if (rel.startsWith('..') || rel.startsWith('/')) fail(`path traversal: ${rel}`);
  const ext = extname(rel).toLowerCase();
  if (!ALLOWED_EXT.has(ext)) fail(`disallowed extension ${ext} on ${rel}`);
  const size = statSync(f).size;
  if (size > MAX_FILE_BYTES) fail(`file too large: ${rel} (${size} bytes)`);
  totalBytes += size;
  if (rel.endsWith('index.html')) hasIndex = true;
}
if (!hasIndex) fail('no index.html in dist/');
if (totalBytes > MAX_UNCOMPRESSED) fail(`uncompressed total ${totalBytes} > ${MAX_UNCOMPRESSED}`);

if (VERIFY_ONLY) {
  console.log(`✓ verified: ${files.length} files, ${(totalBytes / 1024).toFixed(1)} KB`);
  process.exit(0);
}

mkdirSync(OUT_DIR, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-').replace(/-\d+Z$/, 'Z');
const tarballPath = join(OUT_DIR, `${SLUG}-${APP_NAME}-${stamp}.tar.gz`);

// COPYFILE_DISABLE=1 stops macOS bsdtar from emitting AppleDouble
// (`._<name>` resource-fork companions) — without it every archive
// entry gets a junk sibling that the eShasan extractor must skip.
const tar = spawnSync('tar', ['czf', tarballPath, '-C', DIST, '.'], {
  stdio: 'inherit',
  env: { ...process.env, COPYFILE_DISABLE: '1' },
});
if (tar.status !== 0) fail('tar failed');

const compressed = statSync(tarballPath).size;
if (compressed > MAX_COMPRESSED) fail(`compressed size ${compressed} > ${MAX_COMPRESSED}`);

console.log(`✓ ${tarballPath}`);
console.log(`  files:        ${files.length}`);
console.log(`  uncompressed: ${(totalBytes / 1024).toFixed(1)} KB`);
console.log(`  compressed:   ${(compressed / 1024).toFixed(1)} KB`);
console.log(`  index.html:   present`);
