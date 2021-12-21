import React from "react";

// CSS

import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.Form}>
      <form action="">
        <div className={classes.userName}>
          <input
            className={classes.form_input}
            type="text"
            placeholder="User name"
          />
        </div>
        <div className={classes.email}>
          <input
            className={classes.form_input}
            type="email"
            placeholder="Email adress"
          />
        </div>
        <div className={classes.textArea}>
          <textarea name="mesage" id="" cols="30" rows="10">
            Message...
          </textarea>
        </div>
        <input type="submit" placeholder="Send" />
      </form>
    </div>
  );
};

export default Form;
