import { URL } from "../../../(home)/page";

export const metadata = {
  title: "Movie",
};

async function getMovie(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("Start fetching");
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("End fetching");

  return <div>{movie.title}</div>;
}
