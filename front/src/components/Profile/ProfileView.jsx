import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

import ProfileDetail from "./profileDetail/ProfileDetail";
import "./Profile.css";

const ProfileView = () => {
  const [user, setUser] = React.useState([]);
  console.log("profileview");

  React.useEffect(() => {
    console.log("--profile");
    const getUser = async () => {
      // console.log("0<", Cookies.get("SCAM_TOKEN"));

      console.log("tempid->", Cookies.get("SCAM_TEMP_ID"));
      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
        id: `${Cookies.get("SCAM_TEMP_ID")}`,
      });

      Cookies.remove("SCAM_TEMP_ID");
      return r;
    };
    getUser()
      .then((r) => {
        setUser(r.data);
      })
      .catch((e) => {
        console.log("error while fetching userData in Profile!!");
      });
  }, []);

  console.log("userDetails->", user);

  return (
    <div className="profile">
      <div className="profile_header">
        <div className="profile_img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
            alt="profile-img"
          />

          <span>{user.name}</span>
        </div>
      </div>
      <div className="profile_info">
        <ProfileDetail userData={user} />
      </div>
    </div>
  );
};

export default ProfileView;
