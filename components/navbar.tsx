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
  let links = [
    ' ',
    // 'links',
    // 'about'
  ];
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
      <div className="h-4 w-screen list-none text-center text-5xl">
        {links.map((link) => {
          return (
            <Link href={'/#' + link} key={link}>
              <button className="px-6 py-2">{link}</button>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Navbar;
