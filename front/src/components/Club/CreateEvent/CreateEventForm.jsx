import { useState } from "react";
import Model from "../../Ui/Model/Model";
import classes from "./CreateEventForm.module.css";
import axios from "axios";
import cookie from "js-cookie";
import closeSvg from "../../../assets/close.svg";
import { useParams } from "react-router";

const CreateEventForm = (props) => {
  const params = useParams();
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState("");
  const [incharge, setIncharge] = useState("");
  const [goodies, setGoodies] = useState("");
  const [clubName, setClubName] = useState(params.cname);
  const [eleCreteria, setEleCreteria] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [rules, setRules] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: eventName,
      discription: description,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      location: location,
      incharge: incharge,
      clubName: clubName,
      goodies: goodies,
      eliCriteria: eleCreteria,
      timeDuration: timeDuration,
      rules: rules
    };
    props.closeModel();
    const sendDate = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/createEvent`,
        data,
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };
    sendDate()
      .then((r) => {
        console.log("resPonse eventCreation->", r);
      })
      .catch((e) => {
        console.log("error on eventCreation->", e);
      });
  };

  return (
    <Model style = {{  filter: "blur(20px)"}}>
      <div className={classes["model_container"]}>
        <div className={classes["container_heading"]}>Create Event Form</div>
        <div className={classes["model_button"]}>
          <div
            className={classes["model_close-button"]}
            onClick={props.closeModel}
          >
            <img src={closeSvg} alt="close-svg" />
          </div>
        </div>
        {/* <div className="form_container"> */}
        <form onSubmit={onSubmitHandler}>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Event Name:</label>
            <input
              type="text"
              onChange={(e) => setEventName(e.target.value)}
              value={eventName}
              required
            />
          </div>

          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Description:</label>
            <textarea
              type="text"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>
          <div className={`${classes["form_field"]}`}>
            <label htmlFor="club-name">Duration:</label>
            <div className={classes["date_duration"]}>
              <div className={classes["date_field"]}>
                <label>Start Date</label>
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                />
              </div>
              <div className={classes["date_field"]}>
                <label>End Date</label>
                <input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                />
              </div>
            </div>
          </div>

          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Start time:</label>
            <input
              type="time"
              onChange={(e) => setStartTime(e.target.value)}
              value={startTime}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Time Duration in Hrs:</label>
            <input
              type="text"
              onChange={(e) => setTimeDuration(e.target.value)}
              value={timeDuration}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Location:</label>
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Event Incharge:</label>
            <input
              type="text"
              onChange={(e) => setIncharge(e.target.value)}
              value={incharge}
              required
            />
          </div>

          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Eligibility Criteria:</label>
            <input
              type="text"
              onChange={(e) => setEleCreteria(e.target.value)}
              value={eleCreteria}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Goodies:</label>
            <input
              type="text"
              onChange={(e) => setGoodies(e.target.value)}
              value={goodies}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Rules:</label>
            <textarea
              type="text"
              rows="4"
              onChange={(e) => setRules(e.target.value)}
              value={rules}
              required
            />
          </div>
          <div className={classes["create_club-submit_button"]}>
            {/* <div
              onClick={onSubmitHandler}
              className={classes["model_submit-button"]}
            > */}
            <input type="submit" value="Submit"  className= {classes["event_submit"]}/>
            {/* Submit Form */}
            {/* </div> */}
          </div>
        </form>
      </div>
      {/* </div> */}
    </Model>
  );
};

export default CreateEventForm;
