import { glob, globSync, globStream, globStreamSync, Glob } from 'glob';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { join } from 'node:path';
export default async function Page({ params }: { params: { id: string } }) {
  const blogDir = join(process.cwd(), 'app/blog');
  const mdxfiles = await glob('**/*.mdx', {
    cwd: blogDir,
    absolute: false,
  });
  console.log(mdxfiles);

  const { id } = params;

  return (
    <>
      <MDXRemote
        source={`# Hello World

        This is from Server Components!
        `}
      />
    </>
  );
}
