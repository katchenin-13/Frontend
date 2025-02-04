// src/containers/SignUpContainer.js
import React from "react";
import SignUpForm from "../components/SignUpForm";
import { useSignUp } from "../hooks/useSignUp";

const SignUpContainer = () => {
    const { state, handlers } = useSignUp();

    return <SignUpForm state={state} handlers={handlers} />;
};

export default SignUpContainer;
