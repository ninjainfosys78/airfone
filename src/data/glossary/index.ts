// Telecom and voice AI terms, one page each under /glossary. `short` is the
// one-or-two sentence definition that search engines and AI tools quote, so
// it must stand on its own. `body` explains it plainly for a business owner.
// One file per term in ./terms, picked up automatically; sorted by name.
export type { Term } from './types';
import type { Term } from './types';

const files = import.meta.glob<{ default: Term }>('./terms/*.ts', { eager: true });

// A term with a future `published` date stays out of the build until a rebuild
// on or after that day. SHOW_SCHEDULED=1 shows every term (local preview).
const today = new Date().toISOString().slice(0, 10);
const showAll = typeof process !== 'undefined' && process.env.SHOW_SCHEDULED === '1';
export const isLive = (t: Term) => showAll || !t.published || t.published <= today;

export const glossary: Term[] = Object.values(files)
  .map((m) => m.default)
  .filter(isLive)
  .sort((a, b) => a.term.localeCompare(b.term));

export const termBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
