import React from "react";
import NewPasswordForm from "../components/NewPasswordForm";
import { useNewPassword } from "../hooks/useNewPassword";

const NewPasswordContainer = () => {
    const { state, handlers } = useNewPassword();
    return <NewPasswordForm state={state} handlers={handlers} />;
};

export default NewPasswordContainer;
