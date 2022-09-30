import { useRouter } from 'next/router';
import React from 'react';
import type { NextPage } from 'next';
import { trpc } from '../../../../utils/trpc';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import styles from '../../../../styles/pollq.module.scss';
import { useEffect, useState } from 'react';
const { v4: uuidv4 } = require('uuid');
const QuestionPageContenet: React.FC<{
  id: string;
  token: string;
  email: string;
}> = ({ id, token, email }) => {
  const { user } = useUser();
  let isOwner = false;
  const { data, isLoading, error } = trpc.useQuery([
    'questions.get-by-id',
    { id, token, email },
  ]);
  const { mutate, data: voteResponse } = trpc.useMutation(
    'questions.vote-on-question',
    { onSuccess: () => window.location.reload() }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || !data?.question) {
    return <div>Question not found</div>;
  }
  if (user?.name === data.question?.ownerEmail) isOwner = true;
  return (
    <>
      <div className={styles.container}>
        {isOwner && <p>This is your poll</p>}
        <div className={styles.yourpoll}>
          <a>{data.question?.question}</a>
          {(data.question?.options as string[])?.map((option, index) => {
            if (isOwner === true) {
              return (
                <div className={styles.options} key={index}>
                  <a>
                    {data?.votes?.[index]?._count ?? 0} - {(option as any).text}
                  </a>
                </div>
              );
            }
            return (
              <div className={styles.options} key={index}>
                <button
                  onClick={() => {
                    mutate({
                      questionId: data.question!.id,
                      option: index,
                      token: token,
                    });
                  }}
                >
                  {(option as any).text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
const QuestionPage: NextPage = () => {
  const [token, setToken] = useState('');
  const { query } = useRouter();
  const { id } = query;
  const { user } = useUser();
  useEffect(() => {
    if (!localStorage.getItem('voterToken')) {
      localStorage.setItem('voterToken', uuidv4());
    }
    setToken(`${localStorage.getItem('voterToken')}`);
    console.log(token);
  }, []);
  if (!id || typeof id !== 'string') {
    return <div>No ID</div>;
  }
  return <QuestionPageContenet id={id} token={token} email={`${user?.name}`} />;
};
export default QuestionPage;
