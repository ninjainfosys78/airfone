#!/usr/bin/env node
// Shortens every silence in the real Pathibhara call to KEEP seconds, writes
// public/audio/pathibhara.{opus,m4a,json} and remaps the transcript timings
// by exactly the time removed. Source: .cache/real/pathibhara.mp3 (the CDN
// recording, DEMO_AUDIO_URL).
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { demoCall } from '../src/data/demo-call.ts';
import { peaksFrom } from './make-voices.mjs';

const SRC = '.cache/real/pathibhara.mp3';
const KEEP = 0.35;
const MIN = 0.6;

/** Silence intervals from ffmpeg's silencedetect output. */
export function parseSilences(log) {
  const out = [];
  let start = null;
  for (const line of log.split('\n')) {
    const s = line.match(/silence_start: ([\d.]+)/);
    const e = line.match(/silence_end: ([\d.]+)/);
    if (s) start = Number(s[1]);
    if (e && start !== null) { out.push([start, Number(e[1])]); start = null; }
  }
  return out;
}

/** Cuts: the middle of each silence, leaving KEEP seconds of it. */
export function cutsFrom(silences, keep = KEEP, min = MIN) {
  return silences.filter(([a, b]) => b - a >= min).map(([a, b]) => [a + keep / 2, b - keep / 2]);
}

/** New time for an original time, given the removed spans. */
export function remap(t, cuts) {
  let shift = 0;
  for (const [a, b] of cuts) {
    if (t >= b) shift += b - a;
    else if (t > a) shift += t - a;
  }
  return Math.round((t - shift) * 1000) / 1000;
}

function main() {
  const dur = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', SRC]).toString());
  // silencedetect reports on stderr.
  const log = execFileSync('sh', ['-c', `ffmpeg -hide_banner -i ${SRC} -af silencedetect=noise=-38dB:d=${MIN} -f null - 2>&1`]).toString();
  const cuts = cutsFrom(parseSilences(log));
  // Kept segments between cuts.
  const keep = [];
  let at = 0;
  for (const [a, b] of cuts) { if (a > at) keep.push([at, a]); at = b; }
  if (at < dur) keep.push([at, dur]);
  const filter = keep.map(([a, b], i) => `[0:a]atrim=${a}:${b},asetpts=PTS-STARTPTS[s${i}]`).join(';')
    + `;${keep.map((_, i) => `[s${i}]`).join('')}concat=n=${keep.length}:v=0:a=1,loudnorm=I=-16:TP=-1.5:LRA=11[out]`;
  mkdirSync('public/audio', { recursive: true });
  const wav = '.cache/real/pathibhara.wav';
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', SRC, '-filter_complex', filter, '-map', '[out]', '-ar', '48000', '-ac', '1', wav]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-c:a', 'libopus', '-b:a', '64k', 'public/audio/pathibhara.opus']);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', 'public/audio/pathibhara.m4a']);
  const newDur = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', wav]).toString());
  const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', wav, '-ac', '1', '-ar', '8000', '-f', 'f32le', '-'], { maxBuffer: 1 << 28 });
  const timing = {
    id: 'pathibhara',
    label: 'Real call · Pathibhara Solutions',
    duration: Math.round(newDur * 1000) / 1000,
    lines: demoCall.lines.map((l) => ({ speaker: l.speaker, ne: l.ne, text: l.en, start: remap(l.start, cuts), end: remap(l.end, cuts) })),
    peaks: peaksFrom(new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4), 120),
  };
  writeFileSync('public/audio/pathibhara.json', JSON.stringify(timing));
  console.log(`${dur.toFixed(1)}s -> ${newDur.toFixed(1)}s, ${cuts.length} silences shortened`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
