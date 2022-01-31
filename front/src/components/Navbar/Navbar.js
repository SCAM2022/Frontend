import React from "react";
import classes from "./Navbar.module.css";
// File

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import ProfileAvatar from "../Profile/ProfileAvatar";
// import ProfileIcon from './Profile/'

const Navbar = ({ logoutHandler, loggedIn, ...props }) => {
  const navigate = useNavigate();
  const param = useParams();
  console.log("parms->", param, window.location.pathname);
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
            <ProfileAvatar logoutHandler={logoutHandler} />
          ) : (
            <div className={classes.navbar_buttons}>
              <button
                onClick={() =>
                  // window.location.replace("/login")
                  navigate("/login")
                }
                className={classes.btn}
              >
                Login
              </button>
              <button
                onClick={() =>
                  // window.location.replace("/signup")
                  navigate("/signup")
                }
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
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/" && classes.active
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/about" && classes.active
              }`}
            >
              <Link to={"/about"}>About</Link>
            </li>
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/clubs" && classes.active
              }`}
            >
              <Link to="/clubs">Club</Link>
            </li>
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/event" && classes.active
              }`}
            >
              <Link to={"/event"}>Events</Link>
            </li>
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/contact" && classes.active
              }`}
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li
              className={`${classes.navbar_link} ${
                window.location.pathname === "/newClub" && classes.active
              }`}
            >
              <Link to={"/newClub"}>New-Club</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
