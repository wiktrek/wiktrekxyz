import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - wiktrek</title>
      </Head>
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
