import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((state) => state.movie.nowPlaying);

    // Early Return
    if(!movies) return;

    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    console.log(id);

    return (
        <div className="pt-[30%] bg-black md:pt-0 w-screen">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer