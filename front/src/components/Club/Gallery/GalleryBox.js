import React from "react";
import "./GalleryBox.css";
import { BoxImage } from "./GalleryBoxImage";

const GalleryBox = () => {
  return (
    <div className="galleryBox">
      <div className="galleryBox_heading">
        <h2>Photo Gallery</h2>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio quod modi consequuntur aperiam ducimus!
        </span>
      </div>

      <div className="galleryBox-container">
        {BoxImage.map((img) => {
          return (
            <>
              <div className="box_Image" key={img.id}>
                <img src={img.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryBox;
