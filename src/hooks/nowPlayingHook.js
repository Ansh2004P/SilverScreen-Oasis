import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();

  const nowPlayingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    dispatch(addNowPlaying(json?.results));
  };

  useEffect(() => {
    nowPlayingMovieList();
  }, []);
};

export default useNowPlayingHook;
