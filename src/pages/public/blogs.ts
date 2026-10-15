import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import sortPosts from "~/utils/sortPosts";

// Served on demand so the response gets a proper JSON content type
// (a prerendered extensionless file wouldn't).
export const prerender = false;

// Dates are parsed as local midnight, so toISOString() would shift them a day back.
const formatDate = (date: Date) =>
  [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

export const GET: APIRoute = async ({ site }) => {
  const posts = sortPosts(await getCollection("blog")).map(({ id, data }) => ({
    title: data.title,
    slug: id,
    url: new URL(`/blog/${id}`, site).href,
    description: data.description,
    publishedAt: formatDate(data.publishedAt),
  }));

  return new Response(JSON.stringify(posts, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
