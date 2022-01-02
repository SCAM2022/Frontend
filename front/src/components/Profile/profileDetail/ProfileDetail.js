import React from "react";
import "./ProfileDetail.css";

const ProfileDetail = ({ userData, ...props }) => {
  const JoinClubString = (clubs) => {
    let clubString = "";
    clubs?.map((club, i) => {
      clubString += club.clubName;
      if (i !== clubs.length - 1) {
        clubString += ", ";
      }
    });
    return clubString;
  };
  console.log("branch->", props);
  return (
    <div className="profileDetail">
      <div className="profileDetail_name profileDetail_info">
        <span>userName :</span>
        <input
          // contentEditable={`${props.edit}`}
          className={`pofileDetail_info `}
          id={`profileDetail_name`}
          onChange={(e) => props?.setName(e.target.value)}
          value={props.name}
          disabled={true}
        />
      </div>
      <div className="profileDetail_branch profileDetail_info">
        <span>Branch :</span>
        <input
          disabled={!props.edit}
          // contentEditable={`${props.edit}`}
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          id={"profileDetail_branch"}
          onChange={(e) => props?.setBranch(e.target.value)}
          value={props.branch}
        />
        {/* {br} */}
        {/* {"text"} */}
        {/* </input> */}
      </div>
      <div className="profileDetail_enroll profileDetail_info">
        <span>Enrollment No. :</span>
        <input
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          id={"profileDetail_enroll"}
          value={props.enroll}
          onChange={(e) => props?.setEnroll(e.target.value)}
          disabled={!props.edit}
        />
      </div>
      <div className="profileDetail_roll profileDetail_info">
        <span>Roll No. :</span>
        <input
          id={"profileDetail_roll"}
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          value={props.roll}
          onChange={(e) => props?.setRoll(e.target.value)}
          disabled={!props.edit}
        />
      </div>
      <div className="profileDetail_email profileDetail_info">
        <span>E-mail :</span>
        <input
          id={"profileDetail_email"}
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          value={props.email}
          onChange={(e) => props?.setEmail(e.target.value)}
          disabled={!props.edit}
        />
      </div>
      <div className="profileDetail_join profileDetail_info">
        <span>Club joined :</span>
        <input
          className={`pofileDetail_info `}
          disabled={true}
          value={JoinClubString(userData.joinedClubs)}
        />
      </div>

      <div className="profileDetail_date profileDetail_info">
        <span>Semester :</span>
        <input
          id={"profileDetail_sem"}
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          value={props.sem}
          onChange={(e) => props?.setSem(e.target.value)}
          disabled={!props.edit}
        />
      </div>
      <div className="profileDetail_date profileDetail_info">
        <span>Admission Year :</span>
        <input
          id={"profileDetail_admYear"}
          className={`pofileDetail_info ${
            props?.edit ? "profileEdit_enabled" : ""
          }`}
          value={props.admission}
          onChange={(e) => props?.setAdmission(e.target.value)}
          disabled={!props.edit}
        />
      </div>
      <div className="profileDetail_date profileDetail_info">
        <span>Last visit :</span>

        <input
          disabled={true}
          className={`pofileDetail_info "profileEdit_enabled`}
          value={userData.lastLogin}
        />
      </div>
    </div>
  );
};

export default ProfileDetail;
