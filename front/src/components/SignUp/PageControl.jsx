import React from "react";
import classes from "./PageControl.module.css";
function PageControl({ page, handleNextPage, handlePrevPage }) {
  return (
    <div className={classes["btn_container"]}>
      {page !== 1 && page < 4 && (
        <button className={classes["prev_btn"]} onClick={handlePrevPage}>
          Previous
        </button>
      )}
      {page < 4 && (
        <button className={classes["nxt_btn"]} onClick={handleNextPage}>
          Next
        </button>
      )}
      {page === 4 && (
        <button className={classes["suc_btn"]} onClick={handleNextPage}>
          Go to LogIn
        </button>
      )}
    </div>
  );
}
// gobhi matar simla gazar aloo
export default PageControl;
