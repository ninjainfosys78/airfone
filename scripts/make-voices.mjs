#!/usr/bin/env node
// Builds the demo calls from scripts/voices/*.json with ElevenLabs. Lines
// are spoken in Nepali (`ne`); `text` is the English shown under each line.
// Each line is spoken separately (cached by voice + text, so reruns are
// free), joined with short gaps, loudness-matched, and written to
// public/audio/<id>.opus and .m4a with <id>.json timings and waveform peaks.
//
//   node scripts/make-voices.mjs            all clips
//   node scripts/make-voices.mjs clinic     one clip
//   --budget 9000                           refuse if the total is larger
//
// The key is read from .env (ELEVENLABS_API_KEY) only, never from the code.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPTS = join(ROOT, 'scripts/voices');
const CACHE = join(ROOT, '.cache/voices');
const OUT = join(ROOT, 'public/audio');
const GAP = 0.35;
const MODEL = 'eleven_v4'; // speaks Nepali; multilingual_v2 does not

export function planClip(script, voices) {
  return script.lines.map((l, i) => {
    const voiceId = voices[l.voice];
    if (!voiceId) throw new Error(`${script.id} line ${i + 1}: unknown voice "${l.voice}"`);
    return { speaker: l.speaker, voiceId, text: l.ne ?? l.text };
  });
}

export function stitch(durations, gap = GAP) {
  const out = [];
  let t = 0;
  for (const d of durations) {
    const start = Math.round(t * 1000) / 1000;
    const end = Math.round((t + d) * 1000) / 1000;
    out.push({ start, end });
    t = end + gap;
  }
  return out;
}

export const charCount = (scripts) => scripts.reduce((n, s) => n + s.lines.reduce((m, l) => m + (l.ne ?? l.text).length, 0), 0);

export const cacheKey = (voiceId, text) => createHash('sha256').update(`${MODEL}\n${voiceId}\n${text}`).digest('hex').slice(0, 20);

/** Peak absolute amplitude per bucket, normalised so the loudest bucket is 1. */
export function peaksFrom(samples, buckets) {
  const size = Math.max(1, Math.floor(samples.length / buckets));
  const peaks = [];
  for (let b = 0; b < buckets; b++) {
    let m = 0;
    for (let i = b * size; i < Math.min(samples.length, (b + 1) * size); i++) m = Math.max(m, Math.abs(samples[i]));
    peaks.push(m);
  }
  const top = Math.max(...peaks) || 1;
  return peaks.map((p) => Math.round((p / top) * 100) / 100);
}

function readKey() {
  const env = existsSync(join(ROOT, '.env')) ? readFileSync(join(ROOT, '.env'), 'utf8') : '';
  const m = env.match(/^ELEVENLABS_API_KEY=(.+)$/m);
  if (!m) throw new Error('ELEVENLABS_API_KEY missing from .env');
  return m[1].trim().replace(/^["']|["']$/g, '');
}

async function speak(key, voiceId, text) {
  const file = join(CACHE, `${cacheKey(voiceId, text)}.mp3`);
  if (existsSync(file)) return { file, cached: true };
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'content-type': 'application/json', accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: MODEL, voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return { file, cached: false };
}

const duration = (file) =>
  Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).toString().trim());

function decodeMono(file) {
  const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', file, '-ac', '1', '-ar', '8000', '-f', 'f32le', '-'], { maxBuffer: 1 << 28 });
  return new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
}

async function build(script, voices, key) {
  const plan = planClip(script, voices);
  const parts = [];
  let fresh = 0;
  for (const p of plan) {
    const r = await speak(key, p.voiceId, p.text);
    if (!r.cached) fresh += p.text.length;
    parts.push(r.file);
  }
  const times = stitch(parts.map(duration));

  // Concatenate with silence between lines, then loudness-normalise.
  const inputs = [];
  const filters = [];
  parts.forEach((f, i) => {
    inputs.push('-i', f);
    filters.push(`[${i}:a]aresample=48000,aformat=channel_layouts=mono${i < parts.length - 1 ? `,apad=pad_dur=${GAP}` : ''}[a${i}]`);
  });
  const concat = `${parts.map((_, i) => `[a${i}]`).join('')}concat=n=${parts.length}:v=0:a=1,loudnorm=I=-16:TP=-1.5:LRA=11[out]`;
  const wav = join(CACHE, `${script.id}.wav`);
  execFileSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-filter_complex', `${filters.join(';')};${concat}`, '-map', '[out]', '-ar', '48000', wav]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-c:a', 'libopus', '-b:a', '64k', join(OUT, `${script.id}.opus`)]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', join(OUT, `${script.id}.m4a`)]);

  const total = duration(wav);
  const timing = {
    id: script.id,
    label: script.label,
    duration: Math.round(total * 1000) / 1000,
    lines: script.lines.map((l, i) => ({ speaker: l.speaker, ne: l.ne, text: l.text, ...times[i] })),
    peaks: peaksFrom(decodeMono(wav), 120),
  };
  writeFileSync(join(OUT, `${script.id}.json`), JSON.stringify(timing));
  return { fresh, total };
}

async function main() {
  const args = process.argv.slice(2);
  const bi = args.indexOf('--budget');
  const budget = bi >= 0 ? Number(args.splice(bi, 2)[1]) : 9000;
  const voices = JSON.parse(readFileSync(join(SCRIPTS, 'voices.json'), 'utf8'));
  let scripts = readdirSync(SCRIPTS)
    .filter((f) => f.endsWith('.json') && f !== 'voices.json')
    .map((f) => JSON.parse(readFileSync(join(SCRIPTS, f), 'utf8')));
  if (args.length) scripts = scripts.filter((s) => args.includes(s.id));
  const chars = charCount(scripts);
  if (chars > budget) throw new Error(`${chars} characters is over the budget of ${budget}`);
  scripts.forEach((s) => planClip(s, voices)); // validate before spending anything

  mkdirSync(CACHE, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  const key = readKey();
  let spent = 0;
  for (const s of scripts) {
    const { fresh, total } = await build(s, voices, key);
    spent += fresh;
    console.log(`${s.id}: ${total.toFixed(1)}s, ${fresh} new characters`);
  }
  console.log(`done: ${spent} characters billed this run (${chars} in all scripts)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => { console.error(e.message); process.exit(1); });
}
