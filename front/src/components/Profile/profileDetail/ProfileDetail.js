import React from "react";
import "./ProfileDetail.css";
import { ProfileInfo } from "../ProfileInfo";

const ProfileDetail = () => {
  return (
    <div className="profileDetail">
      {ProfileInfo.map((detail) => {
        return (
          <>
            <div className="profileDetail_name">
              <span>userName :</span>
              <span>{detail.name}</span>
            </div>
            <div className="profileDetail_branch">
              <span>Branch :</span>
              <span>{detail.branch}</span>
            </div>
            <div className="profileDetail_enroll">
              <span>Enrollment No. :</span>
              <span>{detail.enroll}</span>
            </div>
            <div className="profileDetail_roll">
              <span>Roll No. :</span>
              <span>{detail.roll}</span>
            </div>
            <div className="profileDetail_email">
              <span>E-mail :</span>
              <span>{detail.email}</span>
            </div>
            <div className="profileDetail_join">
              <span>Club joined :</span>
              <span>{detail.join}</span>
            </div>
            <div className="profileDetail_last">
              <span>Last visit :</span>
              <span>{detail.last}</span>
            </div>
            <div className="profileDetail_register">
              <span>Registered :</span>
              <span>{detail.registered}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProfileDetail;
