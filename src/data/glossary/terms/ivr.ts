import type { Term } from '../types';

const term: Term = {
  slug: 'ivr',
  term: 'IVR',
  full: 'Interactive Voice Response',
  short: 'IVR is an automated phone menu that lets callers choose options by pressing keys or speaking, such as "press one for sales", before they are routed to the right place.',
  body: [
    'An IVR answers a call with a recorded message and a list of choices. The caller presses a key or says a word, and the system sends them to a department, a queue or another recording.',
    'A short IVR works well when callers already know what they want and calls split cleanly, such as sales or support. Long menus with many levels are where callers get lost, wait, and often hang up.',
    'An AI call agent is a different approach: the caller simply says what they need in their own words and gets an answer or the right person, with no menu to work through. Many businesses use both, a short menu for clear choices and an agent behind it.',
  ],
  related: ['pbx', 'call-queue', 'ai-call-agent', 'did'],
  product: 'ai-call-agent',
};

export default term;
