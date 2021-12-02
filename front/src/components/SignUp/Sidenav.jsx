import React from "react";
import classes from "./Sidenav.module.css";

function Sidenav({ pageIndex, pagesDone }) {
  return (
    <div className={classes["sidenav__reg"]}>
      <div className={classes["sidenav__reg__wrapper"]}>
        <div className={classes["sidenav__reg__top"]}>
          <img src="" alt="brand__logo" />
        </div>
        <div className={classes["sidenav__reg__content"]}>
          <h3>User Sign Up</h3>
          <ul className={classes["sidenav-reg__screens"]}>
            <li>
              <span
                className={
                  ""
                  // classes[`dot ${pagesDone.includes(1) && "disable__dot"}`]
                }
              >
                {/* {pagesDone.includes(1) && <span>&#10003;</span>} */}
              </span>
              General Information
            </li>
            <li>
              <span
                className={
                  ""
                  // classes[`dot ${pagesDone.includes(2) && "disable__dot"}`]
                }
              >
                {/* {pagesDone.includes(2) && <span>&#10003;</span>} */}
              </span>
              Academic Details
            </li>
            <li>
              <span
                className={
                  ""
                  // classes[`dot ${pagesDone.includes(3) && "disable__dot"}`]
                }
              >
                {/* {pagesDone.includes(3) && <span>&#10003;</span>} */}
              </span>
              Student Details
            </li>
            <li>
              <span className={classes[`dot`]}></span>
              Success
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
