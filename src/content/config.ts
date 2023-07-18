import { defineCollection, z } from 'astro:content';
function new_date(date: string): Date {
  var date_components = date.split('.');
  var day = Number(date_components[0]);
  var month = Number(date_components[1]);
  var year = Number(date_components[2]);
  return new Date(year, month, day);
}

const blogSchema = z.object({
  title: z.string(),
  publishedAt: z
    .string()
    .or(z.date())
    .transform((val) => new_date(val as string)),
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
