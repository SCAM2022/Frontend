import React from "react";
import classes from "./PageControl.module.css";
function PageControl({
  page,
  setCurrentPage,
  pagesDone,
  setPageDone,
  handleForm,
}) {
  const handleNextPage = () => {
    if (!handleForm()) {
      setCurrentPage(page + 1);
      // setPageDone([...pagesDone, page]);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(page - 1);
    // setPageDone(pagesDone.slice(0, -1));
  };
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
