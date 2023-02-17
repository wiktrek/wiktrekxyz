import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Update from './components/update';
import { updates } from './components/updates.json';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>wiktrek.xyz</title>
        <meta name="description" content="wiktrek's links" />
      </Head>
      <div className="items-center justify-center text-center text-xl">
        {updates.map((update) => {
          return (
            <Update
              key={update.title}
              title={update.title}
              link={update.link}
              date={update.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
