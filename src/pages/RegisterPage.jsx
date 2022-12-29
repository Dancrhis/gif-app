import React, { useContext } from "react";
// import  from 'hooks/useAuthentication';
import RegisterForm from "components/RegisterForm";
import { LoginContext } from "context/authentication";

export default function RegisterPage() {
  const { doLogin, errorMessage, isLoggedIn, registerError, doRegister } =
    useContext(LoginContext);
  // TODO
  // redirect when is already logged it

  return (
    <>
      <RegisterForm doRegister={doRegister} registerError={registerError} />
    </>
  );
}
