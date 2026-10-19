import type { Term } from '../types';

const term: Term = {
  slug: 'ring-group',
  term: 'Ring group',
  aka: ['Hunt group', 'Ring group meaning', 'Simultaneous ring', 'Team ring', 'Call group'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is a ring group? Meaning, hunt group and ring group vs queue',
  description: 'A ring group rings several phones at once or in turn when a number is called. Meaning, ring group vs hunt group, ring group vs call queue and when to use one.',
  short: 'A ring group is a set of phones that ring together, or one after another, when a single number is called, so the first person to pick up takes the call.',
  body: [
    'Instead of one phone ringing at one desk, a ring group lets the whole sales team, the front desk or the on-call engineers ring at once. Whoever is free answers, and the rest stop ringing.',
    'It is one of the simplest ways to make sure calls get answered. It is part of [call routing](/glossary/call-routing) in a business phone system, and it is not the same as a [call queue](/glossary/call-queue), as explained below.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Ring group meaning in simple words',
      p: [
        'A ring group is a list of people or phones attached to one number. When a call comes in, the system rings the list. The call goes to the first person who answers.',
        'Some systems call this a hunt group, a call group or simultaneous ring. AirFone calls it a team.',
      ],
    },
    {
      id: 'how',
      h: 'How does a ring group work?',
      p: ['The steps are short.'],
      list: [
        'A call arrives on the number, directly or after a menu choice.',
        'The system rings the members according to the ring strategy.',
        'The first member to answer takes the call and the other phones stop ringing.',
        'If nobody answers within the ring time, the call moves to the next step, such as voicemail, a queue or another team.',
      ],
    },
    {
      id: 'strategies',
      h: 'Ring group strategies',
      p: ['A ring group can ring its members in different ways.'],
      list: [
        'Ring all (simultaneous): every phone rings at the same time.',
        'Sequential (hunt): phones ring one by one in a set order, moving to the next if there is no answer.',
        'Round robin: each new call starts with the next person in the list, to share the load.',
      ],
    },
    {
      id: 'vs-hunt',
      h: 'Ring group vs hunt group',
      p: [
        'The two names overlap, and many phone vendors say they are interchangeable. Where a distinction is made, "hunt group" means the call hunts through levels of destinations until someone answers, and "ring group" means everyone rings at once. If you see either name, check the ring strategy setting to learn what it really does.',
      ],
    },
    {
      id: 'vs-queue',
      h: 'Ring group vs call queue',
      p: [
        'A ring group rings the phones now. Callers hear ringing, not hold music, and they are not held in order. If all are busy or nobody answers, the call goes on to its next step. Members do not have to log in.',
        'A call queue holds callers in line and hands each to the next free person. Members usually log in and out, and the system can report on waits and abandoned calls. Use a ring group for small teams with few calls, and a queue when callers regularly arrive faster than people can answer. A ring group is often placed after a queue as an overflow.',
      ],
    },
    {
      id: 'when',
      h: 'When to use a ring group',
      p: [
        'Use a ring group when a small team shares one number and it does not matter who answers: a shop counter with three staff, a clinic reception, or an after-hours emergency list. It is also useful when one person might be out of the office and you want a mobile and a desk phone to ring together.',
        'Set a ring time. After 20 to 30 seconds with no answer the call should move on to [voicemail](/glossary/voicemail) or another path, so callers do not ring forever. Keep the group small. If six phones ring at once, people assume someone else will pick up.',
      ],
    },
    {
      id: 'airfone',
      h: 'Ring groups on AirFone',
      p: [
        'AirFone teams ring together, and staff answer from the app or a browser. A team can be one step in a longer route, with voicemail or the [AI call agent](/glossary/ai-call-agent) after it. See the [phone system](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What is a ring group on a phone system?', a: 'It is a set of phones that ring when one number is called. The first person to answer takes the call.' },
    { q: 'Is a ring group the same as a hunt group?', a: 'Often yes. Many vendors treat the names as interchangeable. Where they differ, a hunt group tries destinations in order and a ring group rings all at once.' },
    { q: 'What is the difference between a ring group and a call queue?', a: 'A ring group rings phones immediately and does not hold callers in order. A call queue holds callers in line until someone is free.' },
    { q: 'How many people can be in a ring group?', a: 'It depends on the phone system. Small groups work best, since ringing many phones at once can confuse who should answer.' },
    { q: 'What happens if nobody answers a ring group?', a: 'The call moves to the next step you set, such as voicemail, a queue or another team.' },
  ],
  related: ['call-queue', 'call-routing', 'acd', 'ivr', 'voicemail'],
  product: 'phone-system',
};

export default term;
