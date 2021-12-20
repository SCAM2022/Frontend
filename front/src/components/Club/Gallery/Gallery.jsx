
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {gallery} from "./Gallerys"
import "./Gallery.css"

const Gallery = () => {

    const settings = {
        className : "slider",
      dots: false,
      arrow : true,
      infinite: true,
      centerPadding : "0px",
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <div className ="gallery">
          <div className="gallery_heading">
          <h2>Photos</h2>
          <span className="gallery_underline"></span>
          </div>
        <Slider {...settings}>
          {
              gallery.map((item) =>{
                  return (
                    <div key = {item.id}>
                      <img src={item.src} alt="" />
                  </div>
                  );
              })
          }
        </Slider>
      </div>
    );
}

export default Gallery
