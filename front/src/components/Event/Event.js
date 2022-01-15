import React from "react";
import "./Event.css";
import poster from "../../assets/eventImg.png";
import { useState, useEffect } from "react";
import axios from "axios";
import EventItem from "./EventItem";
// import styled from "@emotion/styled";
// import {eventDetail} from "./EventItemDetail";

const Event = () => {
  let [letSee, setLetsee] = useState("");
  useEffect(() => {
    const getEvents = async () => {
      const getData = await axios.get(
        `${process.env.REACT_APP_API_KEY}/fetchEvents`
      );
      console.log("before eventDetails->", getData.data.events);
      const eventDetail = getData.data.events.sort((a, b) => {
        const bdate = new Date(b?.startDate);
        const adate = new Date(a?.startDate);
        return bdate - adate;
      });
      console.log("eventDetails->", eventDetail);
      setLetsee(
        (letSee = eventDetail?.map((item) => {
          const {
            createdBy,
            discription,
            eliCriteria,
            endDate,
            startDate,
            eventIncharge,
            goodies,
            location,
            startTime,
            timeDuration,
            title,
            rules,
          } = item;

          return (
            <EventItem
              createdBy={createdBy}
              discription={discription}
              eliCriteria={eliCriteria}
              endDate={endDate}
              startDate={startDate}
              eventIncharge={eventIncharge}
              goodies={goodies}
              location={location}
              startTime={startTime}
              timeDuration={timeDuration}
              title={title}
              rules={rules}
            />
          );
        }))
      );
    };
    getEvents();
  }, []);
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
          {letSee}
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
