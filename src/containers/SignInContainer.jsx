// src/containers/SignInContainer.js
import React from "react";
import SignInForm from "../components/SignInForm";
import { useSignIn } from "../hooks/userSignIn";


const SignInContainer = () => {
  const { state, handlers } = useSignIn();

  return <SignInForm state={state} handlers={handlers} />;
};

export default SignInContainer;
