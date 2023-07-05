import { defineMiddleware } from 'astro/middleware';
import { data } from '../data/data.json';
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
  //   console.log(data);
  data.map((item: { name: string; redirect: string }) => {
    if (path.replace('/', '') === item.name) {
      console.log(item.redirect);
      return context.redirect(item.redirect);
    }
  });

  return next();
});
