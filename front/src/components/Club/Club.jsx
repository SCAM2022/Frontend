import React from "react";
import "./Club.css";
import { Link } from "react-router-dom";

import Gallery from "./Gallery/Gallery";
import video from "../../assets/club/video.mp4";
import Achivement from "../Achivement/Achivement";
import Testonomial from "../Testonomial/Testonomial";
import Past from "../Past/Past";
import CreateEventForm from "./CreateEvent/CreateEventForm";
import axios from "axios";

import { useParams } from "react-router-dom";

import Typical from "react-typical";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import Error from "../Ui/Error/Error";
import { setUser } from "../../actions/userAction";

import JoinSuccess from "./Success/JoinSuccess";

const Club = (props) => {
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.cname);

  const [showModel, setShowModel] = React.useState(false);
  // const [userData, setUserData] = React.useState(null);
  const [clubData, setClubData] = React.useState(null);
  const [error, setError] = React.useState("");
  const [alreadyJoined, setAlreadyJoined] = React.useState("");
  const [joinedModel, setJoinedModel] = React.useState("");
  const [joining, setJoining] = React.useState(false);

  const showModelHandler = () => {
    setShowModel(true);
  };
  const showJoinedModelHandler = () => {
    setJoinedModel(true);
  };
  const closeModel = () => {
    setJoinedModel(false);
    setShowModel(false);
  };
  console.log("ClubName ->", clubName);

  React.useEffect(() => {
    let found = false;
    console.log("testting->", props?.userData);
    if (props?.userData) {
      props?.userData?.joinedClubs?.length > 0 &&
        props.userData.joinedClubs.map((c) => {
          if (c.clubName === clubName) {
            found = true;
          }
        });
    }

    setAlreadyJoined(found);
  }, [props?.userData]);

  React.useEffect(() => {
    // fetching clubDatas
    const getClubData = async () => {
      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/club`, {
        clubName: clubName,
      });
      return r;
    };
    getClubData().then((r) => {
      console.log("clubData response->", r);
      setClubData(r.data);
    });
    window.scrollTo(0, 0);
  }, []);

  // React.useEffect(() => {
  //   const getUser = async () => {
  //     console.log("0<", cookie.get("SCAM_TOKEN"));

  //     const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
  //       id: `${cookie.get("SCAM_USER_ID")}`,
  //     });
  //     return r;
  //   };
  //   getUser()
  //     .then((r) => {
  //       console.log("userDetail->", r);
  //       setUserData(r.data);
  //     })
  //     .catch((e) => {
  //       console.log("userError ->", e);
  //     });
  // }, []);
  const clubJoinHandler = () => {
    console.log("userData->", props?.userData);
    if (!props?.userData) {
      console.log("login First");
      setError("login Before joining");

      return;
    }
    setJoining(true);
    showJoinedModelHandler();
    // return;
    const joinClub = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/joinclub`,
        {
          name: props?.userData?.name,
          Role: "member",
          joinedOn: new Date().toISOString(),
          clubName: clubName,
          id: `${Cookies.get("SCAM_USER_ID")}`,
        }
      );
      return res;
    };

    joinClub()
      .then((r) => {
        console.log("joined successfully", r);
        const getUser = async () => {
          // console.log("0<", Cookies.get("SCAM_TOKEN"));

          const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
            id: `${Cookies.get("SCAM_USER_ID")}`,
          });
          return r;
        };
        if (Cookies.get("SCAM_USER_ID"))
          getUser()
            .then((r) => {
              props.setUser(r.data);
              setJoining(false);
            })
            .catch((e) => {
              console.log("error while fetching userData in clubJoining!!", e);
              setError("Error while joining");
              closeModel();
              setJoining(false);
            });
      })
      .catch((e) => {
        console.log("error while joining");
        setError("Joining failed!");
        setJoining(false);
      });
  };

  console.log("->", clubName, alreadyJoined);
  return (
    <>
      <Error error={error} setError={setError} />
      {joinedModel && <JoinSuccess closeModel={closeModel} joining={joining} />}
      <div className="club">
        <div className="club_container">
          {showModel && <CreateEventForm closeModel={closeModel} />}
          <div className="club_body">
            <div className=" club_left">
              <div className="club_links">
                <Link to={`/${clubName}/createEvent`}>
                  <li>Create Event</li>
                </Link>
                <Link to="">
                  <li>Gallery</li>
                </Link>
                <Link to="">
                  <li>Club talk</li>
                </Link>
                <Link to={`/${clubName}/member`}>
                  <li>Member List</li>
                </Link>
                <Link to="">
                  <li>Club Achivement</li>
                </Link>
              </div>
            </div>
            <div className=" club_right">
              <div className="club_heading_left">
                <h2 className="heading">{clubData?.name}</h2>
                <h4 className="sub_heading">{clubData?.goal}</h4>
                <span className={"club_description"}>{clubData?.disc}</span>
                <div
                  className="join_btn"
                  onClick={() => {
                    console.log("click->", !alreadyJoined);
                    // if (alreadyJoined)
                    //     return;
                    return !alreadyJoined && clubJoinHandler();
                  }}
                >
                  <button>{alreadyJoined ? "Already Joined" : "Join"}</button>
                </div>
              </div>
              <div className="club_info_right">
                <span>
                  <Typical loop={Infinity} steps={["As engineers,", 3000]} />
                </span>
                <span className="qoute2">
                  <Typical
                    loop={Infinity}
                    steps={[
                      "We were going to be in a position to change the world-",
                      5000,
                      "",
                      300,
                    ]}
                  />
                </span>
                <span className="qoute3">
                  <Typical
                    loop={Infinity}
                    steps={["Not just study it.", 8000, "", 5000]}
                  />
                </span>
              </div>
            </div>
          </div>
          <Gallery />
          <Achivement />
          <Testonomial />
          <Past />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});
const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => dispatch(setUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Club);
