import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import load from "../../../assets/upload.jpg";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useParams } from "react-router";
import Error from "../../Ui/Error/Error";
import Cookies from "js-cookie";
import axios from "axios";
import "./FormImage.css";

const FormImage = () => {
  //   const addImage = () => {};
  const params = useParams();
  const [clubName, setClubName] = React.useState(params.cname);
  const [ImgFile, setImgFile] = React.useState(null);
  const [error, setError] = React.useState("");
  const checkFileFormat = (dat, type) => {
    console.log("file after splitting", dat, dat.split("."));
    const tmp = dat.split(".");
    const fileType = tmp[tmp.length - 1];
    console.log("filetype->", fileType);
    if (fileType !== type) {
      return false;
    }
    return true;
  };

  const onFileChangePic = (e) => {
    if (
      checkFileFormat(e.target.files[0].name, "png") ||
      checkFileFormat(e.target.files[0].name, "jpg") ||
      checkFileFormat(e.target.files[0].name, "jpeg")
    ) {
      setImgFile(e.target.files[0]);
    } else {
      setError(`Please upload Image in png/jpeg/jpg form Only!`);

      e.target.value = "";
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("file->", ImgFile);
    const formData = new FormData();
    formData.append("clubName", clubName);
    formData.append("img", ImgFile);
    console.log("->", formData);
    const sendData = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/uploadClubAcievements`,
        formData,
        {
          headers: {
            Authorization: `${Cookies.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };

    sendData()
      .then((r) => {
        console.log("response while sending image");
      })
      .catch((e) => console.log("error while sending image", e));
  };

  return (
    <>
      <Error error={error} setError={setError} />

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
                  onChange={onFileChangePic}
                />
              </div>
            </div>
            <div className="formImage_right">
              <img src={load} alt="" />
            </div>
          </div>
          <div className="image_upload-submit">
            <button onClick={onSubmitHandler}>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormImage;
