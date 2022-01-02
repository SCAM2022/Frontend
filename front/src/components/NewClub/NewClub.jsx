import { useState } from "react";

import NewClubForm from "../NewClubForm/NewClubForm";
import classes from "./NewClub.module.css";
import clubCreatesvg2 from "../../assets/createClub/snippets-pana.svg";
import Error from "../Ui/Error/Error";
import { connect } from "react-redux";

const NewClub = (props) => {
  const [error, setError] = useState(false);

  const createClubHandler = () => {
    console.log("clicked");
    if (!props?.userData) {
      console.log("login first for creating club");
      setError("Login is needed for new club formation");
      return;
    }
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
      <Error error={error} setError={setError} />

      {showModel && (
        <NewClubForm
          closeModel={hideModelHandler}
          error={error}
          setError={setError}
        />
      )}

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
const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

export default connect(mapStateToProps)(NewClub);
