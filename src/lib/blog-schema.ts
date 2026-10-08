import { z } from 'astro/zod';

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
});
