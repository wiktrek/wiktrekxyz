import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname.startsWith('/go')) {
    let a = `https://wiktrek.xyz/api${req.nextUrl.pathname}`;
    return NextResponse.rewrite(new URL(a));
  }
  if (req.nextUrl.pathname.startsWith('/q')) {
    let a = `https://wiktrek.xyz/projects/poll${req.nextUrl.pathname}`;
    return NextResponse.rewrite(new URL(a));
  }
  if (req.nextUrl.pathname === '/poll') {
    let a = `https://wiktrek.xyz/projects/poll`;
    return NextResponse.rewrite(new URL(a));
  }
  if (req.nextUrl.pathname.startsWith('/github')) {
    let a = `https://wiktrek.xyz/api/go/mygithub`;
    return NextResponse.rewrite(new URL(a));
  }
}
