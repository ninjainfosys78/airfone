import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts are Markdown files in src/content/blog. The build fails on any
// missing or wrong field. No author byline: posts are by AirFone.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(10).max(90),
    description: z.string().min(120).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(1),
    draft: z.boolean().default(false),
    pillar: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
