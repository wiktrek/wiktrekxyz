import { defineCollection, z } from 'astro:content';
const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  postSlug: z.string(),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).default(['others']),
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  updatedDate: z
    .string()
    .optional()
    .transform((str) => (str ? new Date(str) : undefined)),
  img: z.string().optional(),
});
const blog = defineCollection({
  schema: blogSchema,
});

export const collections = { blog };
export type BlogSchema = z.infer<typeof blogSchema>;
