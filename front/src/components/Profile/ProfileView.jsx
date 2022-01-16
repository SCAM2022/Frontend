import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

import ProfileDetail from "./profileDetail/ProfileDetail";
import "./Profile.css";
import PieChart from "./PieChart/PieChart";
import DailyHeatmap from "./DailyHeatmap/DialyHeatmap";

const ProfileView = () => {
  const [user, setUser] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [enroll, setEnroll] = React.useState("");
  const [roll, setRoll] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sem, setSem] = React.useState("");
  const [admission, setAdmission] = React.useState("");
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

  React.useEffect(() => {
    setName(user.name);
    setEnroll(user.enroll);
    setRoll(user.rollno);
    setSem(user.semester);
    setEmail(user.email);
    setAdmission(user.admissionYear);
    setBranch(user.department);
  }, [user]);

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
        <ProfileDetail
          userData={user}
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          branch={branch}
          setBranch={setBranch}
          enroll={enroll}
          setEnroll={setEnroll}
          roll={roll}
          setRoll={setRoll}
          sem={sem}
          setSem={setSem}
          setEmail={setEmail}
          email={email}
          setAdmission={setAdmission}
          admission={admission}
        />
      </div>
      <div className="profile_info">
        <PieChart user={user} />
      </div>
      <div className="profile_info">
        <DailyHeatmap user={user} />
      </div>
    </div>
  );
};

export default ProfileView;
