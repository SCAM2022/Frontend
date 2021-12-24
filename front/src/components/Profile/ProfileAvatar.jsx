import React from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/userAvatar.png";

import classes from "./ProfileAvatar.module.css";
export default function ProfileAvatar({ logoutHandler, ...props }) {
  const [show, setShow] = React.useState(false);

  const profileHandler = () => {
    setShow((e) => !e);
  };

  return (
    <div>
      <div className={classes.user_profile_avatar}>
        <div
          // className={classes.btn}
          onClick={profileHandler}
        >
          <img src={defaultAvatar} alt="profile-avatar" />
          Logout
        </div>
      </div>
      <div
        className={`${classes.user_profile__dropdown} ${
          show && classes.profile_active
        }`}
      >
        <Link
          to="./profile"
          className={classes.user_profile__dropdown_option}
          onClick={profileHandler}
        >
          Profile
        </Link>
        <div
          className={classes.user_profile__dropdown_option}
          onClick={logoutHandler}
        >
          logout
        </div>
      </div>
    </div>
  );
}
