import { glob } from 'glob';
export async function getPosts() {
  const pages = await glob('**/blog/**/page.tsx');
  console.log('pages: ' + pages);
  return pages;
}
export async function getData(posts: string[]) {
  posts.map((post) => {
    const a = post;
    console.log(a);
    
  });
}
