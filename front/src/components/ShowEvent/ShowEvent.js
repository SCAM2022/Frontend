import React from "react";
import "./ShowEvent.css";

const ShowEvent = () => {
  return (
    <div className="showEvent">
      <div className="showEvent_poster">
        <div className="showEvent_poster_container">
          <h2 className="showEvent_heading">Event Name</h2>
          <div className="showEvent_poster_info">
            <div className="showEvent_poster_info_left">
              <span className="poster_info_color">05</span>
              <span>
                JAN <br /> 2022
              </span>
            </div>
            <span className="showEvent_poster_info_underline"></span>
            <div className="showEvent_poster_info_right">
              <span>8:00 PM - 11:00 PM IST</span>
              <span>Contest Duration - 3 hours</span>
            </div>
          </div>
        </div>
      </div>
      <div className="showEvent_detail">
        <span>Event Name - DETAILS</span>
        <p>
          New users are requested to go through the below information to know
          more about the contest.
        </p>
        <div className="showEvent about">
          <h3>About Event Name:</h3>p
        </div>
        <div className="showEvent_contest_detail"></div>
        <div className="showEvent_criteria"></div>
        <div className="showEvent_rules"></div>
      </div>
    </div>
  );
};

export default ShowEvent;
