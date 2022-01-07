import React from "react";
import "./FormImage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import load from "../../../assets/upload.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const FormImage = () => {
  //   const addImage = () => {};
  return (
    <div className="formImage">
      <div className="formImage_container">
        <h4>
          Upload Image <AddPhotoAlternateIcon />
        </h4>
        <div className="formImage_content">
          <div className="formImage_left">
            <div className="formImage_left_center">
              <h6>Drag and Drop image here </h6>
              <br />
              <span>Or</span> <br />
              <label
                className="formImage_label"
                htmlFor="filePicker"
                style={{ cursor: "pointer" }}
              >
                <AddCircleIcon /> Add Image
              </label>
              <input
                type="file"
                id="filePicker"
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <div className="formImage_right">
            <img src={load} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormImage;
