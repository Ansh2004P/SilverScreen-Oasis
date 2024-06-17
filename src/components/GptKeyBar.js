import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { setKey } from '../utils/gptSlice';

const GptKey = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const langKey = useSelector((state) => state.config.lang);

    const handleClick = () => {
        dispatch(setKey(searchText.current.value));
        // console.log(searchText.current.value);
    };

  return (
    <div className="pt-[35%] md:pt-[2%] flex justify-center">
    <form
      className="w-full md:w-1/3 bg-gray-950 grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder={lang[langKey].keyPlaceholder}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleClick}
      >
        {lang[langKey].submit}
      </button>
    </form>
  </div>
  )
}

export default GptKey;