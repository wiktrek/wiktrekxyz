import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import data1 from './data/data.json';
export function middleware(req: NextRequest, res: NextResponse) {
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
  let a = 0;
  console.log(req.nextUrl.pop('/'));

  data.map((item: any) => {
    if (l === item.name) {
      NextResponse.redirect(item.redirect);
      a++;
    }
  });
  if (a == 0) return;
  if (req.nextUrl === `/${data}`) {
  }
}
