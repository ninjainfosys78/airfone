import { describe, expect, it } from 'vitest';
import { allTags, byTag, pagePath, published, related, tagLabel } from '../src/lib/blog';

const post = (id: string, date: string, tags: string[], draft = false) => ({ id, data: { title: id, date: new Date(date), tags, draft } });
const posts = [
  post('a', '2026-10-01', ['calls', 'shops']),
  post('b', '2026-10-05', ['calls']),
  post('c', '2026-10-07', ['banks'], true),
  post('d', '2026-09-01', ['shops']),
];

describe('blog helpers', () => {
  it('drops drafts and sorts newest first', () => expect(published(posts).map((p) => p.id)).toEqual(['b', 'a', 'd']));
  it('filters by tag without drafts', () => expect(byTag(posts, 'banks')).toEqual([]));
  it('a tag with one post works', () => expect(byTag([post('x', '2026-01-01', ['solo'])], 'solo')).toHaveLength(1));
  it('lists tags from published posts only', () => expect(allTags(posts)).toEqual(['calls', 'shops']));
  it('page paths', () => {
    expect(pagePath(1)).toBe('/blog');
    expect(pagePath(2)).toBe('/blog/page/2');
  });
  it('labels tags in sentence case', () => expect(tagLabel('call-centres')).toBe('Call centres'));
  it('related posts share tags and exclude itself', () => expect(related(posts, posts[0]).map((p) => p.id)).toEqual(['b', 'd']));
});

import { postSchema } from '../src/lib/blog-schema';

describe('post schema', () => {
  const ok = { title: 'A useful title here', description: 'x'.repeat(130), date: '2026-10-01', tags: ['guides'] };
  it('accepts a complete post and defaults draft to false', () => expect(postSchema.parse(ok).draft).toBe(false));
  it.each(['title', 'description', 'date', 'tags'])('rejects a post without %s', (k) => {
    const bad: Record<string, unknown> = { ...ok };
    delete bad[k];
    expect(postSchema.safeParse(bad).success).toBe(false);
  });
  it('rejects a short description', () => expect(postSchema.safeParse({ ...ok, description: 'too short' }).success).toBe(false));
  it('rejects tags with spaces or capitals', () => expect(postSchema.safeParse({ ...ok, tags: ['Call Centres'] }).success).toBe(false));
});
