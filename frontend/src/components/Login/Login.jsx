/* eslint-disable */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify"

import { login, register } from "@services/authService";
import FacebookIcon from "@material-ui/icons/Facebook";
import Google from "@material-ui/icons/Google";

import "@styles/Login.css";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const { data: user } = await login(username, password);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        history.push("/");
        toast.success(`Logged In as ${user.username}`);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("Invalid Password/Username!");
      }
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      const { data: user } = await register(username, password);

      dispatch({
        type: "SET_USER",
        user: user,
      });
      history.push("/");
      toast.success(`Logged In as ${user.username}`);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("Invalid Password/Username!");
      }
    }
  };

  return (
    <div className="login__container">
      <div className="type_selector">
        <div className="Host">
          <p style={{ cursor: "pointer" }}>Host</p>
        </div>
      </div>
      <h1>Sign-in</h1>

      <form>
        <h5>Username</h5>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={signIn} className="login__signInButton">
          Sign In
        </button>
      </form>
      <div className="socials">
        <a href={`${process.env.REACT_APP_API_URL}/users/auth/google`}>
          <Google
            type="submit"
            style={{ cursor: "pointer", color: "black" }}
            classname="login_Google"
          />
        </a>

        <a href={`${process.env.REACT_APP_API_URL}/users/auth/faceboook`}>
          <FacebookIcon
            type="submit"
            classname="login_FacebookButton"
            style={{ cursor: "pointer", color: "black" }}
          />
        </a>
      </div>
      <p className="login_conditions"></p>
      <Link to="/register">
        <button
          className="login__registerButton"
          onClick={createAccount}
        ></button>
      </Link>
    </div>
  );
}

export default Login;
