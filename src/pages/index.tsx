import type { NextPage } from 'next';
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
import Navbar from './components/navbar';
import Post from './components/post';
// import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - wiktrek.xyz</title>
        <meta
          name="description"
          content="wiktrek's links, projects - wiktrek.xyz,"
        />
        <meta name="author" content="wiktrek"></meta>
        <meta
          name="keywords"
          content="wiktrek, wiktrekxyz,dev,wiktrek.xyz, wiktor, wiktorek, wiktrek1232, Wiktorek, website, links, programmer, 
          projects, poll app, link shortener, random number generator, rng, random number, calculator, calc, todo, rock paper scissors, rps, 
          portfolio, next.js, type script, poll,link shortener,link shortener google,link shortener free,link shortener custom"
        />
      </Head>
      <body className="scroll-smooth scrollbar-none">
        <Navbar />
        <div>
          <div></div>
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
                <a
                  href="https://github.com/wiktrek/wiktrekxyz"
                  target="__blank"
                >
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
          {/* <section id="about">
            <div className="h-64 text-center text-7xl">
              <a>I'm a programmer from Poland</a>
            </div>

          </section> */}
          <section id="posts">
            <div>
              <Post></Post>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default Home;
