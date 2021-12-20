import React, { useState } from "react";
import "./Achivement.css";

function Achivement() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="achivement">
      <div className="achivement_heading">
        <h2>Achivement</h2>
        <span className="achivement_underline"></span>
      </div>
      <div className="achivement_box">
        {isTrue ? (
          <p>Here is all achivement</p>
        ) : (
          <p>No achivement are here !</p>
        )}
      </div>
    </div>
  );
}

export default Achivement;
