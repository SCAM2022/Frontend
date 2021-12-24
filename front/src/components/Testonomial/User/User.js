import React from "react";
import "./User.css";

const User = ({ name, branch }) => {
  return (
    <div className="user">
      <img
        src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
        alt="user"
      />
      <p className="user_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum
        numquam animi cum debitis consequuntur adipisci.
      </p>
      <strong className="user_name">{name}</strong>
      <small className="user_branch">{branch}</small>
    </div>
  );
};

export default User;
