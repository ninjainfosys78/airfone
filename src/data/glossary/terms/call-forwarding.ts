import type { Term } from '../types';

const term: Term = {
  slug: 'call-forwarding',
  term: 'Call forwarding',
  aka: ['Call diversion', 'Call redirect', 'Call forward', 'Forwarding calls', 'Conditional call forwarding'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is call forwarding? Meaning, types and how it works',
  description: 'Call forwarding sends calls made to one number on to another number. Meaning, types (always, busy, no answer), forwarding vs transfer and business use.',
  short: 'Call forwarding is a phone feature that sends calls made to one number on to a different number, so the call reaches you wherever you are.',
  body: [
    'When someone dials your business number, call forwarding lets the call ring on another phone: your mobile, a colleague, or a branch. The caller dials the same number as always and never needs to know it moved.',
    'It is the simplest form of [call routing](/glossary/call-routing). It is also called call diversion or call redirect.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call forwarding meaning in simple words',
      p: [
        'You set a rule on a number: "send calls to this other number". After that, every call that matches the rule is passed along. The first number stays the number customers see and use.',
      ],
    },
    {
      id: 'types',
      h: 'Types of call forwarding',
      p: ['Forwarding can apply always, or only in certain situations. The conditional kinds are often called conditional call forwarding.'],
      list: [
        'Unconditional (always): every call is forwarded, and the original phone does not ring.',
        'Busy: calls are forwarded only when the line is in use.',
        'No answer: calls are forwarded if nobody picks up within a set time.',
        'Unreachable: calls are forwarded if the phone is switched off or has no signal.',
        'Time-based: calls are forwarded only at certain hours, such as nights and holidays.',
      ],
    },
    {
      id: 'how',
      h: 'How does call forwarding work?',
      p: [
        'The phone system or the mobile network checks the rule when a call arrives. If the rule applies, it sets up a second call leg to the target number and joins the caller to it. On a business system the forwarded leg can be a mobile number, an extension, a team or a voicemail box.',
        'Forwarding to an outside number uses a second line for as long as the call lasts, so the business or the person forwarding usually pays for that leg. For a long call to a mobile, that cost adds up, which is one reason to forward to an app on the staff phone instead of to a mobile number.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'A furniture shop owner is at a supplier meeting for the afternoon. They set the shop number to forward on no answer: if the counter staff do not pick up within 20 seconds, the call rings the owner mobile. After six pm, the rule changes to send everything to voicemail. The customers dial the same shop number all day. Without the second rule, the owner mobile would ring through dinner.',
      ],
    },
    {
      id: 'vs',
      h: 'Call forwarding vs call transfer',
      p: [
        'Forwarding happens before the call is answered and follows a fixed rule. [Call transfer](/glossary/call-transfer) happens during a call, when a person who has answered hands the caller to someone else. Forwarding is automatic, transfer is a choice made in the moment.',
      ],
    },
    {
      id: 'when',
      h: 'When a business uses call forwarding',
      p: [
        'Owners forward the office number to a mobile when they travel, shops forward to the owner after closing, and branches forward overflow to head office. For anything beyond one rule, use a [ring group](/glossary/ring-group) or a [call queue](/glossary/call-queue) so the call goes to several people and does not fail when one phone is off.',
        'A risk of plain forwarding is that a call to a phone that is off ends in nowhere. Always finish the chain with [voicemail](/glossary/voicemail) or an [AI call agent](/glossary/ai-call-agent).',
      ],
    },
    {
      id: 'airfone',
      h: 'Call forwarding on AirFone',
      p: [
        'AirFone supports call redirect and forwarding, and a number can also go to voicemail, a team, a queue or the AI call agent. See the [phone system](/products/phone-system).',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common call forwarding mistakes',
      p: [
        'The usual mistake is forgetting that forwarding is still on. An owner forwards the shop number to a mobile for a trip, returns, and customers keep reaching a phone that is switched off. Set forwarding with an end date or a time rule, and check it on Monday morning.',
        'Another is forwarding in a loop, where number A forwards to B and B forwards back to A, so the caller hears silence or a busy tone. Test every rule by calling the number from outside.',
        'Last, remember that the forwarded person may not know the call is a business call. Use a short whisper message or a different ring tone where your system supports it, so they answer with the business name.',
      ],
    },
  ],
  faq: [
    { q: 'What does call forwarding mean?', a: 'It means calls to one number are sent on to another number automatically.' },
    { q: 'What is the difference between call forwarding and call diversion?', a: 'They are the same feature. Call diversion is the term more common in some countries.' },
    { q: 'Who pays for a forwarded call?', a: 'The forwarded leg is a call in its own right, so the person or business that set up forwarding usually pays for it.' },
    { q: 'What is conditional call forwarding?', a: 'It forwards calls only in set situations, such as when the line is busy, nobody answers or the phone is unreachable.' },
    { q: 'Can I forward calls only after hours?', a: 'Yes, on most business phone systems you can set time-based rules for nights and holidays.' },
  ],
  related: ['call-routing', 'call-transfer', 'ring-group', 'voicemail', 'virtual-phone-number'],
  product: 'phone-system',
};

export default term;
