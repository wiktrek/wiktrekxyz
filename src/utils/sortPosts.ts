import type { CollectionEntry } from 'astro:content';

const getSortedPosts = (posts: CollectionEntry<'blog'>[]) =>
  posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.pubDate).getTime() / 1000) -
      Math.floor(new Date(a.data.pubDate).getTime() / 1000)
  );

export default getSortedPosts;
