import React, { useState } from "react";
import "./Achivement";

function Achivement() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="achivement">
      <h2 className="achivement_heading">Achivement</h2>
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
