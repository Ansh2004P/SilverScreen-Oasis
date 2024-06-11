import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <img
        className="h-full w-full object-cover absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background"
      />
      <div className="h-screen w-screen absolute bg-gradient-to-b from-black z-10 overflow-y-scroll">
        <Header />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-1/2 md:w-2/6 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65"
        >
          <h1 className="font-bold text-3xl py-4 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-950 opacity-50 border-white border-[1px] rounded-sm placeholder-white"
          />
          {/* <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p> */}
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            // onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
