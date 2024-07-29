import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// export const metadata = {
//   title: "Movie",
// };

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  // console.log("Start fetching");
  // 병렬 요청 예시
  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log("End fetching");

  return (
    <div>
      <Suspense fallback={<div>Loading movie info</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading movie videos</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
