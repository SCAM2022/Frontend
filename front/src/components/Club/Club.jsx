import React from "react";
import "./Club.css";
import { Link } from "react-router-dom";
import cookie from "js-cookie";

import Gallery from "./Gallery/Gallery";
import video from "../../assets/club/video.mp4";
import Achivement from "../Achivement/Achivement";
import Testonomial from "../Testonomial/Testonomial";
import Past from "../Past/Past";
import CreateEventForm from "./CreateEvent/CreateEventForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const Club = (props) => {
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.cname);

  const [showModel, setShowModel] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [clubData, setClubData] = React.useState(null);

  const showModelHandler = () => {
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };
  console.log("ClubName ->", clubName);

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
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const getUser = async () => {
      console.log("0<", cookie.get("SCAM_TOKEN"));

      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
        id: `${cookie.get("SCAM_USER_ID")}`,
      });
      return r;
    };
    getUser()
      .then((r) => {
        console.log("userDetail->", r);
        setUserData(r.data);
      })
      .catch((e) => {
        console.log("userError ->", e);
      });
  }, []);
  const clubJoinHandler = () => {
    const joinClub = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/joinclub`,
        {
          name: userData.name,
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
      })
      .catch((e) => {
        console.log("error while joining");
      });
  };

  console.log("->", clubName);
  return (
    <div className="club">
      <div className="club_container">
        {showModel && <CreateEventForm closeModel={closeModel} />}
        <div className="club_body">
          <div className="club_head">
            <div className=" club_left">
              <div className="club_links">
                <Link to="">
                  <li onClick={showModelHandler}>Create Event</li>
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
                <div className={"club_description"}>
                  <span>{clubData?.disc}</span>
                </div>

                <div className="join_btn" onClick={clubJoinHandler}>
                  <button>Join</button>
                </div>
              </div>
              <div className="club_info_right">
                {/* <img
                src={`${process.env.REACT_APP_API_KEY}/${clubData?.clubImage}`}
                alt="club-pic"
              /> */}
                <h4 className="sub_heading">{clubData?.goal}</h4>
              </div>
            </div>
          </div>
          <Gallery />
          <Achivement />
          <Testonomial />
          <Past />
        </div>
      </div>
    </div>
  );
};

export default Club;
