import React from "react";
import "./Event.css";

const Event = ({ event, date, winner, certificate, prize }) => {
  return (
    <div className="event">
      <h4>{event} </h4>
      <span style={{ fontSize: "14px", fontWeight: "600" }}>{date}</span>
      <p>
        <strong>Winner -</strong>
        <strong>{winner}</strong>
      </p>
      <p>
        <strong>Certificate -</strong>
        <strong>{certificate}</strong>
      </p>
      <p>
        <strong>Prize -</strong>
        <strong> ₹ {prize}</strong>
      </p>
    </div>
  );
};

export default Event;
