import React from "react";

// CSS
import classes from "./contact.module.css";

//  File
import Form from "./Form/Form";

// IMG

import { Gif } from "../picture/picture";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contact_container}>
        <div className={classes.contact_heading}>
          <h3>Contact</h3>
          <span className={classes.contact_subheading}>
            Feel free to get in touch with us with anything related to clubs
          </span>
          <div className="contact_img">
            <img src={Gif.contact} alt="contact-gif" />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
