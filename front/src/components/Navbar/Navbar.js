import React from "react";
import classes from "./Navbar.module.css";
import cookie from "js-cookie";
// File

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar = ({ logoutHandler, loggedIn, ...props }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.navbar_head}>
          <div className={classes.navbar_logo}>
            <h2 className={classes.logo}>
              SCAM
              <br />
              <span className={classes.scam}>
                Student Club And Activity Management
              </span>
            </h2>
          </div>
          {loggedIn ? (
            <div className={classes.navbar_buttons}>
              <div className={classes.btn} onClick={logoutHandler}>
                Logout
              </div>
            </div>
          ) : (
            <div className={classes.navbar_buttons}>
              <button
                onClick={() => window.location.replace("/login")}
                className={classes.btn}
              >
                Login
              </button>
              <button
                onClick={() => window.location.replace("/login")}
                className={classes.btn}
              >
                SignUp
              </button>
            </div>
          )}
        </div>
        <div className={classes.navbar_underline}></div>
        <div className={classes.navbar_body}>
          <ul className={classes.navbar_links}>
            <li className={`${classes.navbar_link} ${classes.active}`}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to={"/about"}>About</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="/clubs">Club</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to={"/live"}>Live Updates</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to={"/newClub"}>New-Club</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
