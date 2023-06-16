'use client';
import DynamicRoutes from '../posts/DynamicRoutes.mdx';
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(params);
  if (slug === 'DynamicRoutes') return <DynamicRoutes />;
  return (
    <a>
      Couldn{"'"}t find {slug}
    </a>
  );
}
