import React from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { removePlaying } from "../utils/movieSlice";
import { setShow } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((state) => state.user); // subscribing to the store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showSearch = useSelector((state) => state.gpt.show);
  const langKey = useSelector((state) => state.config.lang);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
        navigate("/browse");
      } else {
        // User is Signed out
        dispatch(removePlaying());
        dispatch(removeUser());
        navigate("/");
      }
    });

    return unsubsribe;
  }, []);

  const handOnClick = () => {
    // Handling SignOut Feature
    signOut(auth)
      .then(() => {
        //Sign Out successFull
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
    //SignOut Failed
    navigate("/xyz");
  };

  const handleSearch = () => {
    dispatch(setShow());
    console.log(showSearch);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between">
      <img
        className="h-20 w-1/5 object-contain p-2 m-4"
        src={LOGO}
        alt="Logo"
      />
      {!user && (
        <select
          className="px-2 my-2 h-7 w-fit bg-gray-900 text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
      {user && (
        <div className="flex flex-row w-4/5 h-14 justify-end  p-2 m-5 ">
          {showSearch && (
            <select
              className="px-2 my-2 h-7 w-fit bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="flex w-fit text-white px-4 mx-5 text-lg bg-red-700 rounded-md hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-red-600"
            onClick={handleSearch}
          >
            <div className="mt-1">
              {" "}
              {showSearch ? `${lang[langKey].homepage}` : "Search"}
            </div>
          </button>
          <img
            className="mx-5 rounded-lg h-[90%] mt-1"
            src={user?.photoURL}
            alt="photo_Avatar"
          />
          <button
            onClick={handOnClick}
            className="text-white text-xl p-2 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
