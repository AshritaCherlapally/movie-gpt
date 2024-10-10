import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoTrailer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w">
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoTrailer;
