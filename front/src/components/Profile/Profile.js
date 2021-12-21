import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_header">
        <div className="profile_img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
            alt="profile-img"
          />
          <span>Basant Kuamr</span>
        </div>
        <div className="profile_edit">
          <button>profile edit</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
