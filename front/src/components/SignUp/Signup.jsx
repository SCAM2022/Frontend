import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Signup.module.css";
import PageControl from "./PageControl";
import PageIndicator from "./PageIndicator";
import { Route, Routes } from "react-router-dom";

import Sidenav from "./Sidenav";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFinal from "./PageFinal";

const Signup = ({
  addData,
  title,
  setCurrentPage,
  currentPage,
  pagesDone,
  setPageDone,
  error,
  setError,
  addScreenOne,
  emailExist,
  setEmailExist,
}) => {
  //Intial States for TextFields
  console.log("signup");
  const [person, setPerson] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [alertEmpty, setAlertEmpty] = useState(false);
  const [alertPass, setAlertPass] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [page, setPage] = useState(1);

  // console.log("Email->", email);
  //   useEffect(() => {
  //     if (email) {
  //       // console.log("EMAIL EFFECT__");
  //       const checkEmailExists = async () => {
  //         await axios
  //           .get(`${process.env.REACT_APP_SERVER}/settings/venue-settings/email`)
  //           .then((data) => {
  //             const arr = [];
  //             data.data.venue.Items.map((item) => {
  //               arr.push(item.email);
  //               if (item.email === email) {
  //                 setError("Email Already Exists");
  //                 // return setEmailExist(true);
  //                 return true;
  //               } else {
  //                 // return setEmailExist(false);
  //                 return false;
  //               }
  //             });
  //             setEmailList(arr);
  //           });
  //         // console.log("AXIOS val->", val);
  //       };
  //       const timeout = setTimeout(() => {
  //         checkEmailExists();
  //       }, 1000);
  //       return () => {
  //         clearTimeout(timeout);
  //       };
  //     }
  //   }, [email]);
  // Form Validation

  // const emailReg =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneReg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  // const phoneReg = /^\+[1-9]{1}[0-9]{3,14}$/
  const passwordReg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // console.log("EmailExist->", emailExist);
  const checkEmailInList = (em) => {
    const idx = emailList.findIndex((mail) => mail === em);
    if (idx < 0) {
      return false;
    } else return true;
  };

  const handleForm = (props) => {};
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    // console.log(window.innerWidth, "WINDOW+++++++++++++++++++");
  }, [window.innerWidth]);

  return (
    <main className={classes["reg__body"]}>
      <div className={classes["reg__body__header"]}>
        {/* <div style={{ display: `${width > 1024 ? "none" : "block"}` }}> */}

        {/* </div> */}
        {/* <Link to="/" className="reg__btn__login">
          Login
        </Link> */}
      </div>
      {/* <div className="alert_box">
        {alertEmpty === true ? (
          <AlertBox
            alertEmpty={alertEmpty}
            setAlertEmpty={setAlertEmpty}
            alertPass={alertPass}
            setAlertPass={setAlertPass}
            text="Please fill all mantadory fields "
          />
        ) : null}
        {alertPass === true ? (
          <AlertBox
            alertEmpty={alertEmpty}
            setAlertEmpty={setAlertEmpty}
            alertPass={alertPass}
            setAlertPass={setAlertPass}
            text="Password not matched"
          />
        ) : null}
      </div> */}
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        {/* <span className="page__step">STEP {page} OF 4</span> */}
        <h3 className="page__title">{title}</h3>
        <Sidenav pageIndex={1} pagesDone={pagesDone} />
        {page === 1 && <PageOne />}
        {page === 2 && <PageTwo />}
        {page === 3 && <PageThree />}
        {page === 4 && <PageFinal />}

        <PageControl
          page={page}
          setCurrentPage={setPage}
          // pagesDone={pagesDone}
          // setPageDone={setPageDone}
          handleForm={handleForm}
        />
        {/* <div className="indicator__wrapper">
          <PageIndicator page={currentPage} />
        </div> */}
      </div>
    </main>
  );
};
export default Signup;
