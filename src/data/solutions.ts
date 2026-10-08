export interface Solution {
  slug: string;
  name: string;
  short: string;
}

// Full page copy is added with the solutions pages.
export const solutions: Solution[] = [
  { slug: 'banks', name: 'Banks and cooperatives', short: 'Balance, branch and loan questions answered on the first ring.' },
  { slug: 'shops', name: 'Shops and showrooms', short: 'Price, stock and opening hours, every call, every day.' },
  { slug: 'clinics', name: 'Clinics and hospitals', short: 'Appointments booked and doctor schedules shared without a queue.' },
  { slug: 'isps', name: 'Internet providers', short: 'Outages explained and tickets opened while your team sleeps.' },
];
