// A small WebGL runner for Orbkit orb variants, without React or Three.js.
// Follows the engine in Orbkit's orbkit-core.tsx (MIT, Copyright (c) 2026
// zzzzshawn): same shader prelude, uniforms, integrated clocks and
// critically damped spring between states, trimmed to what this site uses.

export type EngineState = 'idle' | 'thinking' | 'speaking';

export interface OrbParamDef {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  default: number;
  integrate?: boolean;
}

export interface OrbColorDef {
  key: string;
  label: string;
  default: string;
}

export interface OrbVariant {
  key: string;
  label: string;
  note: string;
  frag: string;
  params: OrbParamDef[];
  colors: OrbColorDef[];
  statePresets?: Partial<Record<EngineState, Record<string, number>>>;
  stateColors?: Partial<Record<EngineState, Record<string, string>>>;
}

const VERT = 'attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}';

const PRELUDE = `precision highp float;
uniform vec2 uRes;uniform float uTime;uniform float uAnim;uniform float uInput;uniform float uOutput;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);
return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);}
float fbm(vec2 p){float v=0.0;float a=0.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(11.7,7.3);a*=0.5;}return v;}
vec2 orbUV(){return (2.0*gl_FragCoord.xy-uRes)/min(uRes.x,uRes.y);}
vec3 tanh3(vec3 x){x=clamp(x,-10.0,10.0);vec3 e=exp(2.0*x);return (e-1.0)/(e+1.0);}
`;

const EASE = 4;

/** One implicit step of a critically damped spring. */
function spring(x: number, v: number, target: number, dt: number): [number, number] {
  const f = 1 + 2 * dt * EASE;
  const oo = EASE * EASE;
  const hoo = dt * oo;
  const hhoo = dt * hoo;
  const det = 1 / (f + hhoo);
  return [(f * x + dt * v + hhoo * target) * det, (v + hoo * (target - x)) * det];
}

export function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** Volumes the orb shows when no live audio level is given. */
function synthVolumes(state: EngineState, t: number): [number, number] {
  const c = (n: number) => Math.min(1, Math.max(0, n));
  if (state === 'speaking') return [c(0.65 + Math.sin(t * 4.8) * 0.22), c(0.75 + Math.sin(t * 3.6) * 0.22)];
  if (state === 'thinking') return [c(0.38 + 0.07 * Math.sin(t * 0.7)), c(0.48 + 0.12 * Math.sin(t * 1.05 + 0.6))];
  return [0, 0.3];
}

export interface OrbEngine {
  setState(s: EngineState): void;
  /** Live levels 0..1; null returns to synthesized levels. */
  setLevels(input: number | null, output: number | null): void;
  setRunning(on: boolean): void;
  destroy(): void;
}

/** Signs this device will struggle to render the orb smoothly. */
export function lowEndDevice(): boolean {
  const n = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  return (n.hardwareConcurrency ?? 8) <= 4 || (n.deviceMemory ?? 8) <= 4 || !!n.connection?.saveData;
}

