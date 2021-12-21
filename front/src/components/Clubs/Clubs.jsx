

import React from 'react'
import classes from './Clubs.module.css';
// import Navbar from '../Navbar/Navbar'
// import club from "../../assets/code.jpg"
import {ClubList} from "./ClubList";
import {Link} from "react-router-dom";

const Clubs = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={classes.Clubs}>
              <div className={classes.Clubs_heading}>
                  <h2 className ={classes.heading}>ALL CLUBS HERE</h2>
                  <span>There is present all awsom club which take you one level up </span>
              </div>
              <div className={classes.Clubs_container}>

                  {ClubList.map((list) =>{
                      const {id, name, img} = list;
                      return (
                          <div className={classes.club} key={id}>
                              <img src={img} alt= {name} />
                              <h2 className = {classes.club_heading}>
                                  {name}
                              </h2>
                              <Link to ="/club" className = {classes.club_btn}>Join</Link>
                          </div>
                      );
                  })}

              </div>
              
            </div>

        </div>
    )
}

export default Clubs
