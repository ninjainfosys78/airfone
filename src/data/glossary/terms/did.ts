import type { Term } from '../types';

const term: Term = {
  slug: 'did',
  term: 'DID',
  full: 'Direct Inward Dialing',
  short: 'A DID is a phone number that rings straight through to a particular person, team or system inside a business phone system, without going through a main reception line.',
  body: [
    'With only one main number, every call lands at reception and has to be transferred. DIDs give extra numbers that route directly: a number that goes straight to the support team, one for a branch, or one printed on a single advert.',
    'On an online phone system, a DID is just another number pointed at a destination you choose. That makes it easy to give a branch its own number while keeping it on the same system as head office, or to track how many calls a campaign brought in.',
  ],
  related: ['sip-trunk', 'pbx', 'ivr'],
  product: 'phone-system',
};

export default term;
