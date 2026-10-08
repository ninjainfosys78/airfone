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
  /** Search title: what people type, e.g. "AI call agent in Nepal". */
  seoTitle: string;
  /** The page's h1. */
  headline: string;
  description: string;
  demo: { kind: DemoKind; clip?: string };
  problem: { heading: string; body: string[] };
  gets: string[];
  /** How it works, in order: what you do and what it does. */
  how: { h: string; p: string }[];
  /** Plain facts: label and value. */
  specs: [string, string][];
  faq: Faq[];
}

export const products: Product[] = [
  {
    slug: 'ai-call-agent',
    name: 'AI Call Agent',
    short: 'Answers your phone line in Nepali, day and night, and hands over to your team when it should.',
    seoTitle: 'AI Call Agent in Nepal that answers in Nepali',
    headline: 'AI agent that answers your business line in Nepali',
    description: 'AirFone is an AI call agent for businesses in Nepal. It answers your phone in Nepali, day and night, and hands callers to your team mid-call.',
    demo: { kind: 'call', clip: 'shop' },
    problem: {
      heading: 'Missed calls are missed customers',
      body: [
        'Most callers ask the same few things: price, stock, timing, location. When nobody picks up, they ring the next shop.',
        'The call agent picks up every call, answers from your own price lists and notes, and brings a person in when the caller needs one.',
      ],
    },
    how: [
      { h: 'Connect your line', p: 'Your existing number through a SIP line, or a new number from us.' },
      { h: 'Teach it your business', p: 'Upload price lists, documents and notes. It answers only from these.' },
      { h: 'Set the handover rules', p: 'Choose which calls go straight to a person, such as refunds or complaints.' },
      { h: 'Read every call', p: 'Each call is recorded and written out, and you can join or take over live.' },
    ],
    specs: [['Languages', 'Nepali and English'], ['Calls at once', 'Up to 15'], ['Hours', 'Day and night'], ['Handover', 'To your team mid-call, with a summary'], ['Setup', 'Usually within a day']],
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
    name: 'AI Phone System',
    short: 'A full business phone system with an agent that answers and calls out for you.',
    seoTitle: 'AI Phone System in Nepal for inbound and outbound calls',
    headline: 'A phone system that answers calls and makes them',
    description: 'AirFone AI phone system for Nepal: extensions, queues and recording, plus an AI agent that answers callers and makes reminder and follow-up calls.',
    demo: { kind: 'outbound', clip: 'outbound' },
    problem: {
      heading: 'Calls go both ways',
      body: [
        'Appointments need confirming, payments need reminding and orders need a follow-up call. Your team spends hours dialling.',
        'The AI phone system answers incoming calls and works through outgoing ones too: it rings, confirms, reschedules and logs the result.',
      ],
    },
    how: [
      { h: 'Set up the phone system', p: 'Extensions, menus and queues for your team, on your existing number.' },
      { h: 'Put the agent on incoming calls', p: 'It answers callers and passes them to the right person.' },
      { h: 'Upload a call list', p: 'Reminders, confirmations or follow-ups, with the times calls may go out.' },
      { h: 'See the results', p: 'Each answer is saved against the customer, and missed calls are retried.' },
    ],
    specs: [['Direction', 'Incoming and outgoing'], ['Outgoing calls', 'From a list you upload'], ['Retries', 'At the times you set'], ['Handover', 'A person can take over any call'], ['Includes', 'Everything in the Cloud PBX']],
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
    name: 'Cloud PBX',
    short: 'Extensions, menus, recording and queues on your existing number, with no hardware.',
    seoTitle: 'Cloud PBX in Nepal: business phone system, no hardware',
    headline: 'Your business phone system, online',
    description: 'AirFone cloud PBX for businesses in Nepal: extensions, call menus, queues and recording on your existing number, from a browser or the app.',
    demo: { kind: 'menu', clip: 'phone-menu' },
    problem: {
      heading: 'The old PBX holds you back',
      body: [
        'A box in the back room, a technician for every change, and calls lost when someone is out of the office.',
        'AirFone runs your phone system online. Staff answer from the app or a browser, wherever they are, and you change menus and queues yourself.',
      ],
    },
    how: [
      { h: 'Move your number', p: 'Your existing line connects through SIP. Callers notice nothing.' },
      { h: 'Add your team', p: 'Each person gets an extension in the app or a browser.' },
      { h: 'Build menus and queues', p: 'Set opening hours, call menus and who answers what, yourself.' },
      { h: 'Review calls', p: 'Every call is recorded with its history on each line.' },
    ],
    specs: [['Hardware', 'None needed'], ['Answer from', 'AirFone app, browser or IP desk phone'], ['Your number', 'Kept'], ['Recording', 'Every call'], ['AI agent', 'Can be added to any line']],
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
    name: 'Website Voice Agent',
    short: 'Visitors tap once and talk to an agent that knows your business.',
    seoTitle: 'AI Voice Agent for websites in Nepal',
    headline: 'A voice agent for your website',
    description: 'AirFone voice agent lets visitors to your website in Nepal talk to it in Nepali or English. It answers from your information and passes buyers on.',
    demo: { kind: 'call', clip: 'voice-agent' },
    problem: {
      heading: 'Visitors leave with their question',
      body: [
        'People land on your site with one question, cannot find the answer in a minute, and leave.',
        'The voice agent sits on your site. Visitors tap and speak, and it answers from your own information, then takes their number if they want to buy.',
      ],
    },
    how: [
      { h: 'Add one line of code', p: 'Paste it into your site, or we add it with you.' },
      { h: 'Give it your information', p: 'Your pages, price lists and notes, the same as the phone agent.' },
      { h: 'Visitors tap and talk', p: 'It answers out loud and takes a name and number from buyers.' },
      { h: 'Leads reach your team', p: 'Each one arrives with the full conversation written out.' },
    ],
    specs: [['Install', 'One line of code'], ['Languages', 'Nepali and English'], ['Works in', 'Any modern mobile or desktop browser'], ['Knows', 'Only what you give it'], ['Leads', 'Sent to your team with the conversation']],
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
    name: 'Website Chatbot',
    short: 'Answers questions from your own knowledge and passes real leads to your team.',
    seoTitle: 'AI Chatbot for websites in Nepal',
    headline: 'A chatbot that answers from your own information',
    description: 'AirFone AI chatbot answers website visitors in Nepal from your own knowledge, any hour, and hands real leads to your team with the chat attached.',
    demo: { kind: 'chat' },
    problem: {
      heading: 'Contact forms are slow',
      body: [
        'A visitor asks a simple question through a contact form and waits a day for a reply. By then they have bought elsewhere.',
        'The chatbot answers at once from your own information and, when someone is ready to buy, passes them to your team with the whole conversation.',
      ],
    },
    how: [
      { h: 'Add one line of code', p: 'A chat window appears on your pages.' },
      { h: 'Give it your information', p: 'Your pages, price lists and notes.' },
      { h: 'It answers at once', p: 'Any hour, from your own information only.' },
      { h: 'Your team can step in', p: 'Anyone can join a chat, and leads arrive with the full chat.' },
    ],
    specs: [['Install', 'One line of code'], ['Hours', 'Any hour'], ['Look', 'Your colours and your name'], ['Knowledge', 'Shared with your phone agent'], ['Handover', 'Your team can join any chat']],
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
