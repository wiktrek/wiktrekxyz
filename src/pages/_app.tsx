import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './components/navbar';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>wiktrek.xyz</title>
        <meta
          name="keywords"
          content="wiktrek, wiktrek.xyz, wiktrek website, wiktor, wiktorek, xyz, wiktrek xyz, wiktor, wiktorek, wiktorek website, wiktor website, wiktrek.com, wiktrek.pl, wiktrek.org"
        />
        <meta name="description" content="wiktrek's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
