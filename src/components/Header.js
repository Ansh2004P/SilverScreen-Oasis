import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { removePlaying } from "../utils/movieSlice";

const Header = () => {
  const user = useSelector((state) => state.user); // subscribing to the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between">
      <img
        className="h-20 w-1/5 object-contain p-2 m-4"
        src={LOGO}
        alt="Logo"
      />

      {user && (
        <div className="flex flex-row w-4/5 h-14 justify-end  p-2 m-5 ">
          <img
            className="mx-5 rounded-lg h-[90%] mt-1"
            src={user?.photoURL}
            alt="photo_Avatar"
          />
          <button onClick={handOnClick} className="text-white text-xl p-2">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
