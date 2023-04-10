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
      <div className="flex h-screen items-center justify-center text-center text-7xl">
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
            <a href="https://www.youtube.com/@wiktrek" target="__blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/wiktrek1232" target="__blank">
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </li>
          <li>
            <a href="https://www.wiktrek.xyz" target="__blank">
              <FontAwesomeIcon icon={faGlobe} />
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
      </div>
    </>
  );
};

export default Home;
