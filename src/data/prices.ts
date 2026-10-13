// Public prices from the AirFone price sheet of 13 October 2026, in Nepali
// rupees per month. These are the prices customers pay: there is no launch
// offer on top. Base rates and reseller tiers are internal and do not live
// here.

/** Share off the monthly price for a launch offer. 0 shows the price as listed. */
export const OFFER_OFF = 0;

/** Price after the offer, rounded to a rupee amount ending in 9. With no offer it returns the listed price. */
export const offerPrice = (mrp: number) => Math.max(9, Math.round((mrp * (1 - OFFER_OFF) + 1) / 10) * 10 - 1);

export const rs = (n: number) => `Rs ${n.toLocaleString('en-IN')}`;

export interface Tier {
  name: 'Starter' | 'Growth';
  /** Monthly price in rupees; absent means priced on request. */
  mrp?: number;
  /** Shown after the price, e.g. "+" for "from". */
  from?: boolean;
  includes: string;
}

export interface PriceRow {
  product: string; // product slug
  tiers: Tier[];
  extra: string;
}

export const priceRows: PriceRow[] = [
  {
    product: 'ai-call-agent',
    tiers: [
      { name: 'Starter', mrp: 9999, includes: '1,000 AI call minutes, 15 calls at once, 5 user extensions' },
      { name: 'Growth', mrp: 22999, includes: '3,000 AI call minutes, 15 calls at once, 10 user extensions' },
    ],
    extra: 'Extra AI voice Rs 6.50 per minute · Rs 199 per extra user · Rs 350 per extra concurrent session',
  },
  {
    product: 'ai-phone-system',
    tiers: [
      { name: 'Starter', mrp: 9999, includes: '850 AI calling minutes, 1,000 outbound minutes, 15 calls at once, 5 user extensions' },
      { name: 'Growth', mrp: 22999, includes: '2,500 AI calling minutes, 2,500 outbound minutes, 15 calls at once, 10 user extensions' },
    ],
    extra: 'Extra AI voice Rs 6.50 per minute · Bulk call Rs 2.50 per minute · Rs 199 per extra user · Rs 350 per extra concurrent session',
  },
  {
    product: 'phone-system',
    tiers: [
      { name: 'Starter', mrp: 999, includes: '5 user extensions, 15 calls at once' },
      { name: 'Growth', includes: '10 user extensions, 15 calls at once' },
    ],
    extra: 'Rs 199 per extra user · Rs 350 per extra concurrent session',
  },
  {
    product: 'website-voice-agent',
    tiers: [
      { name: 'Starter', mrp: 899, includes: '100 AI voice minutes' },
      { name: 'Growth', mrp: 1999, includes: '250 AI voice minutes' },
    ],
    extra: 'Extra AI voice Rs 6.50 per minute',
  },
  {
    product: 'website-chatbot',
    tiers: [
      { name: 'Starter', mrp: 899, includes: '250 chat sessions' },
      { name: 'Growth', mrp: 1999, includes: '670 chat sessions' },
    ],
    extra: 'Extra chat sessions Rs 2.50 each',
  },
];

/** Pay-as-you-go charges that any plan can add to. */
export const addOnRates: { name: string; price: string; unit: string }[] = [
  { name: 'Bulk SMS', price: 'Rs 1', unit: 'per SMS' },
  { name: 'Bulk call', price: 'Rs 2.50', unit: 'per minute' },
  { name: 'AI voice', price: 'Rs 6.50', unit: 'per minute' },
  { name: 'Chat session', price: 'Rs 2.50', unit: 'per session' },
  { name: 'Extension', price: 'Rs 199', unit: 'per user' },
  { name: 'Concurrent session', price: 'Rs 350', unit: 'per session' },
];

/** One-time charges. */
export const oneTimeCharges: { name: string; price: string; unit: string }[] = [
  { name: 'NTC SIP setup', price: 'Rs 18,999', unit: 'one time' },
  { name: 'Ncell SIP setup', price: 'Rs 6,500', unit: 'one time' },
  { name: 'Chatbot or voice agent integration support', price: 'Rs 999', unit: 'per system' },
];
