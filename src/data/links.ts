// One map of how pages relate, so products, solutions and posts link to each
// other in their content, not only through the menu and footer.
import { products } from './products';
import { solutions } from './solutions';

/** Blog tags that belong to each product. */
export const productTags: Record<string, string[]> = {
  'ai-call-agent': ['ai-call-agent'],
  'ai-phone-system': ['ai-call-agent', 'phone-system'],
  'phone-system': ['phone-system'],
  'website-voice-agent': ['voice-agent', 'website'],
  'website-chatbot': ['website'],
};

/** Blog tags that belong to each solution. */
export const solutionTags: Record<string, string[]> = {
  banks: ['banks', 'ai-call-agent'],
  shops: ['website', 'ai-call-agent'],
  clinics: ['ai-call-agent'],
  isps: ['phone-system', 'ai-call-agent'],
};

export interface Link { href: string; label: string; meta?: string }

export const productLink = (slug: string): Link | null => {
  const p = products.find((x) => x.slug === slug);
  return p ? { href: `/products/${p.slug}`, label: p.name } : null;
};
export const solutionLink = (slug: string): Link | null => {
  const s = solutions.find((x) => x.slug === slug);
  return s ? { href: `/solutions/${s.slug}`, label: s.name } : null;
};

/** Industries that use a product. */
export const solutionsUsing = (product: string): Link[] =>
  solutions.filter((s) => s.products.includes(product)).map((s) => solutionLink(s.slug)!);

/** Products a post is about, from its tags. */
export const productsForTags = (tags: string[]): Link[] =>
  products.filter((p) => productTags[p.slug]?.some((t) => tags.includes(t))).map((p) => productLink(p.slug)!);

/** Industries a post is about, from its tags. */
export const solutionsForTags = (tags: string[]): Link[] =>
  solutions.filter((s) => solutionTags[s.slug]?.includes(tags[0]) || (s.slug === 'banks' && tags.includes('banks'))).map((s) => solutionLink(s.slug)!);
