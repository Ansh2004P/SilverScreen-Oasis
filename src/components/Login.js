import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import lang from "../utils/languageConstants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const langKey = useSelector((state) => state.config.lang);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(email);
    // console.log(password);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: USER_AVATAR,
              })
            );
          });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  return (
    <div className="fixed h-screen w-screen">
      <img
        className="h-full w-full object-cover absolute"
        src={BG_URL}
        alt="background"
      />
      <div className="h-screen w-screen absolute bg-gradient-to-b from-black z-10 ">
        <Header />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-1/2 md:w-2/6 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65"
        >
          <h1 className="font-bold text-3xl py-4 text-white">
            {isSignInForm
              ? `${lang[langKey].signIn}`
              : `${lang[langKey].signUp}`}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder={lang[langKey].fullName}
              className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder={lang[langKey].emailAddress}
            className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
          />
          <input
            type="password"
            ref={password}
            placeholder={lang[langKey].password}
            className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm
              ? `${lang[langKey].signIn}`
              : `${lang[langKey].signUp}`}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? `${lang[langKey].loginText}`
              : `${lang[langKey].signUpText}`}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
