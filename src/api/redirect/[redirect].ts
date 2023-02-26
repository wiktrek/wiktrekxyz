import { NextApiRequest, NextApiResponse } from 'next';
import data1 from '../../data/data.json';
async function redirect(req: NextApiRequest, res: NextApiResponse) {
  const data = data1.data;
  let a = 0;
  const l = req.query['redirect'];
  console.log(l);

  await data.map((item: any) => {
    if (l === item.name) {
      res.redirect(item.redirect);
      a++;
    }
  });
  if (a == 0) return res.redirect('https://wiktrek.xyz/links');
}

export default redirect;
