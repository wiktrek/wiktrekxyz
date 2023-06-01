import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import data1 from '../data/data.json';
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
  for (let i = 0; i < data.length; i++) {
    if (req.nextUrl.pathname === '/' + data[i].name) {
      console.log(data[i].redirect);
      return NextResponse.redirect(data[i].redirect);
    }
  }
  data.map((item: any) => {
    // console.log(link);
    // console.log('item ' + item.name);
    if (req.nextUrl.pathname === '/' + item.name) {
      console.log(item.redirect);
      return NextResponse.redirect(item.redirect);
    }
  });
  // return NextResponse.redirect('https://wiktrek.xyz/');
}
