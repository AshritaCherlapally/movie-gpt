import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm,
      isSignInForm ? null : firstName.current.value,
      isSignInForm ? null : lastName.current.value,

      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //Sign in or sign up logic
    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&s",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/US-en-20240930-TRIFECTA-perspective_2311e209-246c-4397-86cf-081daee97f04_large.jpg')`,
        }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <>
              <input
                type="text"
                ref={firstName}
                placeholder="First Name"
                className="my-4 p-4 w-full bg-gray-700 rounded-lg"
              />
              <input
                type="text"
                ref={lastName}
                placeholder="Last Name"
                className="my-4 p-4 w-full bg-gray-700 rounded-lg"
              />
            </>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="my-4 p-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-4 p-4 w-full bg-gray-700 rounded-lg"
          />
          {errorMessage && (
            <p className="text-red-500 font-bold text-lg py-2">
              {errorMessage}
            </p>
          )}
          <button
            className="w-full p-4 my-4 bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up now."
              : "Already registered? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
