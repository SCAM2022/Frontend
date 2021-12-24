import React from "react";

// CSS
import classes from "./Top.module.css";

// file
import ClubList from "../topClubs/List";
import { NavLink } from "react-router-dom";

function Top() {
  return (
    <div className={classes.top_clubs}>
      <div className={classes.heading}>
        <h2>Top Clubs</h2>
      </div>
      {/* <div className={classes.viewAll}>
        <NavLink to={"/"}>View all</NavLink>
      </div> */}

      <div className={classes.row}>
        {ClubList.map((data) => {
          const { logo, description } = data;
          return (
            <div className={classes["club"]}>
              <h2>{logo}</h2>
              <span>{description}</span>
              <NavLink to={"/"} className={classes.view}>
                View
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Top;
