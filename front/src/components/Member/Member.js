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
  const [filterList, setFilterList] = React.useState([]);
  const [search, setSearch] = React.useState("");

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
        setMemberList(r?.data[0]?.info);
      })
      .catch((e) => {
        console.log("error member->", e);
      });
  }, []);

  React.useEffect(() => {
    const tmp = memberList.filter((mem) =>
      mem.prename?.toLowerCase().includes(search?.toLowerCase())
    );
    setFilterList(tmp);
  }, [search]);

  const dateFormat = (d) => {
    const today = new Date(d);
    console.log("tage-", today);
    const day = today.toLocaleDateString();

    return `${day}`;
  };

  return (
    <div className="parent_member">
      <div className="member">
        <input
          type="text"
          name="search"
          id="search"
          className="member_search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="member-lists">
          <div className="member_heading">
            <h4 className="member_name">Member</h4>
            <h4 className="member_branch">Branch</h4>
            <h4 className="member_date">Date</h4>
          </div>

          {memberList &&
            filterList.length === 0 &&
            memberList.map((member) => {
              return (
                <>
                  <Link
                    to={`/profile/${member.prename}`}
                    className="member_list"
                    onClick={() =>
                      Cookies.set("SCAM_TEMP_ID", member?.memberId)
                    }
                    key={member?.memberId}
                  >
                    <span>{member.prename}</span>
                    <span>{"CSE"}</span>
                    <span>{member.joinedOn}</span>
                  </Link>
                </>
              );
            })}
          {filterList?.length > 0 &&
            filterList.map((member) => {
              return (
                <>
                  <Link
                    to={`/profile/${member.prename}`}
                    className="member_list"
                    onClick={() =>
                      Cookies.set("SCAM_TEMP_ID", member?.memberId)
                    }
                    key={member?.memberId}
                  >
                    <span>{member.prename}</span>
                    <span>{"CSE"}</span>
                    <span>{dateFormat(member.joinedOn)}</span>
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
