import React from "react";
import { Helmet } from "react-helmet";
import Login from "../Login/Login";

import classes from "./LoginScreen.module.css";

const LoginScreen = () => {
  return (
    <div className={classes.login_screen__wrapper}>
      <div className={classes.login_screen}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
        </Helmet>

        <Login />
      </div>
    </div>
  );
};

export default LoginScreen;
