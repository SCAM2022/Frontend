import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar_head">
          <div className="navbar_logo">
            <h2 className="logo">
              <span className="scam">SCAM</span>
              <br />
              <span className="first_letter">S</span>tudent
              <span className="first_letter">C</span>lub
              <span className="first_letter">A</span>nd
              <span className="first_letter">A</span>ctivity
              <span className="first_letter">M</span>nagment
            </h2>
          </div>
          <div className="navbar_buttons">
            <a href="#" className="btn login">
              Login
            </a>
            <a href="#" className="btn signup">
              SignUp
            </a>
          </div>
        </div> 
        <div className="navbar_underline"></div>
        <div className="navbar_body">
          <ul className="navbar_links">
            <li className="navbar_link active">
              <a href="#">Home</a>
            </li>
            <li className="navbar_link">
            <a href="#">About</a>
            </li>
            <li className="navbar_link">
            <a href="#">Club</a>
            </li>
            <li className="navbar_link">
              <a href="#">Live Updates</a>
            </li>
            <li className="navbar_link">
              <a href="#">Contact</a>
            </li>
            <li className="navbar_link">
              <a href="#">New-Club</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
