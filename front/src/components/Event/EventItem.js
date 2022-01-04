import React from "react";
import "./EventItem.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const EventItem = ({
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
}) => {
  var a = new Date(startDate);
  var startDate = ("0" + a.getDate()).slice(-2);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var temp = "4 Feb 2011, " + startTime;
  var x = new Date(temp);
  var finalTime = x.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <Link to={`/eventShow/${title}`}>
      <div className="eventItem">
        <div className="eventItem_left">
          <span>START ON</span>
          <span>{startDate}</span>
          <span>{monthNames[a.getMonth()]}</span>
        </div>
        <span className="eventItem_underline"></span>
        <div className="eventItem_center">
          <h4>{title}</h4>
          <div className="eventItem_centr_info">
            <span>Contest</span>
            <span className="eventItem_centr_info_underline"></span>
            <span>
              <AccessTimeIcon className="icon" />
              {finalTime} IST
            </span>
          </div>
        </div>
        <div className="eventItem_right">
          <button>
            SET REMINDER <NavigateNextIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
