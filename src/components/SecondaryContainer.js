import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Trending Movies"}
            movies={movies.addPopularMovies}
          />
          <MovieList
            title={"Recent TV Dramas"}
            movies={movies.addNowPlayingTv}
          />
          <MovieList
            title={"Top Rated TV Dramas"}
            movies={movies.addTvSeries}
          />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.addUpcomingMovies}
          />
          <MovieList
            title={"Trending Movies, Shows"}
            movies={movies.addTrendingContent}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
