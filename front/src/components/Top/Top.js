import React from 'react'

// CSS
import classes from "./Top.module.css"

// file
import ClubList from '../topClubs/List'


function Top() {
    return (
        <div className = {classes.top_clubs}>

            <div className="heading">
                <h2>Top Clubs</h2>
            </div>

            <div className="row">

              {ClubList.map((data) =>{
                //   const {name, btn} = data;
                  return (
                  <div className ="club">
                     <h2>{data.name}</h2>
                     {console.log(data.name)}
                     {console.log(data)}
                  </div>
                  )
              })}
              

            </div>
            
        </div>
    )
}

export default Top


 