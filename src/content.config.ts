import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from './lib/blog-schema';

// Posts are Markdown files in src/content/blog. The build fails on any
// missing or wrong field. No author byline: posts are by AirFone.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

export const collections = { blog };
