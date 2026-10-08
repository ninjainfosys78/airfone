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

/** Minutes to read at 220 words a minute, never less than one. */
export const readMinutes = (p: Post) => Math.max(1, Math.round((p.body ?? '').split(/\s+/).filter(Boolean).length / 220));

/** The cover: the post's own image, else its generated share card. */
export const coverFor = (p: Post) => p.data.image ?? `/og/blog/${p.id}.png`;
