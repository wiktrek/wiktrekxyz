import type { NextPage } from 'next';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface props {
  title: string;
  date: string;
  slug: string;
  key: string;
  description: string;
}
const Post = (props: props) => {
  return (
    <>
      <div className="h-4 w-screen list-none text-center text-5xl transition-all hover:scale-105 border-collapse border border-zinc-700 rounded-lg">
        <p>
          <a>{props.title}</a>
        </p>
        <p>{props.date}</p>
        <p className="text-xl">{props.description}</p>
        <p>
          <Link href={'/blog/' + props.slug}></Link>
        </p>
      </div>
    </>
  );
};
export default Post;
