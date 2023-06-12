'use client';
import DynamicRoutes from '../articles/DynamicRoutes.mdx';
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return <DynamicRoutes />;
}
