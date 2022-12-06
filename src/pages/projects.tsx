import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Projects.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - wiktrek</title>
      </Head>
      <div className={styles.container}>
        <div>
          <ul className={styles.links}>
            <li>
              <a href="https://term.wiktrek.xyz">Terminal</a>
            </li>
            <li>
              <Link href="/projects/poll">
                <a>poll app</a>
              </Link>
            </li>
            <li>
              <Link href="/projects/url">Link shortener</Link>
            </li>
            <li>
              <Link href="/projects/calculator">
                <a>calculator</a>
              </Link>
            </li>
            <li>
              <Link href="/projects/rps">
                <a>rock paper scissors</a>
              </Link>
            </li>
            <li>
              <Link href="/projects/rng">
                <a>random number generator</a>
              </Link>
            </li>
            <h1>future Projects</h1>
            <li>
              {/* <Link href="/projects"> */}
              <a>tic tac toe</a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href="/projects"> */}
              <a> Wheel Spinner</a>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
