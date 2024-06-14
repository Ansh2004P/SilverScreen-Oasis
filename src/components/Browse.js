import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/nowPlayingHook";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingHook();

  return (
    <div>
      <Header />
      
      <MainContainer />
    </div>
  );
};

export default Browse;
