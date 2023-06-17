'use server';
import { glob } from 'glob';
interface data {
  title: string;
  description: string;
  date: string;
  slug: string;
}
export async function getPosts() {
  const pages = await glob('**/blog/**/page.tsx');
  console.log('pages: ' + pages);
  let pages_data: data[] = [];
  await pages.map(async (post) => {
    const a = `${process.cwd()}/${post}`.replaceAll('\\', '/');
    console.log(a);
    // @ts-ignore
    const { data } = await import('./blog/test/page.tsx');
    pages_data.push(data);
  });
  return pages_data;
}
