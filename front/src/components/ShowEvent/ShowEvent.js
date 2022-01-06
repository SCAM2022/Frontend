import React from "react";
import "./ShowEvent.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const ShowEvent = () => {
  const params = useParams();
  let [details, setDetails] = useState("");
  let [finalStime, setStime] = useState("");
  let [finalSdate, setSdate] = useState("");
  let [finalYear, setYear] = useState("");
  let [a, initTime] = useState("");
  let [b, endTime] = useState("");

  useEffect(() => {
    const getEve = async () => {
      const getEveData = await axios.post(
        `${process.env.REACT_APP_API_KEY}/fetchSingleEvent`,
        {
          eveName: params.evename,
        }
      );
      setDetails((details = getEveData.data.eveInfo[0]));
      initTime((a = new Date(details.startDate)));
      endTime((b = new Date(details.endDate)));
      setSdate((finalSdate = ("0" + a.getDate()).slice(-2)));
      setYear((finalYear = a.getFullYear()));
      var temp = "4 Feb 2011, " + details.startTime;
      var x = new Date(temp);
      setStime(
        (finalStime = x.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }))
      );
      console.log("event details->", getEveData);
    };
    getEve();
  }, []);
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
  const onClickHandler = async () => {
    let eveId;
    if (details) {
      eveId = details._id;
    }
    const sendList = await axios.post(
      `${process.env.REACT_APP_API_KEY}/addParticipant`,
      {
        eveId: eveId,
        userId: `${Cookies.get("SCAM_USER_ID")}`,
      }
    );
    console.log(sendList);
  };
  return (
    <div className="showEvent">
      <div className="showEvent_poster">
        <div className="showEvent_poster_container">
          <h2 className="showEvent_heading">
            {details ? details.title : details}
          </h2>
          <div className="showEvent_poster_info">
            <div className="showEvent_poster_info_left">
              <span className="poster_info_color">{finalSdate}</span>
              <span>
                {a ? monthNames[a.getMonth()] : null} <br /> {finalYear}
              </span>
            </div>
            <span className="showEvent_poster_info_underline"></span>
            <div className="showEvent_poster_info_right">
              <span>{finalStime} - 11:00 PM IST</span>
              <span>
                Contest Duration - {details ? details.timeDuration : details}{" "}
                hours
              </span>
            </div>
          </div>
        </div>
        <div className="showEvent_prize">
          <h3>Prize : {details ? details.goodies : details}</h3>
        </div>
        <div className="showEvent_btn">
          <button onClick={onClickHandler}>JOIN</button>
          {/* <button className="setReminder">SET REMINDER</button> */}
        </div>
        <Link to={`participant`}>
          <button className="participant_btn">View Participant</button>
        </Link>
      </div>
      <div className="showEvent_detail">
        <span>Event - DETAILS</span>
        <div className="showEvent_about">
          <h3>Description:</h3>
          <p>{details ? details.discription[0] : details}</p>
        </div>
        <div className="showEvent_about">
          <h3>Organizing Club:</h3>
          <p>{details ? details.createdBy : details}</p>
        </div>
        <div className="showEvent_contest_detail">
          <h3>Contest Detail</h3>
          <li>
            <strong>Duration:</strong>{" "}
            {details ? details.timeDuration : details} hours
          </li>
          <li>
            <strong>Start Date:</strong> {details ? details.startDate : details}
          </li>
          <li>
            <strong>End Date:</strong> {details ? details.endDate : details}{" "}
          </li>
        </div>
        <div className="showEvent_criteria">
          <h3>Contest Criteria</h3>
          <p>{details ? details.eliCriteria : details}</p>
        </div>
        <div className="showEvent_about">
          <h3>Destination:</h3>
          <p>{details ? details.location : details}</p>
        </div>
        <div className="showEvent_about">
          <h3>Event Incharge:</h3>
          <p>{details ? details.eventIncharge : details}</p>
        </div>
        <div className="showEvent_rules">
          <h3>Rules and Regulations:</h3>
          <li>{details ? details.rules : details}</li>
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
