import { defineMiddleware } from 'astro/middleware';
import { data } from '../data/data.json';
// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const path = context.url.pathname;
  console.log(path);
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

  return next();
});
