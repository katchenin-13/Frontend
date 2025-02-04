import React from "react";
import ResetPasswordForm from "../components/ResetPasswordForm";
import { useResetPassword } from "../hooks/useResetPassword";

const ResetPasswordContainer = () => {
    const { state, handlers } = useResetPassword();
    return <ResetPasswordForm state={state} handlers={handlers} />;
};

export default ResetPasswordContainer;
