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
import Navbar from '../../components/navbar';
import Post from '../../components/post';
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
      </body>
    </>
  );
};

export default Home;
