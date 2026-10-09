// Public prices (MRP) from the AirFone price sheet
// (airfone-brochures pdf/pricing/customers/airfone-mrp.pdf), in Nepali rupees
// per month. The site shows each MRP crossed out next to the offer price.
// Only MRP lives here; base rates and reseller tiers are internal.

/** Launch offer: share off the monthly MRP. Set to 0 to show MRP only. */
export const OFFER_OFF = 0.25;

/** Offer price: MRP less the offer, rounded to the nearest rupee amount ending in 9. */
export const offerPrice = (mrp: number) => Math.max(9, Math.round((mrp * (1 - OFFER_OFF) + 1) / 10) * 10 - 1);

export const rs = (n: number) => `Rs ${n.toLocaleString('en-IN')}`;

export interface Tier {
  name: 'Starter' | 'Growth' | 'Scale';
  /** Monthly MRP in rupees; absent means priced on request. */
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
    product: 'ai-phone-system',
    tiers: [
      { name: 'Starter', mrp: 16399, includes: '15 calls at once, 5 users, 1,500 outbound minutes, unlimited inbound' },
      { name: 'Growth', mrp: 23999, includes: '15 calls at once, 15 users, 3,000 outbound minutes, unlimited inbound' },
      { name: 'Scale', mrp: 34199, from: true, includes: '15+ calls at once, 40+ users, built around your volume' },
    ],
    extra: 'Extra use Rs 7.49 to 8.49 per minute · Rs 379 per extra user',
  },
  {
    product: 'ai-call-agent',
    tiers: [
      { name: 'Starter', mrp: 15199, includes: '15 calls at once, 5 team users' },
      { name: 'Growth', mrp: 22799, includes: '15 calls at once, 15 team users' },
      { name: 'Scale', includes: '15+ calls at once, 40+ team users' },
    ],
    extra: 'Extra use Rs 7.49 to 8.49 per minute · Rs 379 per extra user',
  },
  {
    product: 'phone-system',
    tiers: [
      { name: 'Starter', mrp: 10099, includes: '15 calls at once, 5 users, 1,500 outbound minutes, unlimited inbound' },
      { name: 'Growth', mrp: 15199, includes: '15 calls at once, 15 users' },
      { name: 'Scale', mrp: 22799, from: true, includes: '15+ calls at once, 40+ users' },
    ],
    extra: 'Rs 379 per extra user · Standard carrier call rates',
  },
  {
    product: 'website-voice-agent',
    tiers: [
      { name: 'Starter', mrp: 1299, includes: '100 minutes' },
      { name: 'Growth', mrp: 2499, includes: '250 minutes' },
      { name: 'Scale', mrp: 6299, includes: '1,000 minutes' },
    ],
    extra: 'Extra use Rs 6.49 per minute',
  },
  {
    product: 'website-chatbot',
    tiers: [
      { name: 'Starter', mrp: 1299, includes: '250 chats' },
      { name: 'Growth', mrp: 2499, includes: '600 chats' },
      { name: 'Scale', mrp: 6299, includes: '2,500 chats' },
    ],
    extra: 'Extra use Rs 2.49 per chat',
  },
];
