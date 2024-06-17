import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movie);

  return (
    !movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Trending"} movies={movies.nowPlaying} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />{" "}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
