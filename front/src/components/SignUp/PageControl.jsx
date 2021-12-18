import React from "react";
import classes from "./PageControl.module.css";
function PageControl({ page, handleNextPage, handlePrevPage }) {
  return (
    <div className={classes["btn_container"]}>
      {page !== 1 && (
        <button className={classes["prev_btn"]} onClick={handlePrevPage}>
          Previous
        </button>
      )}
      {page !== 4 && (
        <button className={classes["nxt_btn"]} onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
}

export default PageControl;
