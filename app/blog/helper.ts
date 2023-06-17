import { glob } from 'glob';
export default async function getPosts() {
  const pages = await glob('**/blog/**/page.tsx');
  console.log('pages: ' + pages);
  pages.map((page) => {
    const a = `${process.cwd()}/` + page.replaceAll('\\', '/');

    const data = require(a).data;
    console.log(data);
  });
}
