import type { Term } from '../types';

const term: Term = {
  slug: 'voip',
  term: 'VoIP',
  full: 'Voice over Internet Protocol',
  short: 'VoIP means making phone calls over an internet connection instead of traditional phone lines. Business phone systems, SIP trunks and app-based calling all use VoIP.',
  body: [
    'VoIP is the umbrella term. Any call that travels as data over the internet, whether it starts on an app, a desk IP phone or an online phone system, is a VoIP call. SIP, RTP and codecs are the pieces that make it work.',
    'For businesses the main gain is flexibility. A number is no longer tied to a wire in one building, so calls can reach staff wherever they are, be recorded, queued and answered by an AI call agent.',
  ],
  related: ['sip', 'rtp', 'codec', 'sip-trunk'],
  product: 'phone-system',
};

export default term;
