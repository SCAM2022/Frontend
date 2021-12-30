import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Typical from "react-typical";

function Hero(props) {
  return (
    <div className={classes.main}>
      <div className={classes.main_left}>
        <div className={classes.heading}>
          {/* <h1>
            LEGENDARY <span className={classes.club}>CLUB</span>
            <br />
            MAKE <br /> LEGENDARY PEOPLE
          </h1> */}
          <Typical
            loop={Infinity}
            steps={[
              " LEGENDARY CLUB",
              1000,
              " MAKE",
              1000,
              "LEGENDARY Developer 💻",
              1000,
            ]}
          />
        </div>
        <div className={classes.btn}>
          <Link to="/clubs">Join</Link>
        </div>
      </div>
      <div className={classes.main_right}>
        <div className={classes.img_container}></div>
        <div className={classes.social}></div>
      </div>
    </div>
  );
}

export default Hero;
