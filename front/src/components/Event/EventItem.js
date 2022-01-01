import React from "react";
import "./EventItem.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const EventItem = () => {
  return (
    <div className="eventItem">
      <div className="eventItem_left">
        <span>START ON</span>
        <span>05</span>
        <span>JAN</span>
      </div>
      <span className="eventItem_underline"></span>
      <div className="eventItem_center">
        <h4>Event Name</h4>
        <div className="eventItem_centr_info">
          <span>CONTEST</span>
          <span className="eventItem_centr_info_underline"></span>
          <span>
            <AccessTimeIcon className="icon" />
            06:00 PM IST
          </span>
        </div>
      </div>
      <div className="eventItem_right">
        <button>
          SET REMINDER <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default EventItem;
