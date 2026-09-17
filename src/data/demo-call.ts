export type DemoLine = {
  speaker: 'caller' | 'agent';
  start: number;
  ne: string;
  en: string;
};

export type DemoCall = {
  business: { ne: string; en: string };
  lines: DemoLine[];
};

// Ships empty until a real recording, transcript and Pathibhara Solutions'
// written permission are in hand. The demo band on the homepage only
// renders when `lines` is non-empty.
export const demoCall: DemoCall = {
  business: { ne: '', en: '' },
  lines: [],
};
