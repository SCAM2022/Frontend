import React from "react";
// import errorIcon from "../../../assets/error.svg";
// import toastTick from "../../../assets/toastTick.svg";
import classes from "./Error.module.css";
import { MdOutlineError } from "react-icons/md";
function Error({ error, setError, success, setSuccess }) {
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }

  return (
    <div
      className={`${classes["error"]} ${error && classes["error__enable"]} ${
        success && classes["success__error error__enable"]
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={classes["error_container"]}>
        <div className={classes["error_icon"]} style={{ marginRight: "10px" }}>
          {error && (
            <MdOutlineError size={"2em"} />
            // <p>error here</p>
          )}
          {success && (
            <p>error here</p>
            // <img
            //   src={}
            //   alt="error__icon"
            //   style={{ marginRight: "15px !important" }}
            // />
          )}
        </div>
        <div className={classes["error-right-side"]}>
          <div className={classes["error_header"]}>
            <div className={classes["error_title"]}>
              {error ? error : success}
            </div>
            <div
              className={classes["error-close"]}
              data-dismiss="error"
              aria-label="Close"
              onClick={(e) => (error ? setError(false) : setSuccess(false))}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
