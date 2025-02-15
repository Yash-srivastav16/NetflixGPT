import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);

  const toggleSignInForm = () => {
    setToggleSignIn(!toggleSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="background"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <form className="w-3/12 absolute rounded-lg p-12 bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!toggleSignIn && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-100 bg-opacity-10"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-100 bg-opacity-10"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-100 bg-opacity-10"
        />
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full text-lg">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-300">
          {toggleSignIn ? "New to Netflix? " : "Already registered? "}
          <span
            className="font-bold text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {toggleSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
