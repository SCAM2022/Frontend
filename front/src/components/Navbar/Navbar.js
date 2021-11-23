import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.navbar_head}>
          <div className={classes.navbar_logo}>
            <h2 className={classes.logo}>
              <span className="scam">SCAM</span>
              <br />
              <span className={classes.first_letter}>S</span>tudent
              <span className={classes.first_letter}>C</span>lub
              <span className={classes.first_letter}>A</span>nd
              <span className={classes.first_letter}>A</span>ctivity
              <span className={classes.first_letter}>M</span>nagment
            </h2>
          </div>
          <div className={classes.navbar_buttons}>
            <a href="#" className={classes.btn}>
              Login
            </a>
            <a href="#" className={classes.btn}>
              SignUp
            </a>
          </div>
        </div> 
        <div className={classes.navbar_underline}></div>
        <div className={classes.navbar_body}>
          <ul className={classes.navbar_links}>
            <li className={`${classes.navbar_link} ${classes.active}`}>
              <a href="#">Home</a>
            </li>
            <li className={classes.navbar_link}>
            <a href="#">About</a>
            </li>
            <li className={classes.navbar_link}>
            <a href="#">Club</a>
            </li>
            <li className={classes.navbar_link}>
              <a href="#">Live Updates</a>
            </li>
            <li className={classes.navbar_link}>
              <a href="#">Contact</a>
            </li>
            <li className={classes.navbar_link}>
              <a href="#">New-Club</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
