import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../../db/client';
export const questionRouter = trpc
  .router()
  .query('get-all-my', {
    input: z.object({ email: z.string() }),
    async resolve({ input }) {
      return await prisma.pollQuestion.findMany({
        where: {
          ownerEmail: { equals: input.email },
        },
      });
    },
  })
  .query('get-by-id', {
    input: z.object({ id: z.string(), token: z.string(), email: z.string() }),
    async resolve({ input }) {
      const question = await prisma.pollQuestion.findFirst({
        where: {
          id: input.id,
        },
      });

      const myVote = await prisma.vote.findFirst({
        where: {
          questionId: input.id,
          voterToken: input.token,
        },
      });
      const rest = {
        question,
        vote: myVote,
        isOwner: question?.ownerEmail === input.email,
      };
      if (rest.vote || rest.isOwner) {
        const votes = await prisma.vote.groupBy({
          where: { questionId: input.id },
          by: ['choice'],
          _count: true,
        });
        return { ...rest, votes };
      }

      return { ...rest, votes: undefined };
    },
  })
  .mutation('vote-on-question', {
    input: z.object({
      questionId: z.string(),
      option: z.number().min(0).max(10),
      token: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.vote.create({
        data: {
          questionId: input.questionId,
          choice: input.option,
          voterToken: input.token,
        },
      });
    },
  })
  .mutation('create', {
    input: z.object({
      question: z.string(),
      email: z.string(),
      options: z
        .array(z.object({ text: z.string().min(1).max(200) }))
        .min(2)
        .max(200),
    }),
    async resolve({ input }) {
      return await prisma.pollQuestion.create({
        data: {
          question: input.question,
          ownerEmail: input.email,
          options: input.options,
        },
      });
    },
  });
