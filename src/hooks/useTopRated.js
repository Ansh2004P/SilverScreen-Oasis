import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies} from "../utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch( addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    getTopRated();
    
    return;
  }, []);
};

export default useTopRated;
