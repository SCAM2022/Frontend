import { useState } from "react";
import Model from "../../Ui/Model/Model";
import classes from "./CreateEventForm.module.css";
import axios from "axios";

const CreateEventForm = (props) => {
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState("");
  const [incharge, setIncharge] = useState("");
  const onSubmitHandler = () => {};

  return (
    <Model>
      <div className={classes["model_container"]}>
        <div className={classes["model_button"]}>
          <div
            className={classes["model_close-button"]}
            onClick={props.closeModel}
          >
            X
          </div>
        </div>
        {/* <div className="form_container"> */}
        <form action={onSubmitHandler}>
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
            <label htmlFor="club-name">Category:</label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
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
          <div
            className={`${classes["form_field"]} ${classes["date_duration"]}`}
          >
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
          <div className={classes["create_club-submit_button"]}>
            {/* <div
              onClick={onSubmitHandler}
              className={classes["model_submit-button"]}
            > */}
            <input type="submit" value="Submit" />
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