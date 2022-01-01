import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import user from "../../assets/user.png";
import "./Member.css";

const Member = () => {
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.clubName);
  const [memberList, setMemberList] = React.useState([]);
  console.log("clubName-> --", clubName);
  React.useEffect(() => {
    const getMembers = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/memberList`,
        {
          clubName: clubName,
        }
      );
      return r;
    };

    getMembers()
      .then((r) => {
        console.log("member list got", r);
        setMemberList(r?.data?.members[0]?.info);
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
          {/* {members.map((member) => {
            return (
              <>
                <Link
                  to={`/profile/${member.member}`}
                  className="member_list"
                  onClick={() => Cookies.set("SCAM_TEMP_ID", member.id)}
                >
                  <span>{member.member}</span>
                  <span>{"CSEE"}</span>
                  <span>{member.date}</span>
                </Link>
              </>
            );
          })} */}
          {memberList &&
            memberList.map((member) => {
              return (
                <>
                  <Link
                    to={`/profile/${member.prename}`}
                    className="member_list"
                    onClick={() =>
                      Cookies.set("SCAM_TEMP_ID", member?.memberId)
                    }
                    key={member._id}
                  >
                    <span>{member.prename}</span>
                    <span>{"CSE"}</span>
                    <span>{member.joinedOn}</span>
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
