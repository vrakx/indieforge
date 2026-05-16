import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default('TechDirectory Team'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
