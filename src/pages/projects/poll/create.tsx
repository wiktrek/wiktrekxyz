import React from 'react';
import { trpc } from '../../../utils/trpc';
import styles from '../../../styles/pollcreate.module.scss';
import { useUser } from '@auth0/nextjs-auth0';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateQuestionInputType,
  createQuestionValidator,
} from '../../../shared/create-question-validator';
import { useRouter } from 'next/router';
import Head from 'next/head';

const CreateQuestionForm = () => {
  const router = useRouter();
  const { user } = useUser();

  const { mutate, isLoading } = trpc.useMutation('questions.create', {
    onSuccess: (data) => {
      console.log(data);
      reset();
      router.push(`/projects/poll/q/${data.id}`);
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateQuestionInputType>({
    resolver: zodResolver(createQuestionValidator),
    defaultValues: {
      options: [{ text: 'Yes' }, { text: 'No' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<CreateQuestionInputType>({
      name: 'options',
      control,
    });
  watch('question');
  watch('options');
  if (!user) return <a>not logged in</a>;

  if (typeof user.name !== 'string') return <a>not logged in</a>;
  return (
    <>
      <div className={styles.form}>
        <form
          onSubmit={handleSubmit((data) => {
            mutate({
              question: data.question,
              email: `${user.name}`,

              options: data.options,
            });
          })}
        >
          <label className={styles.label}>
            <span>Question</span>
            <input
              {...register('question')}
              type="text"
              className={styles.forminput}
              placeholder="How do magnets work?"
            />
          </label>
          <label>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <section className={'section'} key={field.id}>
                    <input
                      placeholder="options"
                      {...register(`options.${index}.text`, {
                        required: true,
                      })}
                      className={styles.options}
                    />
                    <button
                      id={styles.removebutton}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      X
                    </button>
                  </section>
                </div>
              );
            })}
          </label>

          <div>
            <button
              id={styles.optionsbutton}
              type="button"
              value="add more options "
              onClick={() => append({ text: '' })}
            >
              add more options
            </button>
          </div>
          {errors.options && (
            <p id={styles.error}>{`${errors.options?.message}`}</p>
          )}
          {errors.question && (
            <p id={styles.error}>{`${errors.question?.message}`}</p>
          )}
          <button type="submit" className={styles.submit}>
            Create question
          </button>
        </form>
      </div>
    </>
  );
};
const QuestionCreator: React.FC = () => {
  return (
    <>
      <Head>
        <title>Poll create- wiktrek</title>
        <meta name="description" content="create a poll" />
      </Head>
      <CreateQuestionForm />
    </>
  );
};
export default QuestionCreator;