export function createOrb(
  canvas: HTMLCanvasElement,
  variant: OrbVariant,
  palette?: Partial<Record<EngineState, Record<string, string>>>,
  /** Fixed parameter values that win over the variant's presets (framing, light). */
  tune: Record<string, number> = {},
  /** Called once if the device cannot keep up even at the lowest quality. */
  onTooSlow?: () => void,
): OrbEngine | null {
  // failIfMajorPerformanceCaveat: no context at all when WebGL would run in
  // software, which is what freezes smart boards and old TVs.
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: 'low-power', failIfMajorPerformanceCaveat: true });
  if (!gl) { console.warn('[airfone-orb] WebGL unavailable or software-rendered, showing the still'); return null; }
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : '';
  if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer)) { console.warn('[airfone-orb] software renderer, showing the still'); return null; }

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s;
    console.warn(`[airfone-orb] ${variant.key} shader failed:`, gl.getShaderInfoLog(s));
    return null;
  };
  const decls = [
    ...variant.params.map((p) => `uniform float uP_${p.key};`),
    ...variant.colors.map((c) => `uniform vec3 uC_${c.key};`),
  ].join('\n');
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, `${PRELUDE}${decls}\n${variant.frag}`);
  if (!vs || !fs) return null;
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const u = (n: string) => gl.getUniformLocation(prog, n);
  const uRes = u('uRes'), uTime = u('uTime'), uAnim = u('uAnim'), uIn = u('uInput'), uOut = u('uOutput');
  const params = variant.params.map((def) => ({ def, loc: u(`uP_${def.key}`), x: NaN, v: 0, clock: Math.random() * 100 }));
  const colors = variant.colors.map((def) => ({ def, loc: u(`uC_${def.key}`), x: [NaN, NaN, NaN], v: [0, 0, 0] }));

  let state: EngineState = 'idle';
  let live: [number | null, number | null] = [null, null];
  let vin = 0, vout = 0.3, speed = 0.4, speedV = 0, anim = 0, t = 0;
  let raf = 0, running = false, last = 0;

  // Adaptive quality. Weak devices start at a lower resolution and 30 fps.
  // If frames still run slow, resolution drops in steps; at the floor the
  // orb gives up and the page shows the still image instead.
  const weak = lowEndDevice();
  let scale = weak ? 0.6 : 1;
  let minGap = weak ? 1000 / 30 : 0;
  let lastDraw = 0, slowFrames = 0, sampled = 0, gaveUp = false;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5) * scale;
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
  };
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  ro?.observe(canvas);
  resize();

  const frame = (now: number) => {
    // At rest the orb only drifts, so 30 fps is plenty and halves the work.
    const need = state === 'idle' ? Math.max(minGap, 1000 / 30) : minGap;
    if (need && lastDraw && now - lastDraw < need - 2) { if (running) raf = requestAnimationFrame(frame); return; }
    const gap = lastDraw ? now - lastDraw : 0;
    lastDraw = now;
    if (gap) {
      sampled++;
      if (gap > (need || 1000 / 60) * 1.8) slowFrames++;
      if (sampled >= 45) {
        if (slowFrames > 15) {
          if (scale > 0.4) { scale = Math.max(0.35, scale * 0.7); minGap = 1000 / 30; resize(); }
          else if (!gaveUp) { gaveUp = true; running = false; onTooSlow?.(); return; }
        }
        sampled = 0; slowFrames = 0;
      }
    }
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
    last = now;
    t += dt;
    const [sin, sout] = synthVolumes(state, t);
    const k = 1 - Math.exp(-dt * 12);
    vin += ((live[0] ?? sin) - vin) * k;
    vout += ((live[1] ?? sout) - vout) * k;
    [speed, speedV] = spring(speed, speedV, 0.1 + (1 - (vout - 1) ** 2) * 0.9, dt);
    anim += dt * speed;
    gl.uniform1f(uTime, t * 0.5);
    gl.uniform1f(uAnim, anim);
    gl.uniform1f(uIn, vin);
    gl.uniform1f(uOut, vout);

    const preset = variant.statePresets?.[state];
    for (const p of params) {
      const target = tune[p.def.key] ?? preset?.[p.def.key] ?? p.def.default;
      if (Number.isNaN(p.x)) p.x = target;
      [p.x, p.v] = spring(p.x, p.v, target, dt);
      if (p.def.integrate) { p.clock += dt * speed * p.x; gl.uniform1f(p.loc, p.clock); }
      else gl.uniform1f(p.loc, p.x);
    }
    const pal = palette?.[state] ?? variant.stateColors?.[state];
    for (const c of colors) {
      const target = hexToRgb(pal?.[c.def.key] ?? c.def.default);
      for (let i = 0; i < 3; i++) {
        if (Number.isNaN(c.x[i])) c.x[i] = target[i];
        [c.x[i], c.v[i]] = spring(c.x[i], c.v[i], target[i], dt);
      }
      gl.uniform3f(c.loc, c.x[0], c.x[1], c.x[2]);
    }
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (running) raf = requestAnimationFrame(frame);
  };

  return {
    setState(s) { state = s; },
    setLevels(i, o) { live = [i, o]; },
    setRunning(on) {
      if (on === running) return;
      running = on;
      if (on && gaveUp) { running = false; return; }
      if (on) { last = 0; lastDraw = 0; raf = requestAnimationFrame(frame); } else cancelAnimationFrame(raf);
    },
    destroy() {
      running = false;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    },
  };
}
