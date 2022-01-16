import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

import ProfileDetail from "./profileDetail/ProfileDetail";
import "./Profile.css";
import PieChart from "./PieChart/PieChart";
import DailyHeatmap from "./DailyHeatmap/DialyHeatmap";

const Profile = () => {
  const [user, setUser] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [enroll, setEnroll] = React.useState("");
  const [roll, setRoll] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sem, setSem] = React.useState("");
  const [admission, setAdmission] = React.useState("");

  React.useEffect(() => {
    const getUser = async () => {
      // console.log("0<", Cookies.get("SCAM_TOKEN"));

      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
        id: `${Cookies.get("SCAM_USER_ID")}`,
      });
      return r;
    };
    getUser()
      .then((r) => {
        setUser(r.data);
      })
      .catch((e) => {
        console.log("error while fetching userData in Profile!!", e);
      });
  }, []);

  console.log("userDetails->", user);

  React.useEffect(() => {
    setName(user.name);
    setEnroll(user.enroll);
    setRoll(user.rollno);
    setSem(user.semester);
    setEmail(user.email);
    setAdmission(user.admissionYear);
    setBranch(user.department);
  }, [user]);

  const handleUpdate = (id) => {
    const data = document.querySelector(`#${id}`);
  };
  const editProfileHandler = () => {
    if (edit) {
      const updateUser = async () => {
        // console.log("0<", Cookies.get("SCAM_TOKEN"));

        const r = await axios.put(
          `${process.env.REACT_APP_API_KEY}/updateUser`,
          {
            id: `${Cookies.get("SCAM_USER_ID")}`,
            ...user,
            name: name,
            email: email,
            enroll: enroll,
            rollno: roll,
            semester: sem,
            department: branch,
            admissionYear: admission,
          }
        );
        return r;
      };
      updateUser()
        .then((r) => {
          console.log("updateuser res->", r);
        })
        .catch((e) => {
          console.log("error while fetching userData in Profile!!", e);
        });

      setEdit(false);
    } else {
      setEdit(true);
    }
  };

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
        <div className="profile_edit" onClick={editProfileHandler}>
          {!edit ? (
            <button>profile edit</button>
          ) : (
            <button>Save Profile</button>
          )}
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

export default Profile;
