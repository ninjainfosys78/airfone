// Plans shown on /pricing. Prices are not public yet: leave `price` unset and
// the card shows "Priced for your call volume". When prices are set, fill
// `price` (e.g. "Rs 4,999") and `per` (e.g. "a month"), and drop noindex on
// the page.
export interface Plan {
  id: string;
  name: string;
  /** Who it is for, one line. */
  for: string;
  price?: string;
  per?: string;
  cta: { label: string; href: string };
  /** Plan this one builds on, shown as "Everything in X, plus". */
  builds?: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'phone',
    name: 'Phone system',
    for: 'For teams that want a modern phone line without the box.',
    cta: { label: 'Get a quote', href: '/demo' },
    features: [
      'Keep your existing number',
      'Extensions for every person and team',
      'Call menus, queues and opening hours',
      'Answer from the app or a browser',
      'Recording and call history',
    ],
  },
  {
    id: 'agent',
    name: 'AI call agent',
    for: 'For businesses that want every call answered, day and night.',
    cta: { label: 'Book a demo', href: '/demo' },
    builds: 'Phone system',
    features: [
      'An agent that answers in Nepali',
      'Learns from your price lists and notes',
      'Up to 15 calls at the same time',
      'Hands callers to your team mid-call',
      'Every call written out and searchable',
    ],
    featured: true,
  },
  {
    id: 'scale',
    name: 'AI phone system',
    for: 'For banks, hospitals and providers with high volume or many branches.',
    cta: { label: 'Talk to sales', href: '/contact' },
    builds: 'AI call agent',
    features: [
      'Reminder and follow-up calls from a list',
      'Several branches on one system',
      'More calls at the same time',
      'Help connecting your own systems',
      'A named contact for your account',
    ],
  },
];

/** Extras any plan can add. */
export const addons = [
  { name: 'Website voice agent', href: '/products/website-voice-agent', what: 'Visitors tap and ask your website out loud.' },
  { name: 'Website chatbot', href: '/products/website-chatbot', what: 'Answers typed questions on your site, any hour.' },
  { name: 'New phone numbers', href: '/contact', what: 'Extra numbers for branches or campaigns.' },
];

export const pricingFaq = [
  { q: 'Why are there no prices here?', a: 'Prices depend on how many calls you get and how many people answer them. Tell us a little about your business and we send you a price, usually the same working day.' },
  { q: 'What decides the price?', a: 'Mainly three things: how many calls the AI agent answers, how many calls can run at the same time, and how many people on your team use the phone system.' },
  { q: 'Do I need to buy phones or hardware?', a: 'No. Your team uses the AirFone app or a browser, and your existing number connects through a SIP line. Desk IP phones work too if you already have them.' },
  { q: 'Can I start small?', a: 'Yes. Many businesses start with the phone system, or with the AI agent only after hours, and add more once they have listened to a few weeks of calls.' },
  { q: 'Can I hear it before I decide?', a: 'Yes. Ring 970-269-7774 to talk to the agent, or book a demo and we set it up on a test number with your own prices.' },
];
