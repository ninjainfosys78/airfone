import type { EngineState } from './engine';

type Palette = Partial<Record<EngineState, Record<string, string>>>;

// AirFone colours for each orb, by state. Listed in DESIGN.md (orb palette).
// Dark green body, lime light; brighter while the agent speaks.
export const palettes: Record<string, Palette> = {
  'shdr-14': {
    idle: { ink: '#1B2A0A', paper: '#8BC53E' },
    thinking: { ink: '#1B2A0A', paper: '#C9D6B8' },
    speaking: { ink: '#1B2A0A', paper: '#D4ECB1' },
  },
  'shdr-21': {
    idle: { light: '#D4ECB1', shadow: '#4A6A22' },
    thinking: { light: '#C9D6B8', shadow: '#4A6A22' },
    speaking: { light: '#FFFFFF', shadow: '#8BC53E' },
  },
  'shdr-23': {
    idle: { glow: '#8BC53E', deep: '#1B2A0A' },
    thinking: { glow: '#C9D6B8', deep: '#1B2A0A' },
    speaking: { glow: '#D4ECB1', deep: '#1B2A0A' },
  },
  'shdr-29': {
    idle: { lit: '#8BC53E', wall: '#1B2A0A' },
    thinking: { lit: '#C9D6B8', wall: '#1B2A0A' },
    speaking: { lit: '#D4ECB1', wall: '#1B2A0A' },
  },
};

// Framing and light per orb: keep the whole cloud inside its square and lift
// the shadow side so it reads against the dark green stage.
export const tunes: Record<string, Record<string, number>> = {
  'shdr-21': { camDist: 5.6, shadowLift: 1.1, ambient: 0.32, edgeSoft: 0.6 },
};
