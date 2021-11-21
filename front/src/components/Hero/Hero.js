import React from 'react'
import "./Hero.css";

function Hero(props) {
    return (
        <div className = "main">
            <div className="main_left">
                <div className="heading">
                    <h1>LEGENDARY <span className = "club">CLUB</span><br/>
                    MAKE <br/> LEGENDARY PEOPLE</h1>
                </div>
                <div className="btn">
                    <a href="#">JOIN</a>
                </div>
            </div>
            <div className="main_right">
             <div className="img_container">
             </div>
             <div className="social">
             </div>
            </div>
            
        </div>
    )
}

export default Hero
