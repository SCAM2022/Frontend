import React from "react";
import "./Testonomial.css";
import User from "./User/User";

const Testonomial = () => {
  return (
    <div className="testonomial">
      <div className="testonomial_heading">
        <h2>Testonomials</h2>
        <span className="testonomial_underline"></span>
      </div>
      <div className="users">
        <User name={"Basant"} branch={"cse"} />
        <User name={"Balram"} branch={"cse"} />
        <User name={"Khem"} branch={"cse"} />
        <User name={"Fazil"} branch={"cse"} />
      </div>
    </div>
  );
};

export default Testonomial;
