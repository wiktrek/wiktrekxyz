/* eslint-disable */
import { NextApiRequest, NextApiResponse } from 'next';
import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/url.module.scss';
import copy from 'copy-to-clipboard';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  useUser,
  UserProvider,
  withPageAuthRequired,
  getSession,
} from '@auth0/nextjs-auth0';
import Link from 'next/link';
interface Props {
  link: any;
  alllinks: any;
}
const prisma = new PrismaClient();
const Home: NextPage<Props> = ({ link }) => {
  const { user, error, isLoading } = useUser();
  const [slug, setSlug] = useState('');
  const [url, setUrl] = useState('');
  const [newerror, setError] = useState('');
  const CopyUrl = async (event: React.SyntheticEvent) => {
    // @ts-ignore: Object is possibly 'null'.
    const rowId = event.currentTarget.parentNode.id;
    copy(`https://wiktrek.xyz/go/${rowId}`);
  };
  function reload() {
    window.location.reload();
  }

  const Deletefunction = async (event: React.SyntheticEvent) => {
    // @ts-ignore: Object is possibly 'null'.
    const rowId = event.currentTarget.parentNode.id;

    if (typeof rowId === 'string') {
      if (rowId === null) return;
      console.log(rowId);
      axios
        .post('/api/functions/delete', {
          slug: rowId,
        })
        .then(function (response) {
          setError(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setInterval(reload, 3000);
    }
    return;
  };
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (slug === '' || url === '') return;
    console.log(slug, url, user?.name);
    axios
      .post('/api/functions/save', {
        owner: user?.name,
        url: url,
        slug: slug,
      })
      .then(function (response) {
        setError(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setInterval(reload, 3000);
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>Url shortener- wiktrek</title>
      </Head>
      <UserProvider>
        <div className={styles.container}>
          <h1>create new short url</h1>
          <Link href="/api/auth/logout">logout</Link>
          <form onSubmit={submitData}>
            <input
              autoFocus
              onChange={(e) => setSlug(e.target.value)}
              placeholder="slug"
              type="text"
              value={slug}
            />
            <input
              type="url"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="url"
              value={url}
            />
            <button type="submit" className="formbutton">
              Submit
            </button>
          </form>
          <a>{newerror}</a>
        </div>
        <div className={styles.center}>
          <table className={styles.slugs}>
            <tbody>
              {link.map((item: any, index: any) => {
                return (
                  <>
                    <div className={styles.slug} id={item.slug}>
                      {index + 1 + ' '}
                      {item.slug}
                      {/* url: {item.url} */}
                      <button onClick={CopyUrl}>
                        <FontAwesomeIcon icon={faClipboard} />
                      </button>
                      <button onClick={Deletefunction} data-slug={item.slug}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </UserProvider>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    if (!session) return <a>error</a>;
    const shortLink = await prisma.shortLink.findMany({
      where: {
        owner: session.user.name,
      },
    });
    var link = JSON.parse(JSON.stringify(shortLink));
    console.log(link);
    return {
      props: {
        link,
      },
    };
  },
});
export default Home;
