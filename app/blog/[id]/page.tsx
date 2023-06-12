export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return <h1>wiktrek.xyz/blog/{id} </h1>;
}
