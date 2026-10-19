import type { Term } from '../types';

const term: Term = {
  slug: 'sip',
  term: 'SIP',
  full: 'Session Initiation Protocol',
  short: 'SIP is the standard way phone calls are set up and ended over the internet. It handles ringing, answering, transferring and hanging up, while the voice itself travels separately.',
  body: [
    'When you dial a number on an internet phone system, SIP is the conversation that happens before anyone says hello. One side asks to start a call, the other side rings, and when it is picked up SIP confirms the call so the audio can start flowing. When someone hangs up, SIP closes it again.',
    'SIP does not carry the voice. Once the call is set up, the sound travels as a separate stream, usually using RTP, encoded with a codec. That is why a call can connect fine but still sound choppy: the setup worked, the audio stream did not.',
    'For a business, SIP matters because it is what lets an existing phone number work with an online phone system. Your number connects through a SIP line, and from then on calls can reach an app, a browser or an AI call agent instead of one desk phone.',
  ],
  related: ['sip-trunk', 'rtp', 'voip', 'pbx'],
  product: 'phone-system',
};

export default term;
