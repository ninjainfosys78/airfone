import type { Term } from '../types';

const term: Term = {
  slug: 'auto-attendant',
  term: 'Auto attendant',
  aka: ['Automated attendant', 'Virtual receptionist', 'Digital receptionist', 'Phone menu', 'Auto-attendant'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'What is an auto attendant? Meaning and auto attendant vs IVR',
  description: 'An auto attendant answers calls with a recorded menu and routes callers to the right person. Meaning, auto attendant vs IVR vs AI call agent, and set up tips.',
  short: 'An auto attendant is a phone feature that answers incoming calls with a recorded greeting and a menu, and sends each caller to the right person or team.',
  body: [
    'Instead of a receptionist asking who the caller wants, the auto attendant does it. It greets the caller, offers choices such as "press 1 for sales, 2 for support", and connects the call.',
    'It is a basic form of the [IVR](/glossary/ivr). The two names overlap, and what separates them is explained below.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Auto attendant meaning in simple words',
      p: [
        'An auto attendant is a robot receptionist with a fixed script. It speaks a recorded greeting, listens for a key press ([DTMF](/glossary/dtmf)) or an extension, and passes the call on. A basic one does not understand free speech.',
        'It is also called a virtual receptionist, digital receptionist or phone menu.',
      ],
    },
    {
      id: 'how',
      h: 'How does an auto attendant work?',
      p: ['A typical flow looks like this.'],
      list: [
        'The call arrives and the greeting plays.',
        'The caller presses a digit, or dials an extension.',
        'The system sends the call to a person, a team, a [call queue](/glossary/call-queue) or voicemail.',
        'If the caller presses nothing, the menu repeats once and then sends the call to a default, such as the front desk.',
        'Outside opening hours a different greeting plays and calls go to [voicemail](/glossary/voicemail).',
      ],
    },
    {
      id: 'vs-ivr',
      h: 'Auto attendant vs IVR',
      p: [
        'People use the terms for the same thing. If you want a distinction: an auto attendant mainly routes callers to a person, while an IVR can also look up information or take actions, such as reading out an order status. Many systems use one name for both.',
      ],
    },
    {
      id: 'vs-ai',
      h: 'Auto attendant vs AI call agent',
      p: [
        'A menu forces callers to listen and pick. An [AI call agent](/glossary/ai-call-agent) lets the caller just say what they want in their own words, answers questions from the business information, and hands over to a person when needed. In effect it can act as the auto attendant with no menu at all. For the trade-offs, read [IVR vs AI call agent](/blog/ivr-vs-ai-call-agent).',
      ],
    },
    {
      id: 'write',
      h: 'How to write a good auto attendant script',
      p: [
        'A good script is short enough to hear in under 20 seconds. For example: "Thank you for calling Sunrise Clinic. For appointments, press 1. For reports, press 2. For the pharmacy, press 3. To speak to someone, stay on the line." That is four choices, the most common first, and a way out.',
      ],
    },
    {
      id: 'tips',
      h: 'Tips for a good auto attendant',
      p: ['Callers dislike long menus.'],
      list: [
        'Keep it to four or five options.',
        'Put the most common choice first.',
        'Let callers reach a person by pressing 0 or waiting.',
        'Record the greeting clearly in the language your callers use.',
        'Test it by calling from a mobile on NTC and Ncell.',
        'Check call records for menu keys nobody presses, and remove them.',
      ],
    },
    {
      id: 'airfone',
      h: 'Auto attendant on AirFone',
      p: [
        'AirFone provides IVR menus that send callers to queues, teams or voicemail, and an AI call agent that answers in Nepali or English. See the [phone system](/products/phone-system).',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common auto attendant mistakes',
      p: [
        'The most common mistake is a menu built around how the company is organised instead of what callers want. A caller does not know that "accounts receivable" is the desk that takes payments. Name each option by the caller need, such as "to pay a bill".',
        'Another is a dead end: a menu that loops forever, or an option that rings a desk nobody answers. Every option must end in a person, a queue, an AI call agent or voicemail, and you should call each option yourself after every change.',
      ],
    },
  ],
  faq: [
    { q: 'What is an auto attendant?', a: 'It is an automated receptionist that greets callers with a menu and routes them to the right person.' },
    { q: 'Is an auto attendant the same as an IVR?', a: 'They are very close. Many people use both names for a phone menu. An IVR can also look up information.' },
    { q: 'How many menu options should I have?', a: 'Four or five is a good limit. More than that and callers forget the choices.' },
    { q: 'Does an auto attendant understand speech?', a: 'A basic one does not. It reacts to key presses. An AI call agent understands speech.' },
    { q: 'Can an AI call agent replace an auto attendant?', a: 'Yes. It can take the caller request in words and route or answer it, with a person as the fallback.' },
  ],
  related: ['ivr', 'dtmf', 'ai-call-agent', 'call-routing', 'voicemail'],
  product: 'ai-phone-system',
};

export default term;
