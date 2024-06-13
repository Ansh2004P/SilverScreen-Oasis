import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/nowPlayingHook";

const Browse = () => {
  useNowPlayingHook();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
