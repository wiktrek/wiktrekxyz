import { glob } from 'glob';
export async function getPosts() {
  const pages = await glob('**/blog/**/page.tsx');
  console.log('pages: ' + pages);
  pages.map(async (post) => {
    const a = `${process.cwd()}/${post}`.replaceAll('\\', '/');
    console.log(a);
    const { data } = await import('./test/page.tsx');
    console.log('a' + data);
  });
  return 'stringdjkfakldfjaskl';
}
