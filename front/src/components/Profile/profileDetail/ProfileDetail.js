import React from "react";
import "./ProfileDetail.css";
import { ProfileInfo } from "../ProfileInfo";

const ProfileDetail = () => {
  return (
    <div className="profileDetail">
      {ProfileInfo.map((detail) => {
        return (
          <>
            <div className="profileDetail_name profileDetail_info">
              <span>userName :</span>
              <span>{detail.name}</span>
            </div>
            <div className="profileDetail_branch profileDetail_info">
              <span>Branch :</span>
              <span>{detail.branch}</span>
            </div>
            <div className="profileDetail_enroll profileDetail_info">
              <span>Enrollment No. :</span>
              <span>{detail.enroll}</span>
            </div>
            <div className="profileDetail_roll profileDetail_info">
              <span>Roll No. :</span>
              <span>{detail.roll}</span>
            </div>
            <div className="profileDetail_email profileDetail_info">
              <span>E-mail :</span>
              <span>{detail.email}</span>
            </div>
            <div className="profileDetail_join profileDetail_info">
              <span>Club joined :</span>
              <span>{detail.join}</span>
            </div>
            <div className="profileDetail_last profileDetail_info">
              <span>Last visit :</span>
              <span>{detail.last}</span>
            </div>
            <div className="profileDetail_register profileDetail_info">
              <span>Registered :</span>
              <span>{detail.registered}</span>
            </div>
            <div className="profileDetail_date profileDetail_info">
              <span>Join Date :</span>
              <span>{detail.date}</span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProfileDetail;
