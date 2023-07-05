import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
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
  }),
});

export const collections = { blog };
