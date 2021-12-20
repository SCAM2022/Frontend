import { useState } from "react";
import Model from "../Ui/Model/Model";
import classes from "./NewClubForm.module.css";
import axios from "axios";

const NewClubForm = (props) => {
  const [clubName, setClubName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [authBy, setAuthBy] = useState("");
  const [authFile, setAuthFile] = useState(null);

  const onFileChange = (e) => {
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] });
    setAuthFile(e.target.files[0]);
    const formData = new FormData();

    // Update the formData object
    formData.append("authFile", authFile, authFile.name);
  };

  const onSubmitHandler = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("authFile", authFile, authFile.name);

    // Details of the uploaded file
    console.log(authFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

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
            <label htmlFor="club-name">Club Name:</label>
            <input
              type="text"
              onChange={(e) => setClubName(e.target.value)}
              value={clubName}
              required
            />
          </div>

          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Goal:</label>
            <input
              type="text"
              onChange={(e) => setGoal(e.target.value)}
              value={goal}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Authorized By:</label>
            <input
              type="text"
              onChange={(e) => setAuthBy(e.target.value)}
              value={authBy}
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
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Authorized Document:</label>

            <input
              type="file"
              name="Banner"
              onChange={onFileChange}
              className="logo-file-input"
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

export default NewClubForm;
