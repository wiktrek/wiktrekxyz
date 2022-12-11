import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/calc.module.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
const Home: NextPage = () => {
  const [num, setNum] = useState(0);
  const [screen, setScreen] = useState('');
  const [screen2, setScreen2] = useState('');
  const [screen3, setScreen3] = useState('');
  const [check, setCheck] = useState(false);
  const [x, setX] = useState('');
  function addnum(e: React.SyntheticEvent) {
    if (check === false) {
      if (screen.length > 7) return;
      setScreen(screen + e.currentTarget.id);
    } else {
      setScreen2(screen2 + e.currentTarget.id);
    }
  }
  function ok(e: React.SyntheticEvent) {
    console.log(e.currentTarget.id);
    setScreen3(e.currentTarget.id);
    setX(e.currentTarget.id);
    setCheck(true);
  }
  function clear() {
    setScreen('');
    setScreen2('');
    setScreen3('');
    setX('');
  }
  function clearone() {
    if (check === false) {
      setScreen(screen.slice(0, screen.length - 1));
    } else {
      setScreen2(screen2.slice(0, screen2.length - 1));
    }
  }
  function equals(e: React.SyntheticEvent) {
    let a = parseFloat(screen);
    let b = parseFloat(screen2);
    console.log(`${a} ${b}`);
    let c = x;
    console.log(c);
    if (c === 'x') {
      setScreen(`${(a * b).toString()}`);
      setScreen2('');
      setScreen3('');
      setCheck(false);
    }
    if (c === '-') {
      setScreen(`${(a - b).toString()}`);
      setScreen2('');
      setScreen3('');
      setCheck(false);
    }
    if (c === '+') {
      setScreen(`${(a + b).toString()}`);
      setScreen2('');
      setScreen3('');
      setCheck(false);
    }
    if (c === '/') {
      setScreen(`${(a / b).toString()}`);
      setScreen2('');
      setScreen3('');
      setCheck(false);
    }
  }
  return (
    <>
      <Head>
        <title>calculator - wiktrek</title>
        <meta name="description" content="calculator" />
      </Head>
      <div className={styles.container}>
        <div className={styles.calc}>
          <div className={styles.screen}>
            <a>
              {screen}
              {screen3}
              {screen2}
            </a>
            <button onClick={clearone}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={equals}>=</button>
          </div>
          <div className={styles.grid}>
            <button onClick={addnum} className={styles.buttons} id="1">
              1
            </button>
            <button onClick={addnum} className={styles.buttons} id="2">
              2
            </button>
            <button onClick={addnum} className={styles.buttons} id="3">
              3
            </button>
            <button onClick={ok} className={styles.buttonX} id="/">
              /
            </button>
            <button onClick={addnum} className={styles.buttons} id="4">
              4
            </button>
            <button onClick={addnum} className={styles.buttons} id="5">
              5
            </button>
            <button onClick={addnum} className={styles.buttons} id="6">
              6
            </button>
            <button onClick={ok} className={styles.buttonX} id="x">
              x
            </button>
            <button onClick={addnum} className={styles.buttons} id="7">
              7
            </button>
            <button onClick={addnum} className={styles.buttons} id="8">
              8
            </button>
            <button onClick={addnum} className={styles.buttons} id="9">
              9
            </button>
            <button onClick={ok} className={styles.buttonX} id="-">
              -
            </button>
            <button onClick={addnum} className={styles.buttons} id="0">
              0
            </button>
            <button onClick={addnum} className={styles.buttons} id=".">
              .
            </button>
            <button onClick={clear} className={styles.buttons} id="clear">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button onClick={ok} className={styles.buttonX} id="+">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
