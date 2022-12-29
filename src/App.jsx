import "./App.css";
import SearchGIF from "./components/SearchGIF";
import { AppBar, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Link, Route, Switch } from "react-router-dom";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import { LoginContext } from "context/authentication";
import Logout from "components/Logout";
import HomePage from "pages/HomePage";
import SingleGif from "components/SIngleGif";
import { PassChangePage } from "pages/PassChangePage";
import MyFavoritesPage from "pages/MyFavoritesPage";

function App() {
  const { isLoggedIn, doLogout, userdata } = useContext(LoginContext);

  return (
    <div className="App">
      <AppBar position="static">
        <h1>GIFtify</h1>
       {isLoggedIn&&<h3>{userdata?.username}</h3>} 

        <Toolbar>
          <ul>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/register">registrarse</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="/search">Buscar</Link>
            </li>
            {isLoggedIn && (
                <>
              <li>
                <Link to="/changepassword">cambiar contraseña</Link>
              </li>
              <li>
                <Link to="/myfavorites">mis GIFs</Link>
              </li>
                </>
              
            )}

          </ul>
        </Toolbar>
        {isLoggedIn && <Logout doLogout={doLogout} />}
      </AppBar>
      <hr />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/gif/:id">
          <SingleGif />
        </Route>
        <Route exact path="/search">
          <SearchGIF />
        </Route>
        <Route exact path="/changepassword">
          <PassChangePage/>
        </Route>
        <Route exact path="/myfavorites">
          <MyFavoritesPage/>
        </Route>
        <Route>
          <h2>404 Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
