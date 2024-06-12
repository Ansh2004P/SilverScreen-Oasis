import React from "react";
import { LOGO } from "../utils/constants";
import { useSelector, useDispatch} from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user); // subscribing to the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate("/error");
  };
  return (
    <div className="h-20 w-full absolute bg-gradient-to-b from-black flex flex-row">
      <img
        className="h-20 w-1/5 object-contain p-2 m-4"
        src={LOGO}
        alt="Logo"
      />

      {user && (
        <div className="flex flex-row w-4/5 h-14 justify-end  p-2 m-5 ">
          <img className="mx-5 rounded-lg h-[90%] mt-1" src={user?.photoURL} alt="photo_Avatar" />
          <button onClick={handOnClick}
           className="text-white text-xl p-2">Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
