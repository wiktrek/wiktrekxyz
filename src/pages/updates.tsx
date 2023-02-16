import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>wiktrek.xyz</title>
        <meta name="description" content="wiktrek's links" />
      </Head>
      <div className="items-center justify-center text-center text-xl">
        <ul>
          <li>
            You can now delete polls{' '}
            <a
              className=""
              href="https://project.wiktrek.xyz/poll"
              rel="noreferrer"
              target="_blank"
            >
              Link
            </a>
            <p className=" text-sm">16.02.2023</p>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
