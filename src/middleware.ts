import { defineMiddleware } from 'astro/middleware';
import { links } from '../data/data.json';
export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  if (path.startsWith('/go')) {
    let a = `https://project.wiktrek.xyz/api${path}`;
    return context.redirect(a);
  }
  if (path.startsWith('/q')) {
    let a = `https://project.wiktrek.xyz/projects/poll${path}`;
    return context.redirect(a);
  }
  if (path === '/poll') {
    let a = `https://project.wiktrek.xyz/projects/poll`;
    return context.redirect(a);
  }
  if (path === '/github') {
    return context.redirect('https://github.com/wiktrek');
  }
  for (let i = 0; i < links.length; i++) {
    if (path === '/' + links[i].name) {
      console.log(links[i].redirect);
      return context.redirect(links[i].redirect);
    }
  }
  return next();
});
