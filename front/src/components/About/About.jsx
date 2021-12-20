import React from "react";

import { Abouts } from "../picture/picture";

// css

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      +
      <div className={classes.about_heading}>
        <h2>About us</h2>
      </div>
      <div className={classes.about1}>
        <h4 className={classes.about1_heading}>Who we are</h4>
        <div className={classes.underline}></div>
        <div className={classes.about1_text}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            adipisci beatae! Excepturi, recusandae veniam dolor unde ex atque
            magni tempore.
          </p>
        </div>
      </div>
      <div className={classes.about2}>
        <h4 className={classes.about1_heading}>Why should you join us</h4>

        <div className={classes.features}>
          <div className={classes.feature}>
            <div className={classes.feature_img}>
              <img src={Abouts.about1} alt="#" />
            </div>
            <h4>Your perfect workspace</h4>
          </div>
          <div className={classes.feature}>
            <div className={classes.feature_img}>
              <img src={Abouts.about2} alt="#" />
            </div>
            <h4>Work with flexible team</h4>
          </div>
          <div className={classes.feature}>
            <div className={classes.feature_img}>
              <img src={Abouts.about3} alt="#" />
            </div>
            <h4>Group experince</h4>
          </div>
        </div>
      </div>
      <div className={classes.about3}>
        <h4 className={classes.about1_heading}>Goal</h4>
        <div className={classes.about1_text}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            adipisci beatae! Excepturi, recusandae veniam dolor unde ex atque
            magni tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
