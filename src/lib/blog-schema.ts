import { z } from 'astro/zod';

/**
 * Licences a blog image may carry. All allow commercial use and changes
 * (covers are cropped), so NC and ND licences are not accepted.
 */
export const LICENCES = {
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Public domain': 'https://creativecommons.org/publicdomain/mark/1.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 2.5': 'https://creativecommons.org/licenses/by/2.5/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 2.5': 'https://creativecommons.org/licenses/by-sa/2.5/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'Unsplash License': 'https://unsplash.com/license',
  'Pexels License': 'https://www.pexels.com/license/',
} as const;
export type Licence = keyof typeof LICENCES;

/**
 * Credit for one image file in src/assets/blog/<slug>/. Third-party images
 * carry title, author, source and licence (TASL) plus any changes made, as CC
 * BY and BY-SA require. Our own diagrams set `own: true`.
 * `pnpm check` fails when an image file has no credit.
 */
export const creditSchema = z.union([
  z.object({ file: z.string(), own: z.literal(true) }),
  z.object({
    file: z.string(),
    title: z.string().min(2),
    author: z.string().min(2),
    authorUrl: z.string().url().optional(),
    source: z.string().url(),
    licence: z.enum(Object.keys(LICENCES) as [Licence, ...Licence[]]),
    changes: z.string().optional(),
  }),
]);
export type Credit = z.infer<typeof creditSchema>;

export const postSchema = z.object({
  title: z.string().min(10).max(90),
  description: z.string().min(120).max(160),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(1),
  draft: z.boolean().default(false),
  pillar: z.boolean().default(false),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  coverAlt: z.string().optional(),
  /** Three to five one-line points shown in a box under the cover. */
  takeaways: z.array(z.string().min(10)).max(6).default([]),
  /** Credits for every image file the post uses, cover included. */
  credits: z.array(creditSchema).default([]),
  /** Questions answered at the end of the post; also sent as FAQPage data. */
  faq: z.array(z.object({ q: z.string().min(5), a: z.string().min(20) })).default([]),
});
