import type { Faq } from './products';

export interface Solution {
  slug: string;
  name: string;
  short: string;
  headline: string;
  description: string;
  clip: string;
  /** What callers ask, and what AirFone does with each. */
  calls: { q: string; a: string }[];
  does: { h: string; p: string }[];
  products: string[];
  faq: Faq[];
}

export const solutions: Solution[] = [
  {
    slug: 'banks',
    name: 'Banks and cooperatives',
    short: 'Rates, branches and loan questions answered on the first ring.',
    headline: 'Every member call answered',
    description: 'AirFone answers bank and cooperative calls in Nepali: deposit rates, branch hours and loan steps, and passes account questions to your staff.',
    clip: 'bank',
    calls: [
      { q: 'What is the fixed deposit rate this month?', a: 'Reads it from your current rate sheet' },
      { q: 'Which branch is open on Saturday?', a: 'Answers from your branch hours' },
      { q: 'What papers do I need for a home loan?', a: 'Lists the documents from your loan notes' },
      { q: 'My card is blocked. Who do I talk to?', a: 'Transfers to your staff with a summary' },
    ],
    does: [
      { h: 'Answers rate and product questions', p: 'From the rate sheet and product notes you upload. Change the sheet and the next caller hears the new rate.' },
      { h: 'Sends account questions to staff', p: 'Anything about a customer’s own account goes to your team, with a summary of what the caller asked.' },
      { h: 'Handles the month-end rush', p: 'Up to 15 calls at once, so members are not stuck on a busy line on salary day.' },
    ],
    products: ['ai-call-agent', 'ai-phone-system'],
    faq: [
      { q: 'Does the agent see account balances?', a: 'No. It answers general questions from what you upload. Account questions go to your staff.' },
      { q: 'Can calls be recorded for compliance?', a: 'Yes. Every call is recorded and transcribed, and you control who can listen.' },
      { q: 'Can members reach a branch directly?', a: 'Yes. Add each branch to the menu and the agent or the caller can choose it.' },
    ],
  },
  {
    slug: 'shops',
    name: 'Shops and showrooms',
    short: 'Price, stock and opening hours, every call, every day.',
    headline: 'Never miss a buyer on the phone',
    description: 'AirFone answers shop and showroom calls in Nepali: price, stock, warranty and opening hours, and holds items for callers by name.',
    clip: 'shop',
    calls: [
      { q: 'Do you have this model in stock?', a: 'Checks your price list and stock' },
      { q: 'What is the price, and is there a warranty?', a: 'Quotes the price and warranty you set' },
      { q: 'Until what time are you open?', a: 'Gives today’s opening hours' },
      { q: 'Can you keep one for me?', a: 'Takes a name and tells your counter' },
    ],
    does: [
      { h: 'Knows your stock and prices', p: 'Upload your price list or connect your sheet. The agent answers from it on every call.' },
      { h: 'Holds items for callers', p: 'Takes the caller’s name and number and tells your counter what to keep aside.' },
      { h: 'Answers while you serve', p: 'Your staff help customers in the shop while AirFone takes the phone.' },
    ],
    products: ['ai-call-agent', 'website-chatbot'],
    faq: [
      { q: 'What if a price changes?', a: 'Change it in your price list and the next caller hears the new price.' },
      { q: 'Can it answer at night?', a: 'Yes. It answers every hour of every day, and tells callers when you open.' },
      { q: 'Does it work for several branches?', a: 'Yes. Callers are told which branch has the item and how to get there.' },
    ],
  },
  {
    slug: 'clinics',
    name: 'Clinics and hospitals',
    short: 'Appointments booked and doctor schedules shared without a queue.',
    headline: 'Patients booked without the wait',
    description: 'AirFone books clinic appointments in Nepali, shares doctor schedules and reminds patients the day before, so your front desk can look after people.',
    clip: 'clinic',
    calls: [
      { q: 'When does the skin doctor sit?', a: 'Reads the doctor’s schedule' },
      { q: 'Can I book for Wednesday morning?', a: 'Books the slot and confirms by SMS' },
      { q: 'Are you open on Saturday?', a: 'Gives your opening hours' },
      { q: 'Can I move my appointment?', a: 'Moves it and confirms by SMS' },
    ],
    does: [
      { h: 'Shares doctor schedules', p: 'From the schedule you keep in AirFone or a shared sheet, always current.' },
      { h: 'Books and moves appointments', p: 'Takes the patient’s name and time and confirms by SMS.' },
      { h: 'Calls to remind', p: 'Rings patients the day before and records who is coming, so fewer slots go empty.' },
    ],
    products: ['ai-call-agent', 'ai-phone-system'],
    faq: [
      { q: 'Does it give medical advice?', a: 'No. It books, reschedules and answers practical questions. Medical questions go to your staff.' },
      { q: 'Can patients still reach the front desk?', a: 'Yes. The agent hands the call over whenever the patient asks or needs it.' },
      { q: 'What about emergencies?', a: 'The agent tells callers with an emergency to call the ambulance on 102 or come straight in, and alerts your staff.' },
    ],
  },
  {
    slug: 'isps',
    name: 'Internet providers',
    short: 'Outages explained and tickets opened while your team sleeps.',
    headline: 'Outage calls handled in minutes',
    description: 'AirFone answers internet provider support calls in Nepali, explains known outages, opens tickets and calls customers back when service returns.',
    clip: 'isp',
    calls: [
      { q: 'My internet is down. Is there a problem in my area?', a: 'Tells callers about the outage you posted' },
      { q: 'When will it be fixed?', a: 'Gives the expected fix time' },
      { q: 'Can someone call me back?', a: 'Opens a ticket for your team' },
      { q: 'How do I pay my bill?', a: 'Explains your payment options' },
    ],
    does: [
      { h: 'Explains known outages', p: 'Post an outage once in AirFone and every caller from that area hears it, with the expected fix time.' },
      { h: 'Opens tickets', p: 'Takes the customer’s details and opens a ticket your team can pick up.' },
      { h: 'Calls back when it is fixed', p: 'Rings and texts each customer as service returns, so they do not have to call again.' },
    ],
    products: ['ai-call-agent', 'ai-phone-system'],
    faq: [
      { q: 'Can it connect to our ticket system?', a: 'Yes. AirFone can send tickets to your system, or your team can work them in AirFone.' },
      { q: 'What happens during a big outage?', a: 'Up to 15 calls are answered at once and each caller hears the same update, so your lines stay open.' },
      { q: 'Can it take payments?', a: 'It explains how to pay and can send a payment link by SMS. It does not take card details on the call.' },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
