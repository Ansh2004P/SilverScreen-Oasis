import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/nowPlayingHook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

const Browse = () => {
  const search = useSelector((state) => state.gpt.show);

  useNowPlayingHook();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div className="bg-black fixed overflow-y-auto">
      <Header />
      {!search ? (
        <div className="h-screen w-screen ">
          <MainContainer />
          <SecondaryContainer />
        </div>
      ) : (
        <SearchPage />
      )}
    </div>
  );
};

export default Browse;
