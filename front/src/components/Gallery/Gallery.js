import React from "react";
import classes from "./Gallery.module.css";

import { gallery } from "../picture/picture";

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <div className={classes.gallery_heading}>
        <h2>
          <span className={classes.photos}>New Photos From</span> <br /> some
          event
        </h2>
      </div>
      <div className={classes.viewAll}></div>
      <div className={classes.pictures}>
        <div className={classes.picture}>
          <img src={gallery.gallery1} alt="" />
        </div>
        <div className={classes.picture}>
          <img src={gallery.gallery2} alt="" />
        </div>
        <div className={classes.picture}>
          <img src={gallery.gallery3} alt="" />
        </div>
        <div className={classes.picture}>
          <img src={gallery.gallery4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
