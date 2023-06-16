'use server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPost = (slug: any) => {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), `posts/${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(fileContents);
  console.log(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
