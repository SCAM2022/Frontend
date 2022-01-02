import React from "react";
import "./Event.css";
import poster from "../../assets/eventImg.png";

const Event = () => {
  return (
    <div className="live">
      <div className="event_container">
        <div className="img_box">
          <div className="img">
            <img src={poster} alt="" />
          </div>
          <div className="img_box_text">
            <h4>
              Challenge to <span className="color">it's self</span>
              <br />
              And
              <br />
              Get ready for <br />
              <span className="color">join</span>
            </h4>
          </div>
        </div>
        <div className="live_heading">
          <h3>Events and Contest</h3>
        </div>
        <div className="events"></div>
      </div>
    </div>
  );
};

export default Event;