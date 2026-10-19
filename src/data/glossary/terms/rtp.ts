import type { Term } from '../types';

const term: Term = {
  slug: 'rtp',
  term: 'RTP',
  full: 'Real-time Transport Protocol',
  short: 'RTP is the protocol that carries the actual voice of an internet call, in small timed packets, once SIP has set the call up.',
  body: [
    'If SIP is the part that rings and connects a call, RTP is the part that carries what people say. Voice is encoded by a codec, split into packets a few milliseconds long, and sent continuously in both directions.',
    'Because the packets are timed, the receiving side can put them back in order and smooth out small delays. When packets arrive late or not at all, you hear gaps, echoes or a robotic sound.',
  ],
  related: ['sip', 'codec', 'voip'],
};

export default term;
