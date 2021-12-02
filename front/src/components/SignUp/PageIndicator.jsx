import React from "react";

function PageIndicator({ page }) {
  return (
    <div className="page__indicators">
      <span className={`${page === 1 && "active_page"}`}></span>
      <span className={`${page === 2 && "active_page"}`}></span>
      <span className={`${page === 3 && "active_page"}`}></span>
      <span className={`${page === 4 && "active_page"}`}></span>
    </div>
  );
}

export default PageIndicator;
