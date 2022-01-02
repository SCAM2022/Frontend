import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import Cookies from "js-cookie";
import club from "../../assets/loginSvg/club.png";
import classes from "./Login.module.css";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Login = (props) => {
  const [emailOrMobile, setEmailOrMobile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isForgot, setIsForgot] = React.useState(false);
  const [isForgotSucceed, setIsForgotSucceed] = React.useState(false);

  const [clientError, setClientError] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  // For setting username or email
  const onEmailOrMobileChange = (e) => {
    const value = e.target.value;
    setEmailOrMobile(value);
  };

  // Validate User's input when the input field is out of focus
  const validateEmailOrMobile = () => {
    setIsForgotSucceed(false);
    const numbers = /^[0-9]+$/;

    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailOrMobile.match(numbers)) {
      if (emailOrMobile.length < 8) {
        setClientError("Mobile numbers should be greater than 8!");
        return false;
      } else return true;
    } else if (mailformat.test(emailOrMobile)) {
      return true;
    } else {
      setClientError("Please enter a valid email or mobile number");
      return false;
    }
  };

  // For clearing error message when a input is on focus.
  const removeclientError = () => {
    const timer = setTimeout(() => {
      setClientError("");
      return () => {
        clearTimeout(timer);
      };
    }, 200);
  };

  // Instead clearing error message after click a button.
  const instantRemoveError = () => {
    setClientError("");
  };

  // For setting client's password
  const onSetPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  // handle login

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_SERVER);
    if (!emailOrMobile || !password) {
      return setClientError("Enter All fields");
    } else {
      try {
        if (!validateEmailOrMobile()) {
          return;
        }
        setClientError("Loading..."); //@ dezx edited here
        const r = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, {
          Auth: emailOrMobile,
          Password: password,
        });

        if (r.status === 200) {
          if (r.data.error) {
            setClientError(r.data.error);
          } else {
            console.log("response->", r);
            const { token, id } = r.data;
            Cookies.set("SCAM_TOKEN", token);
            Cookies.set("SCAM_USER_ID", id);
            console.log(token, "Tokennnn");

            // navigate("/");
            window.location.replace("/");
            // window.location.href = `${process.env.REACT_APP_CLIENT}/dashboard`;
          }
        }
      } catch (e) {
        if (e.response && e.response.data) {
          console.log("error 2->", e.response);
          setClientError("Incorrect email or Password!");
        }
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!emailOrMobile) {
      return setClientError("Enter All fields");
    } else {
      if (!validateEmailOrMobile()) {
        return;
      }
      setIsForgotSucceed(false);
      setClientError("Loading...");
    }
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["login__container"]}>
        <div className={classes["login__logo"]}>
          {/* <img alt="Logo" src={logoSvg} /> */}
          <img alt="Logo" src={club} />
        </div>

        <div className={classes["login__welcome"]}>
          <p className={classes["login__welcome--text-1"]}>Welcome Back!</p>
          <p className={classes["login__welcome--text-2"]}>
            Login to your battlefield
          </p>
        </div>

        <form className={classes["login__form"]} onSubmit={handleLogin}>
          {clientError ? (
            clientError === "Loading..." ? (
              <div>
                <BarLoader
                  color={"red"}
                  loading={loading}
                  css={override}
                  size={300}
                />
              </div>
            ) : (
              <p
                className={classes["login__client-error"]}
                style={{ color: isForgot && isForgotSucceed && "#00FF00" }}
              >
                {clientError}
              </p>
            )
          ) : (
            <p className={classes["login__client-no__error"]}></p>
          )}

          <div className={classes["login__form-group"]}>
            <label
              htmlFor="emailOrMobile"
              className={classes["login__form--label"]}
            >
              Email or Mobile
            </label>
            <input
              className={classes["login__form--input"]}
              id="emailOrMobile"
              type="text"
              placeholder="Email or Mobile"
              value={emailOrMobile}
              onChange={onEmailOrMobileChange}
              onBlur={validateEmailOrMobile}
              onFocus={removeclientError}
              required
            />
          </div>

          {!isForgot && (
            <div className={classes["login__form-group--2"]}>
              <p
                className={classes["login__form--forgot"]}
                onClick={() => {
                  instantRemoveError();
                  setIsForgot(true);
                }}
              >
                Forgot Password?
              </p>

              <label
                htmlFor="password"
                className={classes["login__form--label"]}
              >
                Password
              </label>

              <input
                className={classes["login__form--input"]}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onSetPassword}
                required
              />
            </div>
          )}

          <button
            className={classes["login__form-btn"]}
            onClick={!isForgot ? handleLogin : handleForgotPassword}
          >
            {!isForgot ? "Login" : "Send Reset Password Link"}
          </button>
        </form>

        <div className={classes["login__no-account"]}>
          <p className={classes["login__no-account--text"]}>
            {!isForgot ? "Don't have an account?" : "Do you have an account?"}
          </p>
          {!isForgot ? (
            <Link to="/signup" className={classes["login__no-account--link"]}>
              Register
            </Link>
          ) : (
            <div
              className={classes["login__no-account--link"]}
              style={{ cursor: "pointer" }}
              onClick={() => {
                instantRemoveError();
                setIsForgot(false);
              }}
            >
              Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   setUser: (userInfo) => dispatch(setUser(userInfo)),
// });

export default connect(null, null)(Login);
