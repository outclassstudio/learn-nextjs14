import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  // console.log(`fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something broke...");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
}
