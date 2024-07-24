import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
  title: "Movie",
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log("Start fetching");
  // 병렬 요청 예시
  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log("End fetching");

  return (
    <div>
      <Suspense fallback={<div>Loading movie info</div>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading movie videos</div>}>
        {/* @ts-expect-error Async Server Component */}
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
