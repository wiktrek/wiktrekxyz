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
              <a href="https:://project.wiktrek.xyz/projects/poll">poll app</a>
            </li>
            <li>
              <a href="https:://project.wiktrek.xyz/projects/url">
                Link shortener
              </a>
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
              <a href="https:://project.wiktrek.xyz/projects/pokemon">
                pokemon
              </a>
            </li>
            <li>
              <a href="https:://project.wiktrek.xyz/projects/calculator">
                calculator
              </a>
            </li>
            <li>
              <a href="https:://project.wiktrek.xyz/projects/rps">
                rock paper scissors
              </a>
            </li>
            <li>
              <a href="https:://project.wiktrek.xyz/projects/rng">
                random number generator
              </a>
            </li>
            <li>
              <a href="https:://project.wiktrek.xyz/projects/mousetrailer">
                mouse trailer
              </a>
            </li>
            <h1>future Projects</h1>

            <li>
              {/* <a href="https:://project.wiktrek.xyz/projects"> */}
              <a> Wheel Spinner</a>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
