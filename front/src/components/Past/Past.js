import React from "react";
import "./Past.css";
import Event from "./Event/Event";

const Past = () => {
  return (
    <div className="past">
      <div className="past_heading">
        <h2>PAST EVENT</h2>
        <span className="past_underline"></span>
      </div>
      <div className="events">
        <Event
          event={"Event-1"}
          winner={"Fazil"}
          certificate={"Yes"}
          prize={"2000"}
          date={"12/5/2021"}
        />
        <Event
          event={"Event-2"}
          winner={"Yogesh"}
          certificate={"Yes"}
          prize={"6000"}
          date={"8/2/2018"}
        />
        <Event
          event={"Event-3"}
          winner={"Awek"}
          certificate={"Yes"}
          prize={"5000"}
          date={"19/9/2021"}
        />
        <Event
          event={"Event-4"}
          winner={"RITU"}
          certificate={"Yes"}
          prize={"10,000"}
          date={"7/2/2021"}
        />
      </div>
    </div>
  );
};

export default Past;
