import React from "react";
import MovieCard from "./MovieCard";
import ColoredScrollbars from "react-custom-scrollbars-2";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  w-full">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex flex-row w-full">
        <ColoredScrollbars style={{ height: 300 }} thumbSize={80}>
          <div className="flex w-full">
            {movies?.map((movie) => (
              <div className="flex flex-row">
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              </div>
            ))}
          </div>
        </ColoredScrollbars>
      </div>
    </div>
  );
};
export default MovieList;
