import { useState } from "react";

import NewClubForm from "../NewClubForm/NewClubForm";
import classes from "./NewClub.module.css";
import clubCreatesvg1 from "../../assets/createClub/Signup-bro.svg";
import clubCreatesvg2 from "../../assets/createClub/snippets-pana.svg";

const NewClub = (props) => {
  const createClubHandler = () => {
    console.log("clicked");
    
    
    
    // props.onShowModel();
    showModelHandler();
  };
  const [showModel, setShowModel] = useState(false);
  const showModelHandler = () => {
    setShowModel(true);
  };

  const hideModelHandler = () => {
    setShowModel(false);
  };

  return (
    <>
      {showModel && <NewClubForm closeModel={hideModelHandler} />}

      <div className={classes["club_form__wrapper"]}>
        <h1>New club form</h1>
        <div className={classes["club_form-info__wrapper"]}>
          <div className={classes["club_form-logo"]}>
            <img src={clubCreatesvg2} alt="create-club-img" />
          </div>
          <div className={classes["club-form-description"]}>
            <h3>Club creation requirement:</h3>
            <ul>
              <li>Minimum of 3 members are required for creating a club</li>
              <li>Need to have an advisor assigned</li>
              <li>
                Permission document authorized by respected faculty is required
              </li>
              <li>After filing an application</li>
            </ul>
            <div className={classes["club_button-container"]}>
              <div
                className={classes["club_create-button"]}
                onClick={createClubHandler}
              >
                Create Club
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewClub;
