import React, { useState } from "react";
import "./Achivement.css";
import { achivementList } from "./AchivementList";
import winner from "../../assets/winner.gif";

function Achivement() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className="achivement">
      <div className="achivement_heading">
        <h2>Achivement</h2>
        <span className="achivement_underline"></span>
      </div>
      <div className="achivement_box">
        {isTrue ? (
          <div className="achivement_row">
            {achivementList.map((item) => {
              return (
                <div className="achivement_item" id={item.id}>
                  <h4>{item.name}</h4>
                  <button>Hover</button>
                  <div className="achivement_item_info">
                    <img src={winner} alt="" />
                    <h4>{item.position}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No achivement are here !</p>
        )}
      </div>
    </div>
  );
}

export default Achivement;
