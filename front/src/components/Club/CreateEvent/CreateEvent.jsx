import React from "react";
import classes from "./CreateEvent.module.css";
import eventBg from "../../../assets/eventForm/eventBg.png";
import cal from "../../../assets/eventForm/calendar.svg";
import caltim from "../../../assets/eventForm/calendar-time.svg";
import chk from "../../../assets/eventForm/checklist.svg";
import win from "../../../assets/eventForm/winner.png";
import win2 from "../../../assets/eventForm/win2.svg";
import CreateEventForm from "./CreateEventForm";

export default function CreateEvent(props) {
  const [showModel, setShowModel] = React.useState(false);

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <>
      {showModel && <CreateEventForm closeModel={closeModel} />}

      <div className={classes["event_form__wrapper"]}>
        <div className={classes["event_create-heading"]}>
          <h1>Create Event</h1>
        </div>
        <div className={classes["event_form_body"]}>
          <div className={classes["event_section"]}>
            <div className={classes["event_form_img"]}>
              <img src={cal} alt="" />
            </div>
            <div className={classes["event_detail"]}>
              <h4>SELECT YOUR DATE OF CHOICE</h4>
              <ul className={classes["event_form_content"]}>
                <li>CHOOSE </li>
                <li>EDIT </li>
                <li>CHANGE</li>
                <li>FINALIZE</li>
              </ul>
            </div>
          </div>
          <div className={classes["event_section"]}>
            <div className={classes["event_detail"]}>
              <h4>CHOOSE TIME PERIOD AS PER SITUATION</h4>
              <ul className={classes["event_form_content"]}>
                <li>SET AS PER TIME ADJUSTMENT</li>
                <li>CHANGE IF REQUIRED</li>
                <li>SYNC WITH ACADEMIC TIMETABEL</li>
              </ul>
            </div>
            <div className={classes["event_form_img"]}>
              <img src={caltim} alt="" />
            </div>
          </div>
          <div className={classes["event_section"]}>
            <div className={classes["event_form_img"]}>
              <img src={chk} alt="" />
            </div>
            <div className={classes["event_detail"]}>
              <h4>SET YOUR ELIGIBILITY CRITERIA</h4>
              <ul className={classes["event_form_content"]}>
                <li>FILTER YOUR CANDIDATES</li>
                <li>SET AS PER REQUIREMENT</li>
                <li>EDIT WHENEVER REQUIRED</li>
                <li>CHECK THE FINAL LIST</li>
              </ul>
            </div>
          </div>
          <div className={classes["event_section"]}>
            <div className={classes["event_detail"]}>
              <h4>GET A CHANCE TO GET GOODIES</h4>
              <ul className={classes["event_form_content"]}>
                <li>CHANCE TO WIN BIG</li>
                <li>GET CERTIFICATE</li>
                <li>CHANCE TO ENTER HALL OF FAME</li>
                <li>SHOW YOUR ACHIEVEMENT</li>
              </ul>
            </div>
            <div className={classes["event_form_img"]}>
              <img src={win2} alt="" />
            </div>
          </div>
        </div>
        <div className={classes["event_create-container"]}>
          <h2>Present the Opportunity to gain glory, Create Event Now:</h2>
          <div className={classes["button-container"]}>
            <div className={classes["btn"]}>
              <span onClick={() => setShowModel(true)}>Create Event</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
