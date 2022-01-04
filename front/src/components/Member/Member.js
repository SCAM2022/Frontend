import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Member.css";
import MemberList from "./MemberList";
import { connect } from "react-redux";
import Error from "../Ui/Error/Error";

const Member = (props) => {
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.clubName);
  const [memberList, setMemberList] = React.useState([]);
  const [president, setPresident] = React.useState([]);
  const [filterList, setFilterList] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState("");

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
        r?.data[0]?.info?.map((mem) => {
          if (mem.Role === "President") {
            setPresident(mem);
          }
        });
      })
      .catch((e) => {
        console.log("error member->", e);
      });
  }, []);

  const checkUserEligibility = () => {
    console.log("testting eligibility->", props?.userData);
    if (props?.userData) {
      if (props?.userData._id === president.memberId) {
        return true;
      }
    }
    return false;
  };

  const removeMemberHandler = (id) => {
    if (!props?.userData) {
      console.log("login to remove user");
      setError("login first to remove member");
      return;
    }
    const eligible = checkUserEligibility();
    if (!eligible) {
      console.log("need to be president to remove member");
      setError("Only president can remove members");
      return;
    }
    if (president.memberId === id) {
      setError("President can't leave the club");
      return;
    }

    const removeFromClub = async (clubName, userId) => {
      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/leftClub`, {
        clubName: clubName,
        id: userId,
      });
      return r;
    };

    removeFromClub(clubName, id)
      .then((r) => {
        console.log("member removed->", r);
      })
      .catch((e) => {
        console.log("error member->", e);
      });
  };
  React.useEffect(() => {
    const tmp = memberList.filter((mem) =>
      mem.prename?.toLowerCase().includes(search?.toLowerCase())
    );
    setFilterList(tmp);
  }, [search]);

  return (
    <>
      <Error error={error} setError={setError} />
      <div className="parent_member">
        <div className="member_heading">
          <h3>{clubName}'s</h3> <br />
          <h4>Member List</h4>
        </div>
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
            {memberList &&
              filterList.length === 0 &&
              memberList.map((member) => {
                return (
                  <MemberList
                    member={member}
                    clubName={clubName}
                    removeMemberHandler={removeMemberHandler}
                  />
                );
              })}
            {filterList?.length > 0 &&
              filterList.map((member) => {
                return (
                  <MemberList
                    member={member}
                    clubName={clubName}
                    removeMemberHandler={removeMemberHandler}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps, null)(Member);
