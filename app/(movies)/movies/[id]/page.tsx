export const metadata = {
  title: "Movie",
};

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>movied {id}</div>;
}