import {
  doLogin as doLoginService,
  doRegister as doRegisterService,
} from "services/authentication";
import { gql, useMutation, useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
import { createContext } from "react";
import { GET_USER_LIKES } from "components/MyLikedGif";

export const LoginContext = createContext({
  isLoggedIn: false,
});

const TOKEN_STORAGE = "std"; //secret token data :

const USER_LOGIN = gql`
  mutation login($credentials: LoginInput) {
    login(credentials: $credentials) {
      id
      username
      lastname
      name
    }
  }
`;
const REGISTER = gql`
  mutation registerUser($user: RegisterUserInput!) {
    register(user: $user) {
      id
      username
      name
      lastname
    }
  }
`;

const CHANGE_PASS = gql`
  mutation changeUserPass($changeData: PassChangeInput) {
    changeUserPass(changeData: $changeData) {
      username
      password
    }
  }
`;

const ADD_LIKE = gql`
  mutation addLike($url: String, $user: InputToken) {
    createLike(url: $url, user: $user) {
      url
    }
  }
`;


export default function AuthenticationContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [execLogin, {}] = useMutation(USER_LOGIN);
  const [user, setUser] = useState(null);
  const [execRegister, {}] = useMutation(REGISTER);
  const [exeChange, {}] = useMutation(CHANGE_PASS);
  const [userdata, setUserData] = useState(null);

  const [exeAddLike, {}] = useMutation(ADD_LIKE,{
    // update(cache,{data}){
    //   const prevCache = cache.readQuery({
    //     query:GET_USER_LIKES
    //   })

    //   debugger
    //   console.log({prevCache})
    //   debugger
    //   cache.updateQuery({
    //     query:GET_USER_LIKES,
    //   },()=>{
    //     console.log({prevCache})
    //     return {
    //       getLikes:[...prevCache.getLikes, data.createLike]
    //     }
    //   })
    // }
  });
  
  useEffect(() => {
    const tokenFromStorage = window.localStorage.getItem(TOKEN_STORAGE)
    if(tokenFromStorage) {
      const parsedToken = JSON.parse(tokenFromStorage)
      setToken(parsedToken);
      setUserData(parsedToken);
      setUser(parsedToken);
    }
  }, []);

  const doLogin = (credentials) => {
    // setLoading(true);
    execLogin({
      variables: {
        credentials,
      },
    })
      .then(({ data }) => {
        setToken(data.login);
        setUserData(data.login);
        setUser(data.login);
        window.localStorage.setItem(TOKEN_STORAGE,JSON.stringify(data.login))
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const doLogout = () => {
    window.localStorage.removeItem(TOKEN_STORAGE);
    setToken(null);
    setUser(null);
  };

  const doRegister = (user) => {
    execRegister({
      variables: {
        user,
      },
    })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  const doPassChange = (changeData) => {
    exeChange({
      variables: {
        changeData,
      },
    })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const doAddLike = (url, { id, lastname, name, username }) => {

    exeAddLike({
      variables: {
        url,
        user: {
          username,
          id,
          name,
          lastname,
        },
      },
      refetchQueries:[GET_USER_LIKES]
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <LoginContext.Provider
      value={{
        doLogin,
        isLoggedIn: Boolean(token),
        loading,
        doRegister,
        errorMessage,
        doLogout,
        registerError,
        token,
        user,
        userdata,
        setUserData,
        doPassChange,
        doAddLike,
        
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
