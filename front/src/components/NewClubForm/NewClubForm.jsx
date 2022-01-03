import { useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import cookie from "js-cookie";
import Model from "../Ui/Model/Model";
import classes from "./NewClubForm.module.css";
import closeSvg from "../../assets/close.svg";
import Cookies from "js-cookie";
import { setUser } from "../../actions/userAction";

const NewClubForm = ({ error, setError, ...props }) => {
  const [clubName, setClubName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [authBy, setAuthBy] = useState("");
  const [authFile, setAuthFile] = useState(null);
  const [ImgFile, setImgFile] = useState(null);

  const navigate = useNavigate();
  const checkFileFormat = (dat, type) => {
    console.log("file after splitting", dat, dat.split("."));
    const tmp = dat.split(".");
    const fileType = tmp[tmp.length - 1];
    console.log("filetype->", fileType);
    if (fileType !== type) {
      setError(`Please upload document in ${type} form Only!`);
      return false;
    }
    return true;
  };
  const onFileChangePdf = (e) => {
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] });
    if (checkFileFormat(e.target.files[0].name, "pdf")) {
      setAuthFile(e.target.files[0]);
    } else {
      e.target.value = "";
    }
  };
  const onFileChangePic = (e) => {
    if (checkFileFormat(e.target.files[0].name, "jpg")) {
      setImgFile(e.target.files[0]);
    } else {
      e.target.value = "";
    }
  };
  console.log("userDetials  club form->", props?.userData);
  const checkNameAvailabilty = async () => {
    // /checkClub
    const checkClub = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/checkClub`,
        { name: clubName },
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };

    const val = checkClub()
      .then((r) => {
        console.log("clubCheck response->", r.data, r.data.success);
        return r?.data?.success;
      })
      .catch((e) => {
        console.log("error in clubName Check->", e);
        return false;
      });
    return val;
  };
  const onSubmitHandler = async (e) => {
    // Create an object of formData
    e.preventDefault();
    // console.log("waiting,", tmp);
    // console.log("submit clickked", checkNameAvailabilty());
    checkNameAvailabilty().then((r) => {
      console.log("inside Res=>", r);
      if (!r) {
        setError("Please Enter Unique clubName!");
        return;
      } else {
        setError("success");
      }
    });

    const formData = new FormData();

    // Update the formData object
    formData.append("docs", authFile);
    formData.append("docs", ImgFile);
    formData.append("name", clubName);
    formData.append("goal", goal);
    formData.append("disc", description);
    formData.append("authBy", authBy);
    formData.append("preName", props?.userData?.name);
    formData.append("id", props?.userData?._id);
    formData.append("Role", "President");
    formData.append("date", new Date().toISOString());

    const sendDate = async () => {
      const r = await axios.post(
        `${process.env.REACT_APP_API_KEY}/createclub`,
        formData,
        {
          headers: {
            Authorization: `${cookie.get("SCAM_TOKEN")}`,
          },
        }
      );
      return r;
    };
    sendDate()
      .then((r) => {
        console.log("resPonse->", r);
        const getUser = async () => {
          const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
            id: `${Cookies.get("SCAM_USER_ID")}`,
          });
          return r;
        };
        if (Cookies.get("SCAM_USER_ID")) {
          getUser()
            .then((r) => {
              props.setUser(r.data);
              navigate("/clubs");
            })
            .catch((e) => {
              console.log("error while fetching userData in clubCreation!!", e);
              // setError("Error while joining");
            });
        } else navigate("/clubs");
      })
      .catch((e) => {
        console.log("error in club creation ->", e);
        setError("Error occured while creating club Please try again!");

        // navigate("/clubs");
      });
  };

  return (
    <Model>
      <div className={classes["model_container"]}>
        <div className={classes["model_button"]}>
          <div
            className={classes["model_close-button"]}
            onClick={props.closeModel}
          >
            <div className={classes["club_create-heading"]}>
              Create Club Form
            </div>
            <img src={closeSvg} alt="close-svg" />
          </div>
        </div>
        {/* <div className="form_container"> */}
        <form onSubmit={onSubmitHandler}>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Club Name:</label>
            <input
              type="text"
              onChange={(e) => setClubName(e.target.value)}
              value={clubName}
              required
            />
          </div>

          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Goal:</label>
            <input
              type="text"
              onChange={(e) => setGoal(e.target.value)}
              value={goal}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Authorized By:</label>
            <input
              type="text"
              onChange={(e) => setAuthBy(e.target.value)}
              value={authBy}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Description:</label>
            <textarea
              type="text"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Authorized Document:</label>

            <input
              type="file"
              name="Banner"
              onChange={onFileChangePdf}
              // value={authFile}
              className="logo-file-input"
              required
            />
          </div>
          <div className={classes["form_field"]}>
            <label htmlFor="club-name">Club Picture:</label>

            <input
              type="file"
              name="Banner"
              onChange={onFileChangePic}
              // value={authFile}
              className="logo-file-input"
              required
            />
          </div>
          <div className={classes["create_club-submit_button"]}>
            {/* <div
              onClick={onSubmitHandler}
              className={classes["model_submit-button"]}
            > */}
            <input type="submit" value="Submit" />
            {/* Submit Form */}
            {/* </div> */}
          </div>
        </form>
      </div>
      {/* </div> */}
    </Model>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => dispatch(setUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewClubForm);
