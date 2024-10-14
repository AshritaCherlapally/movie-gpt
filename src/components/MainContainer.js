import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = () => {
  //Stored now playing movies list from the redux store using useSelector and stored it in movies
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //if the movies is null then return

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
