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
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Club = (props) => {
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.cname);

  const [showModel, setShowModel] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

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
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user`,
        {
          id: `${cookie.get("SCAM_USER_ID")}`,
        },
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };
  }, []);

  React.useEffect(() => {
    const getUser = async () => {
      console.log("0<", cookie.get("SCAM_TOKEN"));

      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user`,
        {
          id: `${cookie.get("SCAM_USER_ID")}`,
        },
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };
    getUser()
      .then((r) => {
        console.log("userDetail->", r);
        setUserData(r.data);

        const joinClub = async () => {
          const res = await axios.post(
            `${process.env.REACT_APP_API_KEY}/joinclub`,
            {
              name: r.data.name,
              Role: "member",
              joinedOn: new Date().toISOString(),
              clubName: clubName,
            },
            {
              headers: {
                Authorization: `${cookie.get("SCAM_TOKEN")}`,
              },
            }
          );
          return res;
        };
        joinClub()
          .then((r) => {
            console.log("joined successfully");
          })
          .catch((e) => {
            console.log("error while joining");
          });
      })
      .catch((e) => {
        console.log("userError ->", e);
      });
  }, []);

  return (
    <div className="club">
      <div className="container-fluid">
        {showModel && <CreateEventForm closeModel={closeModel} />}
        <div className="row">
          <div className="col col-md-3 col-lg-3 col-sm-2 bg-primary club_left">
            <div className="club_links">
<<<<<<< HEAD
              <div>
=======
              <Link to="">
>>>>>>> 479a8fa07c33c76343037f22bc163a5df554a615
                <li onClick={showModelHandler}>Create Event</li>
              </div>
              <Link to="">
                <li>Gallery</li>
              </Link>
              <Link to="">
                <li>Club talk</li>
<<<<<<< HEAD
=======
              </Link>
              <Link to="/member">
                <li>Member List</li>
              </Link>
              <Link to="">
                <li>Club Achivement</li>
>>>>>>> 479a8fa07c33c76343037f22bc163a5df554a615
              </Link>
          </div>
          <div className="col col-md-9 col-lg-9 col-sm-10 bg-dark club_right">
            <div className="club_heading">
              <h2 className="heading">Coding Club</h2>
              <h4 className="sub_heading">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                esse pariatur doloribus aspernatur nemo, ut labore vero quisquam
                sed ab?
              </h4>
            </div>
            <div className="club_video">
              <video width="350" height="300" muted controls>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/obb" />
              </video>
            </div>
            <div className="join_btn">
              <button>Join</button>
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
