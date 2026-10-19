import type { Term } from '../types';

const term: Term = {
  slug: 'acd',
  term: 'ACD',
  full: 'Automatic Call Distribution',
  aka: ['Automatic call distributor', 'Automatic call distribution system', 'ACD system', 'ACD phone system', 'ACD full form'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'What is ACD? Automatic call distribution meaning',
  description: 'ACD (automatic call distribution) hands each incoming call to the best available person by rules. Meaning, how it works, routing methods and ACD vs IVR.',
  short: 'ACD (automatic call distribution) is the phone system feature that hands each incoming call to a suitable free person using rules you set, instead of leaving it to whoever picks up first.',
  body: [
    'When ten callers ring at once and four people can answer, someone has to decide who gets which call. ACD is that decision-maker. It looks at who is free, who has been free longest and which team the caller asked for, then rings the right person. If nobody is free, it keeps the caller waiting in line.',
    'ACD sits inside a business phone system, also called a [PBX](/glossary/pbx). It works with a [call queue](/glossary/call-queue), where callers wait, and often with an [IVR](/glossary/ivr) menu that sorts callers before they reach the queue. The full form, automatic call distribution, is also used for the system itself, called an automatic call distributor.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'ACD meaning in simple words',
      p: [
        'ACD stands for automatic call distribution. "Automatic" means no receptionist passes calls around by hand. "Distribution" means the calls are shared across a group of staff by a rule.',
        'In daily talk, people say "the ACD" for the part of the phone system that shares calls between agents. It is the engine behind any support line, booking desk or sales line where more than one person answers the same number.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How does ACD work?',
      p: [
        'ACD follows the same steps on every phone system, from a small cloud setup to a large call centre.',
      ],
      list: [
        'A call arrives and the system decides which group it belongs to, based on the number dialled, the time of day or a menu choice.',
        'The ACD checks which members of that group are free and logged in.',
        'If someone is free, the call rings them. If not, the caller joins the queue and hears a message.',
        'When a member becomes free, the ACD gives them the next waiting caller.',
        'If the wait runs past your limit, an overflow rule moves the call to voicemail, another team or an AI agent.',
        'The system records each step, which feeds reports on wait time, abandoned calls and calls handled per person.',
      ],
    },
    {
      id: 'strategies',
      h: 'ACD routing methods',
      p: [
        'The rule for picking the person is called the distribution or routing method. The common ones are:',
      ],
      list: [
        'Longest idle: the call goes to the person who has been free the longest. This spreads work fairly when call lengths vary.',
        'Round robin: calls go to each member in turn.',
        'Fixed order: the call tries the same people in the same order every time, so a senior person is rung first.',
        'Ring all: every free member rings at once and the first to answer takes the call.',
        'Skills based: the call goes to someone with the right skill or language, such as Nepali, English or Hindi.',
        'Priority: calls from important numbers or menu choices are served first.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'A pharmacy chain in Kathmandu has one order number and four people answering it. At 10 am on a Monday, six calls arrive within two minutes. Without ACD, the first four phones ring and the last two callers get a busy tone. With ACD using longest idle, the first four calls go to the four people who have been free longest, the other two callers hear a short message and wait, and each is connected the moment someone finishes. Nobody is lost, and nobody on the team has to decide who takes what.',
      ],
    },
    {
      id: 'vs',
      h: 'ACD vs IVR vs call queue vs call routing',
      p: [
        'These parts of the same job are often mixed up.',
      ],
      list: [
        '[IVR](/glossary/ivr): the menu that asks the caller what they need ("press 1 for sales"). It sorts calls.',
        '[Call queue](/glossary/call-queue): the waiting line where callers stay until someone is free.',
        '[Call routing](/glossary/call-routing): the wider set of rules that sends a call to a person, team, queue or voicemail.',
        'ACD: the logic that picks the individual person and hands the call over, and keeps the records.',
      ],
    },
    {
      id: 'when',
      h: 'When does a business need ACD?',
      p: [
        'You need ACD when several people answer the same number and calls can arrive faster than they are picked up. Signs include staff fighting over who takes the call, one person getting all the long calls, or callers hearing a busy tone while a colleague sits idle.',
        'In Nepal, clinics, banks, cooperatives, ISPs and shops see this on salary days and around festivals. Even a team of three gains from fair, automatic sharing of calls. To check what busy hours cost you today, see [how to measure missed calls](/blog/measure-missed-calls-business).',
      ],
    },
    {
      id: 'ai',
      h: 'ACD and AI call agents',
      p: [
        'An [AI call agent](/glossary/ai-call-agent) can sit in front of ACD and answer the simple calls itself, so people only receive the calls that need them. It can also be the overflow when the queue is full. Either way, the ACD still decides who among the staff takes the handed-over call.',
      ],
    },
    {
      id: 'airfone',
      h: 'ACD on AirFone',
      p: [
        'AirFone shares queue calls by longest idle or round robin, with a maximum wait and an overflow to voicemail, another queue, a team or an AI call agent. Staff answer from the app or a browser. Details are on the [phone system page](/products/phone-system).',
      ],
    },
  ],
  faq: [
    { q: 'What does ACD stand for?', a: 'ACD stands for automatic call distribution. It is the feature that shares incoming calls among a group of staff by rules.' },
    { q: 'What is the difference between ACD and IVR?', a: 'An IVR is a menu that asks the caller what they want. ACD picks which person gets the call. Many systems use both, with the IVR first and ACD second.' },
    { q: 'Is ACD only for call centres?', a: 'No. Any business where more than one person answers the same number can use it, including small shops and clinics.' },
    { q: 'What is skills based routing?', a: 'It sends a call to a person with the right skill, such as a language or a product, instead of just the next free person.' },
    { q: 'Is ACD the same as a call queue?', a: 'Nearly. The queue is where callers wait. ACD is the rule that hands them to staff and records what happened.' },
  ],
  related: ['call-queue', 'ivr', 'call-routing', 'pbx', 'ring-group'],
  product: 'phone-system',
};

export default term;
