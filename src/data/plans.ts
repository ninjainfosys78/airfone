// Plans shown on /pricing. Prices are not public yet: leave `price` unset and
// the card shows "Priced for your call volume". When prices are set, fill
// `price` and `per` (e.g. "a month").
export interface Plan {
  id: string;
  name: string;
  /** Who it is for, one line. */
  for: string;
  /** What you get, in a few words; the card's big line. */
  pitch: string;
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
    for: 'A business phone line, no hardware.',
    pitch: 'Your number on every desk and phone',
    cta: { label: 'Get a quote', href: '/demo' },
    features: ['Keep your number', 'Extensions and call menus', 'Every call recorded'],
  },
  {
    id: 'agent',
    name: 'AI call agent',
    for: 'Every call answered, day and night.',
    pitch: 'Every call answered in Nepali, 24/7',
    cta: { label: 'Book a demo', href: '/demo' },
    builds: 'Phone system',
    features: ['Answers in Nepali, 24/7', '15 calls at once', 'Hands over to your team'],
    featured: true,
  },
  {
    id: 'scale',
    name: 'AI phone system',
    for: 'For high volume and many branches.',
    pitch: 'Calls in and out, across branches',
    cta: { label: 'Talk to sales', href: '/contact' },
    builds: 'AI call agent',
    features: ['Outbound reminder calls', 'Multiple branches', 'A named account contact'],
  },
];

/** Extras any plan can add. */
export const addons = [
  { name: 'Website voice agent', href: '/products/website-voice-agent', what: 'Visitors tap and ask your website out loud.' },
  { name: 'Website chatbot', href: '/products/website-chatbot', what: 'Answers typed questions on your site, any hour.' },
  { name: 'New phone numbers', href: '/contact', what: 'Extra numbers for branches or campaigns.' },
];

export const pricingFaq = [
  { q: 'Are prices per month?', a: 'Yes. Every plan is a monthly price in Nepali rupees. Extra use beyond what a plan includes is charged at the rate shown under each product.' },
  { q: 'Which plan should I choose?', a: 'Start from how many people answer calls and how many calls arrive at once. Most small businesses start on Starter and move up when they need more users or minutes.' },
  { q: 'Need a different mix?', a: 'Tell us what you need. Scale plans and combinations of products are priced around your call volume.' },
  { q: 'Do I need to buy phones or hardware?', a: 'No. Your team uses the AirFone app or a browser, and your existing number connects through a SIP line. Desk IP phones work too if you already have them.' },
  { q: 'Can I start small?', a: 'Yes. Many businesses start with the phone system, or with the AI agent only after hours, and add more once they have listened to a few weeks of calls.' },
  { q: 'Can I hear it before I decide?', a: 'Yes. Ring 970-269-7774 to talk to the agent, or book a demo and we set it up on a test number with your own prices.' },
];
