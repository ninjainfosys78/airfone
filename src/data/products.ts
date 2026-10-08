export type DemoKind = 'call' | 'chat' | 'menu' | 'outbound';

export interface Product {
  slug: string;
  name: string;
  short: string;
}

// Full page copy is added with the product pages.
export const products: Product[] = [
  { slug: 'ai-call-agent', name: 'AI call agent (inbound)', short: 'Answers your phone line in Nepali, day and night, and hands over to your team when it should.' },
  { slug: 'ai-phone-system', name: 'AI phone system (inbound and outbound)', short: 'A full business phone system with an agent that answers and calls out for you.' },
  { slug: 'phone-system', name: 'Business phone system (IP/PBX)', short: 'Extensions, menus, recording and queues on your existing number, with no hardware.' },
  { slug: 'website-voice-agent', name: 'Voice agent for your website', short: 'Visitors tap once and talk to an agent that knows your business.' },
  { slug: 'website-chatbot', name: 'Chatbot for your website', short: 'Answers questions from your own knowledge and passes real leads to your team.' },
];
