import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

import "./GalleryBox.css";
import { BoxImage } from "./GalleryBoxImage";
import { useParams } from "react-router";
const GalleryBox = () => {
  const params = useParams();
  const [galleryData, setGalleryData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/fetchAchievements`,
        {
          clubName: params?.cname,
        },

        {
          headers: {
            Authorization: `${Cookies.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r?.data;
    };

    getData()
      .then((r) => {
        console.log("response for images->", r);

        const tmp = r?.achv?.images?.map((i) => {
          return {
            url: `${process.env.REACT_APP_API_KEY}/${i.imgpath}`,
            id: new Date().toISOString(),
          };
        });
        console.log("imageData->", tmp);

        setGalleryData(tmp);
      })
      .catch((e) => console.log("error while recieving image", e));
  }, []);

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
        {galleryData.map((img) => {
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
