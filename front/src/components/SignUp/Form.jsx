import React from "react";
import classes from "./Signup.module.css";

function Form({ children }) {
  return <div className={classes["screen__form"]}>{children}</div>;
}

export default Form;
