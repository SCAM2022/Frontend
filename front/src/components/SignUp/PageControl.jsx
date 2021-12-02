import React from "react";

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
      setPageDone([...pagesDone, page]);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(page - 1);
    setPageDone(pagesDone.slice(0, -1));
  };
  return (
    <div className={`pages__controls ${page === 1 && "page__control__right"}`}>
      {page !== 1 && (
        <button className="prev_btn" onClick={handlePrevPage}>
          Previous
        </button>
      )}
      <button className="next_btn" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}

export default PageControl;
