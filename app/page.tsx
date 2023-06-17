import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitch,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { faCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Post from '../components/post';
import { getPosts } from './blog/helper';
export default async function Home({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('a ' + posts);
  return (
    <div>
      <section
        id="links"
        className="flex h-screen items-center justify-center space-y-5 text-center text-8xl"
      >
        <ul className="text-white">
          <li>
            <a href="https://www.instagram.com/wiktrekxyz" target="__blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/wiktrek" target="__blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/499665258038820866"
              target="__blank"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>

          <li>
            <a href="https://www.twitch.tv/wiktrek1232" target="__blank">
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@wiktrek" target="__blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://github.com/wiktrek/wiktrekxyz" target="__blank">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </li>
          <li>
            <a href="https://project.wiktrek.xyz/" target="__blank">
              Projects
            </a>
          </li>
        </ul>
      </section>
      <section id="posts"></section>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<{
  posts: string;
}> = async () => {
  const posts = await getPosts();
  console.log(posts);
  return { props: { posts } };
};
