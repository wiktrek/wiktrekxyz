import type { NextPage } from 'next';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
const Navbar: NextPage = () => {
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
      <div className="text-center text-5xl">
        <ul>
          <li>
            <Link href="/#about">about</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
