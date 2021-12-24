import React from "react";
import "./Club.css";
import {Link} from "react-router-dom"
import Gallery from "./Gallery/Gallery"
import video from "../../assets/club/video.mp4"
import Achivement from "../Achivement/Achivement";
import Testonomial from "../Testonomial/Testonomial";
import Past from "../Past/Past";


const Club = () => {
  return (
    <div className="club">
      <div className="container-fluid">

        <div className="row">
          <div className="col col-md-3 col-lg-3 col-sm-2 bg-primary club_left">
            <div className="club_links">
             <Link to ="">
              <li>Create Event</li>
             </Link>
            <Link to ="">
                  <li>Gallery</li>
            </Link>
              <Link to ="">
                  <li>Club talk</li>
              </Link>
              <Link to= "/member">
                  <li>Member List</li>
              </Link>
               <Link to= "">
                   <li>Club Achivement</li>
              </Link>
               <Link to= "">
                   <li>Past Event</li>
              </Link>
              
             
            </div>
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
               <source src={video} type="video/mp4"/>
               <source src={video} type="video/obb"/>
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
  );
};

export default Club;
