import { getCollection, type CollectionEntry } from 'astro:content';
import { published } from './blog';

export type Post = CollectionEntry<'blog'>;

/**
 * Posts for pages. Drafts show on the dev server (marked) so the owner can
 * review them; the production build leaves them out everywhere.
 */
export async function posts(): Promise<Post[]> {
  const all = await getCollection('blog');
  if (import.meta.env.DEV) return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return published(all);
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
