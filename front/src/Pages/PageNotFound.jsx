import React from "react";
import classes from "./PageNotFound.module.css";
const PageNotFound = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["img_wrapper"]}>
        <img src="https://i.imgur.com/qIufhof.png" alt="page-not-found" />
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
