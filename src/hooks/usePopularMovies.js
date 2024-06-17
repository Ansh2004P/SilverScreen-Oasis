import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch Data from TMDB and update store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=7",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    dispatch(addPopular(json?.results));
  };
  useEffect(() => {
    getPopularMovies();

    return;
  }, []);
};

export default usePopularMovies;
