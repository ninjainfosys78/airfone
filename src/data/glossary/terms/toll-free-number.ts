import type { Term } from '../types';

const term: Term = {
  slug: 'toll-free-number',
  term: 'Toll-free number',
  aka: ['Toll free number', 'Freephone number', 'Free call number', '800 number', 'Freephone'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is a toll-free number? Meaning and how it works',
  description: 'A toll-free number lets callers ring a business for free because the business pays. Meaning, how it works, uses and toll-free vs local numbers.',
  short: 'A toll-free number, also called a freephone number, is a phone number that callers can dial at no cost to themselves, because the business receiving the call pays for it.',
  body: [
    'Many people hesitate to call a business when every minute costs them money, especially on a mobile. A toll-free number removes that cost. The caller dials, the business pays.',
    'Toll-free numbers are a type of business number. They are different from an ordinary [virtual phone number](/glossary/virtual-phone-number) or [DID](/glossary/did), which callers pay to reach at normal rates.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Toll-free number meaning in simple words',
      p: [
        '"Toll" is the charge for a call. Toll-free means the caller is not charged. In the United States these numbers start with 800, 888 and similar codes, so people say "800 number". In the UK they are called freephone, and in many countries each country has its own free-call prefix.',
      ],
    },
    {
      id: 'how',
      h: 'How does a toll-free number work?',
      p: [
        'The number is registered with a telecom operator or a service provider. When someone dials it, the network recognises it as a free call and connects it to your destination: a phone system, a mobile or a team. The cost of that call is billed to the business, per minute, at a rate set by the provider.',
        'The destination can use [call routing](/glossary/call-routing) like any other number, with menus, queues and voicemail. The network also passes the caller number to the business as [ANI](/glossary/ani), even when the caller hides their caller ID.',
      ],
    },
    {
      id: 'vs',
      h: 'Toll-free vs local number',
      p: ['The difference is who pays and what callers expect.'],
      list: [
        'Toll-free: the caller pays nothing, the business pays per minute. Good for support, bookings and complaints.',
        'Local or normal number: the caller pays the usual rate. Cheaper for the business.',
        'Toll-free numbers can work only inside a country, or only from certain networks. Check with your provider.',
      ],
    },
    {
      id: 'cost',
      h: 'What a toll-free number costs a business',
      p: [
        'You pay for every minute callers use, so a busy line adds up. For example, if 2,000 callers a month each talk for 4 minutes, that is 8,000 minutes billed to you. Multiply by your per-minute rate to see the bill. A good [IVR](/glossary/ivr) and quick answers keep calls short, and a call queue with a time limit stops long waits from running up minutes.',
      ],
    },
    {
      id: 'when',
      h: 'When a business needs a toll-free number',
      p: [
        'Consider one if callers are often long-distance, calls are long, or customers watch their credit closely. Support lines for banks, insurers and delivery firms use them to make it easy to ring.',
        'The cost can climb fast, so track total minutes monthly and decide whether the extra calls justify the bill.',
      ],
    },
    {
      id: 'nepal',
      h: 'Toll-free numbers in Nepal',
      p: [
        'Nepal Telecom has offered toll-free service under the 1660 code, where the organisation that subscribes pays for the calls received. Nepal telecom news reported in 2022 that the regulator planned to move domestic toll-free numbers to a 1810 prefix, and we could not confirm whether that change is in force. Ask Nepal Telecom or your phone provider for the current prefix, fees and how to connect it to your phone system before you plan around one.',
      ],
    },
    {
      id: 'setup',
      h: 'How to set up a toll-free number',
      p: [
        'The steps are the same in most countries. Apply to a telecom operator or reseller, choose a number, and say where calls should be delivered, such as your phone system. Set a routing plan, a greeting and a maximum wait, then test from a mobile on each network. Ask in writing what per-minute rate applies to calls from mobile networks, since that is often higher than from landlines.',
        'Also decide what happens when the line is busy. A toll-free caller who hits a busy tone has paid nothing but also gets nothing, and the brand takes the blame.',
      ],
    },
  ],
  faq: [
    { q: 'What does toll-free mean?', a: 'It means the caller is not charged for the call. The business that owns the number pays.' },
    { q: 'Is a toll-free number the same as a freephone number?', a: 'Yes. Freephone is the UK and international name for toll-free.' },
    { q: 'Who pays for a toll-free call?', a: 'The business that owns the number pays, usually per minute.' },
    { q: 'Can I forward a toll-free number to my mobile?', a: 'Usually yes, and you pay for each forwarded minute.' },
    { q: 'Does Nepal have toll-free numbers?', a: 'Yes. Nepal Telecom has offered them, historically under the 1660 code. Confirm the current prefix and terms with the operator.' },
  ],
  related: ['virtual-phone-number', 'did', 'call-routing', 'ivr', 'call-forwarding'],
  product: 'phone-system',
};

export default term;
