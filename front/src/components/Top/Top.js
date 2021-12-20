import React from 'react'

// CSS
import classes from "./Top.module.css"

// file
import ClubList from '../topClubs/List'


function Top() {
    return (
        <div className = {classes.top_clubs}>

            <div className={classes.heading}>
                <h2>Top Clubs</h2>
            </div>
            <div className={classes.viewAll}>
                 <a href="#">View all</a>
            </div>

            <div className= {classes.row}>

              {ClubList.map((data) =>{
                //   const {name, btn} = data;
                  return (
                  <div className ={classes["club"]}>
                     <a href="#">{data.name}</a>
                  </div>
                  )
              })}
              

            </div>
            
        </div>
    )
}

export default Top


 