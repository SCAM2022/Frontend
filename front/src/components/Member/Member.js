import React from "react";
import { Link } from "react-router-dom";
import "./Member.css";
import { members } from "./Members";
import cookie from "js-cookie";
import axios from "axios";
import Cookies from "js-cookie";

const Member = () => {
  const [memberList, setMemberList] = React.useState([]);

  React.useEffect(() => {
    const getMembers = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/memberList`,
        {
          clubName: "Coding Club",
        },
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };

    getMembers()
      .then((r) => {
        console.log("member list got", r);
        setMemberList(r.data[0].info);
      })
      .catch((e) => {
        console.log("error member->", e);
      });
  }, []);

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
                <Link to={`/profile/${member.member}`} className="member_list">
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

        {memberList &&
          memberList.map((member) => {
            return (
              <>
                <Link
                  to={`/profile/${member.member}`}
                  className="member_list"
                  onClick={() => Cookies.set("SCAM_TEMP_ID", member.id)}
                >
                  <span>{member.name}</span>
                  <span>{"CSE"}</span>
                  <span>{member.joinedOn}</span>
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Member;
