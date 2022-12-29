import { useEffect, useState } from "react";
import {
  doLogin as doLoginService,
  doRegister as doRegisterService,
} from "../services/authentication";

const TOKEN_STORAGE = "std"; //secret token data :v

export default function useAuthentication() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  useEffect(() => {}, []);

  const doLogin = (credentials) => {
    setLoading(true);
    doLoginService(credentials)
      .then(({ token }) => {
        setToken(token);
        window.localStorage.setItem(TOKEN_STORAGE, token);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(null), 5000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const doLogout = () => {
    window.localStorage.removeItem(TOKEN_STORAGE);
    setToken(null);
  };

  const doRegister = (data) => {
    doRegisterService(data).then((data) => {
      setRegisterError(data.error);
      return data;
    });
  };

  return {
    doLogin,
    isLoggedIn: Boolean(token),
    loading,
    doRegister,
    errorMessage,
    doLogout,
    registerError,
  };
}
