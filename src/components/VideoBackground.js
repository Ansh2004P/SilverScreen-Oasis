import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((state) => state.movie.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full ">
      <iframe
      loading="lazy"
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&loop=1&controls=0&playlist="+ trailer?.key
        }
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
