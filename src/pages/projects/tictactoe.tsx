import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/links.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tictactoe - wiktrek</title>
      </Head>
      <div className={styles.container}>
        <ul className={styles.links}>
          <li>
            <a>ig</a>
          </li>
          <li>
            <a>github</a>
          </li>
          <li>
            <a>twitch</a>
          </li>
          <li>
            <a>website</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
