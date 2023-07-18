import { defineCollection } from 'astro:content';
import { z } from 'zod';
function new_date(date: string): Date {
  var date_components = date.split('.');
  var day = Number(date_components[0]);
  var month = Number(date_components[1]);
  var year = Number(date_components[2]);
  return new Date(year, month, day);
}
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  postSlug: z.string(),
  featured: z.boolean().optional(),
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new_date(val as string)),
  updatedDate: z
    .string()
    .optional()
    .transform((str) => (str ? new_date(str) : undefined)),
  img: z.string().optional(),
});
const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = { blog };
export type BlogSchema = z.infer<typeof blogSchema>;
