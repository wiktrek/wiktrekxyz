'use client';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import getPost from '../../../helpers/getPost';
import { serialize } from 'next-mdx-remote/serialize';
export default async function Page({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // if (!post) {
  //   return <a>err</a>;
  // }
  // const mdxSource = await serialize(post.content);
  // return (
  //   <a>
  //     <MDXRemote {...mdxSource} />
  //   </a>
  // );
  console.log(post);
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return { props: { post } };
}
