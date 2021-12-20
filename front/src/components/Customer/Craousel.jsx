 


 import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Craousel.css';
// import { images } from "./Astrologer";
import { customer } from "./Astrologer";

const Craousel = ({images}) => {
    const settings = {

      className : "slider customer",
      dots: false,
      infinite: false,
      speed: 500,
      centerNode : true,
      slidesToShow: 4,
      centerPadding : "60px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
              centerPadding : "100px",
            slidesToScroll: 1,
            initialSlide: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className  = "customer">
        <div className="craousel_heading customer_heading">
          <h2>HEAR FROM OUR CUSTOMERS </h2>
          <span>Top Astrologers. 24 * 7 customer support. Happy to help</span>
        </div>
        <Slider {...settings}>
             {customer.map((item) =>{
              return(  
                // eslint-disable-next-line no-unreachable
                <div className="craousel customer_craousel">
                 <div className="craousel-content customer_content">
                 <img src={item.src} alt= {item.place} className="img" />
                 <h4>{item.name}</h4>
                 <h6>{item.place}</h6>
                 <span className ="review">{item.review}</span>
               </div>
                </div>
              )
             })}
        </Slider>
      </div>
    );
  }
  export default  Craousel;