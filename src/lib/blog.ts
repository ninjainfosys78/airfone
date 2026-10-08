export const PAGE_SIZE = 10;

export interface PostLike {
  id: string;
  data: { title: string; date: Date; updated?: Date; tags: string[]; draft: boolean; pillar?: boolean };
}

/** Published posts, newest first. Drafts never reach pages, sitemap or RSS. */
export function published<T extends PostLike>(posts: T[]): T[] {
  return posts.filter((p) => !p.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function byTag<T extends PostLike>(posts: T[], tag: string): T[] {
  return published(posts).filter((p) => p.data.tags.includes(tag));
}

export function allTags<T extends PostLike>(posts: T[]): string[] {
  return [...new Set(published(posts).flatMap((p) => p.data.tags))].sort();
}

/** Page 1 is /blog; later pages are /blog/page/N. */
export const pagePath = (n: number) => (n <= 1 ? '/blog' : `/blog/page/${n}`);

export const tagLabel = (tag: string) => tag.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());

/** Posts sharing the most tags with `post`, excluding itself. */
export function related<T extends PostLike>(posts: T[], post: T, n = 3): T[] {
  return published(posts)
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, score: p.data.tags.filter((t) => post.data.tags.includes(t)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.data.date.getTime() - a.p.data.date.getTime())
    .slice(0, n)
    .map((x) => x.p);
}
