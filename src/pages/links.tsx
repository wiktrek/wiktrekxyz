import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/links.module.scss';
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
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Links - wiktrek</title>
      </Head>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <a href="https://www.instagram.com/wiktrek1232" target="__blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/wiktrek" target="__blank">
              <FontAwesomeIcon icon={faGithub} />
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
            <a href="https://www.youtube.com/channel/UCd67pmblUu1gf5yhItABbqA">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
