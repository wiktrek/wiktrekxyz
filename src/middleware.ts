import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import data1 from './data/data.json';
export function middleware(req: NextRequest, res: NextApiResponse) {
  if (req.nextUrl.pathname.startsWith('/go')) {
    let a = `https://project.wiktrek.xyz/api${req.nextUrl.pathname}`;
    return NextResponse.redirect(a);
  }
  if (req.nextUrl.pathname.startsWith('/q')) {
    let a = `https://project.wiktrek.xyz/projects/poll${req.nextUrl.pathname}`;
    return NextResponse.redirect(a);
  }
  if (req.nextUrl.pathname === '/poll') {
    let a = `https://project.wiktrek.xyz/projects/poll`;
    return NextResponse.redirect(a);
  }
  const data = data1.data;
  data.map((item: any) => {
    // console.log(link);
    // console.log('item ' + item.name);
    if (req.nextUrl.pathname === '/' + item.name) {
      console.log(item.redirect);
      return res.redirect(item.redirect);
    }
  });
  // return NextResponse.redirect('https://wiktrek.xyz/');
}
