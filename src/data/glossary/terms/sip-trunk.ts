import type { Term } from '../types';

const term: Term = {
  slug: 'sip-trunk',
  term: 'SIP trunk',
  short: 'A SIP trunk is a connection from a phone provider that carries a business\'s calls over the internet instead of physical phone lines. One trunk can carry many calls at once.',
  body: [
    'Traditional business lines were physical: one copper pair, one call at a time, so a business that needed five simultaneous calls needed five lines. A SIP trunk replaces those wires with an internet connection that carries as many calls as it is set up for.',
    'The trunk connects your phone numbers to your phone system. Calls to your number arrive through it, and outgoing calls leave through it. Because it is software, adding capacity or another number does not need a technician to run a new cable.',
    'When people say "connect your existing number through a SIP line", this is usually what they mean: your provider delivers your number as a SIP trunk to a system such as a cloud PBX.',
  ],
  related: ['sip', 'did', 'pbx', 'voip'],
  product: 'phone-system',
};

export default term;
