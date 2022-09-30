import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { prisma } from '../../../db/client';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.body;
  await prisma.shortLink.delete({
    where: {
      slug: slug,
    },
  });
};
