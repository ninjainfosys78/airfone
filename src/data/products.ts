export type DemoKind = 'call' | 'chat' | 'menu' | 'outbound';

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One line, used in lists and meta. */
  short: string;
  /** The page's h1. */
  headline: string;
  description: string;
  demo: { kind: DemoKind; clip?: string };
  problem: { heading: string; body: string[] };
  gets: string[];
  faq: Faq[];
}

export const products: Product[] = [
  {
    slug: 'ai-call-agent',
    name: 'AI call agent (inbound)',
    short: 'Answers your phone line in Nepali, day and night, and hands over to your team when it should.',
    headline: 'Your phone, answered on the first ring',
    description: 'AirFone AI call agent answers your business line in Nepali, any hour, from what you teach it, and passes callers to your team mid-call.',
    demo: { kind: 'call', clip: 'shop' },
    problem: {
      heading: 'Missed calls are missed customers',
      body: [
        'Most callers ask the same few things: price, stock, timing, location. When nobody picks up, they ring the next shop.',
        'The call agent picks up every call, answers from your own price lists and notes, and brings a person in when the caller needs one.',
      ],
    },
    gets: [
      'Answers up to 15 calls at once on your existing number',
      'Learns from your price lists, documents and notes',
      'Hands the caller to a person mid-call, with a summary',
      'Every call recorded and written out, ready to search',
      'Works on your SIP line, or a new number from us',
    ],
    faq: [
      { q: 'Do I need a new number?', a: 'No. AirFone connects to your existing line through SIP. If you want a new number, we can set one up.' },
      { q: 'What if it does not know an answer?', a: 'It says so, takes a message or passes the call to your team. It never makes up a price.' },
      { q: 'How long does setup take?', a: 'Most businesses are answering calls within a day: connect the line, add your price list and notes, test it on your own phone.' },
      { q: 'Can I listen to calls?', a: 'Yes. Every call is recorded and transcribed, and you can join a live call or take it over.' },
    ],
  },
  {
    slug: 'ai-phone-system',
    name: 'AI phone system (inbound and outbound)',
    short: 'A full business phone system with an agent that answers and calls out for you.',
    headline: 'One phone system that answers and calls back',
    description: 'AirFone AI phone system gives you extensions, queues and recording plus an agent that answers callers and makes reminder and follow-up calls.',
    demo: { kind: 'outbound', clip: 'outbound' },
    problem: {
      heading: 'Calls go both ways',
      body: [
        'Appointments need confirming, payments need reminding and orders need a follow-up call. Your team spends hours dialling.',
        'The AI phone system answers incoming calls and works through outgoing ones too: it rings, confirms, reschedules and logs the result.',
      ],
    },
    gets: [
      'Everything in the business phone system',
      'The call agent on every incoming line',
      'Reminder, confirmation and follow-up calls from a list',
      'Answers recorded against each customer',
      'A person can take over any call',
    ],
    faq: [
      { q: 'Who decides who gets called?', a: 'You do. Upload a list or connect your system, and choose the message and the times calls may go out.' },
      { q: 'What happens if the person does not answer?', a: 'AirFone tries again at the times you set and marks the result, so your team sees who still needs a call.' },
      { q: 'Can callers reach a person?', a: 'Yes. On any call the agent can hand over to your team, the same way it does for incoming calls.' },
    ],
  },
  {
    slug: 'phone-system',
    name: 'Business phone system (IP/PBX)',
    short: 'Extensions, menus, recording and queues on your existing number, with no hardware.',
    headline: 'A business phone system without the box',
    description: 'AirFone business phone system gives your team extensions, call menus, queues and recording on your existing number, from a browser or phone.',
    demo: { kind: 'menu', clip: 'phone-menu' },
    problem: {
      heading: 'The old PBX holds you back',
      body: [
        'A box in the back room, a technician for every change, and calls lost when someone is out of the office.',
        'AirFone runs your phone system online. Staff answer from the app or a browser, wherever they are, and you change menus and queues yourself.',
      ],
    },
    gets: [
      'Extensions for every person and team',
      'Call menus, queues and opening hours',
      'Recording and call history for every line',
      'Answer from the AirFone app or a browser',
      'Keep your existing number',
    ],
    faq: [
      { q: 'Do we need new phones?', a: 'No. Your team uses the AirFone app or a browser. Desk IP phones work too if you have them.' },
      { q: 'Can we keep our number?', a: 'Yes. Your existing line connects through SIP and callers notice nothing.' },
      { q: 'Can we add the AI agent later?', a: 'Yes. Turn it on for any line or menu option when you are ready.' },
    ],
  },
  {
    slug: 'website-voice-agent',
    name: 'Voice agent for your website',
    short: 'Visitors tap once and talk to an agent that knows your business.',
    headline: 'Let website visitors simply ask',
    description: 'AirFone voice agent lets visitors talk to your website. It answers from your own information and passes serious buyers to your team.',
    demo: { kind: 'call', clip: 'voice-agent' },
    problem: {
      heading: 'Visitors leave with their question',
      body: [
        'People land on your site with one question, cannot find the answer in a minute, and leave.',
        'The voice agent sits on your site. Visitors tap and speak, and it answers from your own information, then takes their number if they want to buy.',
      ],
    },
    gets: [
      'A talk button on any page, added with one line of code',
      'Answers from your own pages, prices and notes',
      'Takes names and numbers for your team',
      'Every conversation written out',
    ],
    faq: [
      { q: 'How do we add it?', a: 'Paste one line of code into your site, or ask us and we will add it with you.' },
      { q: 'Does it work on phones?', a: 'Yes. It works in any modern mobile or desktop browser, with the visitor’s permission to use the microphone.' },
      { q: 'What does it know?', a: 'Only what you give it: your pages, documents, price lists and notes. You can change them any time.' },
    ],
  },
  {
    slug: 'website-chatbot',
    name: 'Chatbot for your website',
    short: 'Answers questions from your own knowledge and passes real leads to your team.',
    headline: 'Answers on your website, any hour',
    description: 'AirFone chatbot answers website visitors from your own knowledge, any hour, and hands real leads to your team with the conversation attached.',
    demo: { kind: 'chat' },
    problem: {
      heading: 'Contact forms are slow',
      body: [
        'A visitor asks a simple question through a contact form and waits a day for a reply. By then they have bought elsewhere.',
        'The chatbot answers at once from your own information and, when someone is ready to buy, passes them to your team with the whole conversation.',
      ],
    },
    gets: [
      'A chat window on any page, added with one line of code',
      'Answers from your own pages, prices and notes',
      'Leads sent to your team with the full chat',
      'Your colours and your name on the window',
    ],
    faq: [
      { q: 'Is it the same agent as on the phone?', a: 'It uses the same knowledge, so callers and website visitors get the same answers.' },
      { q: 'Can my team reply in the chat?', a: 'Yes. Anyone on your team can join a chat and take over from the bot.' },
      { q: 'How do we add it?', a: 'Paste one line of code into your site, or ask us and we will add it with you.' },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
