import type { Term } from '../types';

const term: Term = {
  slug: 'codec',
  term: 'Codec',
  short: 'A codec is the method used to compress voice into data for an internet call and decode it at the other end. The codec affects call quality and how much bandwidth a call uses.',
  body: [
    'Sound on an internet call is chopped into small pieces, compressed, sent across the network and rebuilt on the other side. The codec is the rulebook for that compression.',
    'Some codecs keep more detail and sound clearer but use more data. Others squeeze harder and cope better with weak connections. Opus is a modern codec that adapts to the connection, while G.711 is an older, widely supported one used across traditional phone networks.',
    'When a call sounds robotic or clipped, the cause is usually packet loss or a congested connection rather than the codec itself, but the codec decides how gracefully a call degrades when the network struggles.',
  ],
  related: ['rtp', 'voip', 'sip'],
};

export default term;
