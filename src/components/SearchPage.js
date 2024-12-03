import { SEARCH_URL } from "../utils/constants";
import SearchBar from "./SearchBar";
import GptKey from "./GptKeyBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const SearchPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="fixed -z-50 w-screen h-screen">
        <img className="object-cover" src={SEARCH_URL} alt={"Background"}></img>
      </div>
      <SearchBar />
      {/* <GptKey /> */}
      <GptMovieSuggestions />
    </div>
  );
};

export default SearchPage;
