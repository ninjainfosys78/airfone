// Public prices from the AirFone price sheet of 13 October 2026, in Nepali
// rupees per month. A Dashain offer of 15% off runs on top (OFFER_OFF). Base rates and reseller tiers are internal and do not live
// here.

/** Share off the monthly price for a launch offer. 0 shows the price as listed. */
export const OFFER_OFF = 0.15;

/** Price after the offer, rounded to a rupee amount ending in 9. With no offer it returns the listed price. */
export const offerPrice = (mrp: number) => Math.max(9, Math.round((mrp * (1 - OFFER_OFF) + 1) / 10) * 10 - 1);

export const rs = (n: number) => `Rs ${n.toLocaleString('en-IN')}`;

export interface Tier {
  name: 'Starter' | 'Growth';
  /** Monthly price in rupees; absent means priced on request. */
  mrp?: number;
}

/** One line of the plan table: what each tier (Starter, Growth) includes. */
export interface Feature {
  label: string;
  values: [string, string];
}

export interface PriceRow {
  product: string; // product slug
  tiers: [Tier, Tier];
  features: Feature[];
  /** What extra use costs. */
  extra: string;
}

export const priceRows: PriceRow[] = [
  {
    product: 'website-chatbot',
    tiers: [{ name: 'Starter', mrp: 899 }, { name: 'Growth', mrp: 1999 }],
    features: [{ label: 'Free chat tokens a month', values: ['2.5 million', '6 million'] }],
    extra: 'After the free tokens: Rs 60 per 1M input tokens, Rs 500 per 1M output tokens',
  },
  {
    product: 'website-voice-agent',
    tiers: [{ name: 'Starter', mrp: 899 }, { name: 'Growth', mrp: 1999 }],
    features: [{ label: 'AI voice minutes', values: ['100', '250'] }],
    extra: 'Extra AI voice Rs 6.50 per minute',
  },
  {
    product: 'ai-call-agent',
    tiers: [{ name: 'Starter', mrp: 9999 }, { name: 'Growth', mrp: 22999 }],
    features: [
      { label: 'AI call minutes', values: ['1,000', '3,000'] },
      { label: 'Calls at once', values: ['15', '15'] },
      { label: 'User extensions', values: ['5', '10'] },
    ],
    extra: 'Extra AI voice Rs 6.50 per minute, Rs 199 per extra user, Rs 350 per extra concurrent session',
  },
  {
    product: 'phone-system',
    tiers: [{ name: 'Starter', mrp: 999 }, { name: 'Growth' }],
    features: [
      { label: 'User extensions', values: ['5', '10'] },
      { label: 'Calls at once', values: ['15', '15'] },
    ],
    extra: 'Rs 199 per extra user, Rs 350 per extra concurrent session',
  },
  {
    product: 'ai-phone-system',
    tiers: [{ name: 'Starter', mrp: 9999 }, { name: 'Growth', mrp: 22999 }],
    features: [
      { label: 'AI calling minutes', values: ['850', '2,500'] },
      { label: 'Outbound minutes', values: ['1,000', '2,500'] },
      { label: 'Calls at once', values: ['15', '15'] },
      { label: 'User extensions', values: ['5', '10'] },
    ],
    extra: 'Extra AI voice Rs 6.50 per minute, bulk call Rs 2.50 per minute, Rs 199 per extra user, Rs 350 per extra concurrent session',
  },
];

/** Pay-as-you-go charges that any plan can add to. */
export const addOnRates: { name: string; price: string; unit: string }[] = [
  { name: 'Bulk SMS', price: 'Rs 1', unit: 'per SMS' },
  { name: 'Bulk call', price: 'Rs 2.50', unit: 'per minute' },
  { name: 'AI voice', price: 'Rs 6.50', unit: 'per minute' },
  { name: 'AI chat, input tokens', price: 'Rs 60', unit: 'per 1M tokens' },
  { name: 'AI chat, output tokens', price: 'Rs 500', unit: 'per 1M tokens' },
  { name: 'Extension', price: 'Rs 199', unit: 'per user' },
  { name: 'Concurrent session', price: 'Rs 350', unit: 'per session' },
];

/** One-time charges. */
export const oneTimeCharges: { name: string; price: string; unit: string }[] = [
  { name: 'NTC SIP setup', price: 'Rs 18,999', unit: 'one time' },
  { name: 'Ncell SIP setup', price: 'Rs 6,500', unit: 'one time' },
  { name: 'Chatbot or voice agent integration support', price: 'Rs 999', unit: 'per system' },
];
