import type { Term } from '../types';

const term: Term = {
  slug: 'call-park',
  term: 'Call park',
  aka: ['Call parking', 'Park a call', 'Parking slot', 'Parked call', 'Call pickup'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'What is call park? Meaning and how call parking works',
  description: 'Call park puts a live call on hold in a slot so anyone can pick it up from another phone. Meaning, how it works, call park vs hold and vs transfer.',
  short: 'Call park is a phone feature that puts a live call on hold in a numbered slot, so a colleague can pick it up from any other phone by dialling that slot.',
  body: [
    'A shop assistant takes a call for the manager, who is somewhere in the building. Instead of walking over, the assistant parks the call and announces "call on 701". The manager picks it up from the nearest phone.',
    'It is useful wherever people move around: warehouses, clinics, hotels, and teams working from phones and laptops.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call park meaning in simple words',
      p: [
        'Parking is like leaving a coat on a numbered hook. The call waits in a slot, such as 701, with the caller hearing hold music. Anyone who knows the slot number can take the call from any phone on the system.',
      ],
    },
    {
      id: 'how',
      h: 'How does call park work?',
      p: ['The steps are short.'],
      list: [
        'You are on a call and press park, or transfer the call to the parking slot.',
        'The system tells you the slot number, for example 701, or you pick a fixed parking extension.',
        'You tell the colleague, by shouting, a message or a page.',
        'The colleague dials the slot number (or a pickup code) from their phone.',
        'The call connects to them. If nobody picks it up in time, most systems ring the original person back.',
      ],
    },
    {
      id: 'retrieve',
      h: 'How to retrieve a parked call',
      p: [
        'The exact code depends on the phone system. Many systems read out a slot number when you park, and the colleague dials that number or a star code followed by it. Others use a fixed parking extension, and the colleague dials it to get the call. Check the codes in your own system, since they are not standard.',
      ],
    },
    {
      id: 'vs-hold',
      h: 'Call park vs hold',
      p: [
        'A held call stays on your own phone, and only the phone that placed it on hold can resume it. A parked call lives on the system, so any phone can pick it up and you can walk away or take another call.',
      ],
    },
    {
      id: 'vs-transfer',
      h: 'Call park vs call transfer',
      p: [
        'With a [call transfer](/glossary/call-transfer) you send the call to a specific person or extension, and it rings there. With call park you do not need to know where the person is. You leave the call and tell them to take it. Park is handy when you cannot reach the person at their desk, or when any free person can take the call.',
      ],
    },
    {
      id: 'when',
      h: 'When to use call park',
      p: [
        'Use it when staff do not sit at a fixed desk, when the person wanted is likely away from their phone, or when you want any free person to take the call. A hotel front desk can park a guest call for the housekeeping supervisor on the floor. A warehouse can park a supplier call for whoever is at the dock.',
        'Keep the parking time short, since callers hear hold music while they wait and may hang up. Parking works inside a [PBX](/glossary/pbx) or cloud phone system, and the ring-back setting protects callers if nobody takes the call.',
      ],
    },
    {
      id: 'airfone',
      h: 'Call park on AirFone',
      p: [
        'AirFone has call park, and staff can use it from the app or a browser, so a parked call can be picked up wherever the colleague is. See the [phone system](/products/phone-system).',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common call park mistakes',
      p: [
        'The most common problem is a parked call that nobody takes. The caller hears music, the person who parked it forgets, and the caller hangs up. Turn on ring-back and train staff to say the slot number clearly, out loud or in a team chat.',
        'Another is parking when a simple transfer would do. If you know exactly who should take the call and they are at their desk, transfer it. Park is for the cases where you do not know where the person is.',
        'Finally, keep a small number of slots and show their numbers on a card by each phone, so staff do not guess.',
      ],
    },
  ],
  faq: [
    { q: 'What is call park?', a: 'It is a feature that holds a live call in a numbered slot so another person can pick it up from any phone.' },
    { q: 'What is the difference between call park and hold?', a: 'Hold keeps the call on your phone. Park places it on the system, so any phone can take it.' },
    { q: 'How do I pick up a parked call?', a: 'Dial the slot number or parking extension the system gave you. The exact code depends on your phone system.' },
    { q: 'What happens if nobody picks up a parked call?', a: 'On most systems the call rings back to the person who parked it after a set time.' },
    { q: 'Do I need a special phone for call park?', a: 'No. It works on the phone system, so any extension or app on it can use it.' },
  ],
  related: ['call-transfer', 'voicemail', 'call-forwarding', 'pbx', 'call-routing'],
  product: 'phone-system',
};

export default term;
