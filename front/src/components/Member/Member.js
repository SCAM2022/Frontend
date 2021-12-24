import React from "react";
import { Link } from "react-router-dom";
import "./Member.css";
import { members } from "./Members";

const Member = () => {
  return (
    <div className="parent_member">
      <div className="member">
        <input
          type="text"
          name="search"
          id="search"
          className="member_search"
          placeholder="Search"
        />
        <div className="member-lists">
          <div className="member_heading">
            <h4 className="member_name">Member</h4>
            <h4 className="member_branch">Branch</h4>
            <h4 className="member_date">Date</h4>
          </div>
          {members.map((member) => {
            return (
              <>
                <Link to="/profile" className="member_list">
                  <span className="member_list-name">
                    <img src={member.img} alt="" />
                    {member.member}
                  </span>
                  <span>{member.branch}</span>
                  <span>{member.date}</span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Member;
