import LoginForm from "components/LoginForm";
import { LoginContext } from "context/authentication";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const { doLogin, errorMessage, isLoggedIn } = useContext(LoginContext);
  const location = useHistory();

  if (isLoggedIn) return location.push("/");

  const handleLogin = (credentials) => {
    doLogin(credentials);
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
    </>
  );
}
