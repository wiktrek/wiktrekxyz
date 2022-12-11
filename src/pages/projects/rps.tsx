import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from '../../styles/rpc.module.scss';

const Home: NextPage = () => {
  const [rpc, setRpc] = useState('');
  const [rpc2, setRpc2] = useState('');
  const [result, setResult] = useState('');
  const [pick, setPick] = useState('');
  async function checkwin(e: React.SyntheticEvent) {
    let random = (Math.random() * (3 - 1) + 1).toFixed();
    setRpc(e.currentTarget.innerHTML);
    if (random === '1') setRpc2('rock');
    if (random === '2') setRpc2('paper');
    if (random === '3') setRpc2('scissors');
    setPick(rpc2);
    if (rpc) {
      if (rpc === rpc2) return setResult('Tie');
      if (rpc === 'rock') {
        if (rpc2 === 'scissors') return setResult('You won');
        if (rpc2 === 'paper') return setResult('You lost');
      }

      if (rpc === 'scissors') {
        if (rpc2 === 'paper') return setResult('You won');
        if (rpc2 === 'rock') return setResult('You lost');
      }
      if (rpc === 'paper') {
        if (rpc2 === 'rock') return setResult('You won');
        if (rpc2 === 'scissors') return setResult('You lost');
      }
    }
  }

  return (
    <>
      <Head>
        <title>Rock paper scissors - wiktrek</title>
        <meta name="description" content="Rock paper scissors" />
      </Head>
      <div className={styles.container}>
        <div className={styles.options}>
          <button onClick={checkwin}>rock</button>
          <button onClick={checkwin}>paper</button>
          <button onClick={checkwin}>scissors</button>
        </div>
        <p>
          {result}: server picked {pick}
        </p>
      </div>
    </>
  );
};

export default Home;
