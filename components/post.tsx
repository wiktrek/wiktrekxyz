import type { NextPage } from 'next';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import Image from 'next/image';
interface props {
  title: string;
  date: string;
  img: string;
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
        <Image
          src={props.img}
          alt={props.title}
          className="mx-auto object-cover py-4 md:h-48 xl:h-52"
          height={40}
          width={80}
        />
        <p className="text-xl">{props.description}</p>
      </div>
    </>
  );
};
export default Post;
