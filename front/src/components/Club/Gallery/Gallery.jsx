
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {gallery} from "./Gallerys"
import "./Gallery.css"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from '@mui/material';

const Gallery = () => {
    
    return (
      <div className ="gallery">
          <div className="gallery_heading">
          <h2>Photos</h2>
            <span className="gallery_underline"></span>
          <h4>
            <Link to= "/" style ={{cursor : "pointer"}}>
            <strong>Explore </strong>
            </Link>
             for more photos</h4>
          </div>

        <div className="gallery_images">

          <div className="add_image">
          <Link to="">
          <button > < AddBoxIcon className = "plus"/><br />Add Picture</button>
          </Link>
        </div>
        {
           gallery.map((item) =>{
                  return (
                    <div key = {item.id} className='gallery_image'>
                      <img src={item.src} alt="" />
                  </div>
                  );
              })
        }
        </div>
      </div>
    );
}

export default Gallery
