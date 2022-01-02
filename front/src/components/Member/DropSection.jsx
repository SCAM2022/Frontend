import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./DropSection.module.css";

export default function DropSection({ show, setShow, ...props }) {
  const profileHandler = () => {
    setShow((e) => !e);
  };

  const removeMember = (id) => {
    console.log("remove clicked");

    if (props?.removeMemberHandler) {
      props?.removeMemberHandler(id);
    }
    setShow((e) => !e);
  };

  return (
    <div>
      <div
        className={`${classes.user_profile__dropdown} ${
          show && classes.profile_active
        }`}
      >
        <Link
          to={`/profile/${props.prename}`}
          className={classes.user_profile__dropdown_option}
          onClick={() => Cookies.set("SCAM_TEMP_ID", props?.id)}
          key={props?.id}
        >
          View Profile
        </Link>
        <div
          className={classes.user_profile__dropdown_option}
          onClick={() => removeMember(props?.id)}
        >
          remove User
        </div>
      </div>
    </div>
  );
}
