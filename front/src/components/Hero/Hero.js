import React from 'react'
import classes from "./Hero.module.css"

function Hero(props) {
    return (
        <div className = {classes.main}>
            <div className={classes.main_left}>
                <div className={classes.heading}>
                    <h1>LEGENDARY <span className = {classes.club}>CLUB</span><br/>
                    MAKE <br/> LEGENDARY PEOPLE</h1>
                </div>
                <div className= {classes.btn}>
                    <a href="#">JOIN</a>
                </div>
            </div>
            <div className={classes.main_right}>
             <div className= {classes.img_container}>
             </div>
             <div className={classes.social}>
             </div>
            </div>
            
        </div>
    )
}

export default Hero
