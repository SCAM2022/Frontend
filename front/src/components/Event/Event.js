import React from "react";
import "./Event.css";
import poster from "../../assets/eventImg.png";
import EventItem from "./EventItem";
// import styled from "@emotion/styled";
import { eventDetail } from "./EventItemDetail";

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
          <span></span>
        </div>
        <div className="live_events">
          {eventDetail?.map((item) => {
            const {
              id,
              name,
              date,
              duration,
              startDate,
              endDate,
              about,
              criteria,
              rules,
            } = item;

            return (
              <>
                <EventItem
                  id={id}
                  name={name}
                  date={date}
                  duration={duration}
                  startDate={startDate}
                  endDate={endDate}
                  about={about}
                  criteria={criteria}
                  rules={rules}
                />
                <EventItem
                  id={id}
                  name={name}
                  date={date}
                  duration={duration}
                  startDate={startDate}
                  endDate={endDate}
                  about={about}
                  criteria={criteria}
                  rules={rules}
                />
              </>
            );
          })}
          {/* <h4>MORE EVENTS</h4> */}
          {/* <EventItem />
          <EventItem />
          <EventItem /> */}
        </div>
        <div className="events"></div>
      </div>
    </div>
  );
};

export default Event;
