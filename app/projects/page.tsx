import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
  return (
    <>
      <Head>
        <title>Projects - wiktrek.xyz</title>
        <meta name="description" content="wiktrek's projects" />
      </Head>
      <div className=" items-center justify-center text-center">
        <div>
          <ul className="">
            <li>
              <Link href="/projects/poll">
                <a>poll app</a>
              </Link>
            </li>
            <li>
              <Link href="/projects/url">Link shortener</Link>
            </li>
            <li>
              <a href="https://svelte.wiktrek.xyz">svelte</a>
            </li>
            <li>
              <a href="https://rust.wiktrek.xyz">rust api</a>
            </li>
            <li>
              <a href="https://github.com/wiktrek/wiktrekbot">wiktrekbot</a>
            </li>
            <li>
              <a href="https://github.com/wiktrek/rust">rust</a>
            </li>
            <li>
              <a href="https://github.com/wiktrek/electron">electron app</a>
            </li>
            <li>
              <a href="https://info.wiktrek.xyz">info</a>
            </li>
            <li>
              <a href="https://term.wiktrek.xyz">Terminal</a>
            </li>
            <li>
              <a href="https://three.wiktrek.xyz">three.js</a>
            </li>

            <li>
              <Link href="/projects/pokemon">pokemon</Link>
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
            <li>
              <Link href="/projects/mousetrailer">
                <a>mouse trailer</a>
              </Link>
            </li>
            <h1>future Projects</h1>

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
}
