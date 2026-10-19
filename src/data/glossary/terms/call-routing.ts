import type { Term } from '../types';

const term: Term = {
  slug: 'call-routing',
  term: 'Call routing',
  aka: ['Call routing meaning', 'Inbound call routing', 'Intelligent call routing', 'Skills-based routing', 'Time-based routing'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is call routing? Meaning, types and how it works',
  description: 'Call routing sends each incoming call to the right person, team or system by rules. Meaning, types such as time-based and skills-based, and how to set it up.',
  short: 'Call routing is the way a phone system decides where each incoming call goes, based on rules such as the number dialled, the time of day, a menu choice or who is free.',
  body: [
    'A caller does not care how your phone system works. They want the right person, fast. Call routing is the set of rules that makes that happen without a receptionist transferring every call.',
    'Routing uses building blocks like the [IVR](/glossary/ivr) menu, the [call queue](/glossary/call-queue), [ring groups](/glossary/ring-group) and [voicemail](/glossary/voicemail). It runs inside your [PBX](/glossary/pbx) or cloud phone system.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Call routing meaning in simple words',
      p: [
        'Think of routing as a set of "if this, then that" rules. If the call comes in after 6 pm, send it to voicemail. If the caller pressed 2, send it to support. If the caller is a known customer, send it to their usual contact.',
      ],
    },
    {
      id: 'types',
      h: 'Types of call routing',
      p: ['These are the common kinds. Most businesses use several together.'],
      list: [
        'Time-based routing: different handling in office hours, at lunch, on holidays and at night.',
        'Menu-based routing: the caller chooses with an IVR menu.',
        'Number-based routing: each number you own goes to its own team, such as a separate branch number.',
        'Skills-based routing: calls go to the person with the right language or knowledge.',
        'Caller-based routing: known numbers go to a named person or priority line.',
        'Overflow routing: if no one answers within a limit, the call moves to another team, voicemail or an AI agent.',
      ],
    },
    {
      id: 'how',
      h: 'How does call routing work?',
      p: [
        'When a call reaches your number, the phone system looks up the rules for that number. It checks the time, any menu key the caller pressed, and who is free. It then rings a person, a group, or places the caller in a queue. If nothing answers, the next rule applies.',
        'With an [AI call agent](/glossary/ai-call-agent), the caller can state the need in words and the agent picks the route using [intent recognition](/glossary/intent-recognition), so there is no menu to learn.',
        'Good routing also has an end: every path must finish in a person, an AI agent or a voicemail, so no call falls into silence.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'A school office has one public number. The rules: during school hours, play a short menu. Option 1 rings the admissions team, option 2 the accounts desk, and option 3 the principal secretary. If nobody answers in 30 seconds, go to voicemail. Outside school hours, play a message with the opening time and take a voicemail. On a public holiday, play a different message. That is five simple rules, and no receptionist is needed to sort calls.',
      ],
    },
    {
      id: 'vs',
      h: 'Call routing vs call forwarding and call transfer',
      p: ['These are easy to mix up.'],
      list: [
        'Call routing is the rule set that decides the path of every incoming call.',
        '[Call forwarding](/glossary/call-forwarding) sends calls from one number to another number, usually one fixed rule.',
        '[Call transfer](/glossary/call-transfer) moves a call that is already answered to someone else.',
        '[ACD](/glossary/acd) picks the individual person within the team that routing chose.',
      ],
    },
    {
      id: 'when',
      h: 'When a business needs call routing',
      p: [
        'You need routing once you have more than one team, more than one branch, opening hours, or more calls than people. A clinic that wants appointments to one desk and report queries to another, or a shop with a head office number and branch numbers, benefits straight away.',
      ],
    },
    {
      id: 'airfone',
      h: 'Call routing on AirFone',
      p: [
        'On AirFone you can point a number to an IVR menu, a queue, a team that rings together, voicemail, a redirect or the [AI call agent](/products/ai-call-agent). Your existing number can come over a SIP line, so callers keep using it. See the [phone system](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What is call routing in simple words?', a: 'It is the set of rules that decides where each incoming call goes, such as to a person, a team, a queue or voicemail.' },
    { q: 'What is time-based call routing?', a: 'It sends calls to different places depending on the time or day, for example to staff in the day and voicemail at night.' },
    { q: 'What is the difference between call routing and ACD?', a: 'Routing decides which team or path a call takes. ACD picks the individual person within the team.' },
    { q: 'What is skills-based routing?', a: 'It sends the call to someone with the right language or knowledge, instead of the next free person.' },
    { q: 'Can a small business use call routing?', a: 'Yes. Even a simple rule such as sending after-hours calls to voicemail is call routing.' },
  ],
  related: ['acd', 'ivr', 'call-queue', 'ring-group', 'call-forwarding'],
  product: 'phone-system',
};

export default term;
