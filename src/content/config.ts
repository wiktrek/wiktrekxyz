import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  publishedAt: z.date(),
  description: z.string(),
  postSlug: z.string(),
  img: z.string().default(''),
  featured: z.boolean().default(false),
});
const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});
export type BlogSchema = z.infer<typeof blogSchema>;
export const collections = { blog: blogCollection };
