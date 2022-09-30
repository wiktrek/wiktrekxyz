import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { prisma } from '../../../db/client';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { owner, url, slug } = req.body;
  const notunique = await prisma.shortLink.findFirst({
    where: {
      slug: { contains: slug },
    },
  });
  if (notunique) {
    res.statusCode = 200;
    res.send('slug already exists');
    return;
  }

  const shortlink = await prisma.shortLink.create({
    data: { owner, url, slug },
  });
  console.log(shortlink);
};
