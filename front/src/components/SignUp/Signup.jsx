import TextField from "./TextField";
import { connect } from "react-redux";
import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Signup.module.css";
import PageControl from "./PageControl";
import PageIndicator from "./PageIndicator";
import Sidenav from "./Sidenav";

const Signup = ({
  page,
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
  const [person, setPerson] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");
  const [alertEmpty, setAlertEmpty] = React.useState(false);
  const [alertPass, setAlertPass] = React.useState(false);
  const [emailList, setEmailList] = React.useState([]);
  // console.log("Email->", email);
  //   React.useEffect(() => {
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

  const handleForm = (props) => {
    if (!email || !person || !position || !phone || !password || !repassword) {
      //setAlertEmpty(true);
      setError("Fill all mandatory fields");
      return true;
    } else if (!emailReg.test(email)) {
      setError("Enter a valid email");
      return true;
    } else if (checkEmailInList(email)) {
      setError("Email Already Exists");
      return true;
    }
    // else if (!isPossiblePhoneNumber(phone ? phone : "")) {
    //   setError("Phone Number Invalid!");
    //   return true;
    // }
    else if (password !== repassword) {
      // setAlertPass(true);
      setError("Password not matched");
      return true;
    } else {
      //store the data to redux
      setError(false);
      addScreenOne({
        email,
        person,
        position,
        phone,
        password,
      });

      return false;
    }
  };
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    // console.log(window.innerWidth, "WINDOW+++++++++++++++++++");
  }, [window.innerWidth]);

  return (
    <main className={classes["reg__body"]}>
      <div className={classes["reg__body__header"]}>
        <div style={{ display: `${width > 1024 ? "none" : "block"}` }}>
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9011 11.7266C23.1315 11.223 24 10.0144 24 8.60432C24 8.02878 23.8552 7.48201 23.5947 6.99281V6.97842C21.3076 2.67626 16.8782 0 12 0C8.0193 0 4.37153 1.82734 1.95416 4.70504C0.882992 5.98561 1.33173 7.92806 2.83715 8.63309C3.89385 9.13669 5.16767 8.8777 5.90591 7.98561C7.36791 6.23022 9.56815 5.13669 12 5.13669C14.2871 5.13669 16.415 6.10072 17.9204 7.78417L2.14234 14.259C0.882992 14.777 0 15.9856 0 17.4101C0 17.9856 0.144753 18.5324 0.405308 19.0072C2.67793 23.3237 7.10736 26 12 26C15.9807 26 19.6285 24.1727 22.0603 21.2806C23.1315 20.0144 22.6828 18.0719 21.1773 17.3525C20.1206 16.8489 18.8468 17.1079 18.1086 18C16.6321 19.7842 14.4318 20.8633 12 20.8633C9.71291 20.8633 7.58504 19.8993 6.07961 18.2158L21.9011 11.7266Z"
              fill="#FF0A38"
            />
          </svg>
        </div>
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

        <Form>
          <TextField
            name="full-name"
            label="Full Name"
            placeholder="Full Name"
            type="text"
            value={person}
            setValue={setPerson}
          />
          <TextField
            name="Occupation"
            label="Occupation"
            placeholder="Occupation"
            type="text"
            value={position}
            setValue={setPosition}
          />
          <TextField
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <TextField
            name="mobile"
            label="Mobile"
            placeholder="Mobile"
            type="number"
            value={phone}
            setValue={setPhone}
          />
          <TextField
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <TextField
            name="repassword"
            label="Re-Enter Password"
            placeholder="Password"
            type="password"
            value={repassword}
            setValue={setRePassword}
          />
        </Form>
        {/* <PageControl
          page={currentPage}
          setCurrentPage={setCurrentPage}
          pagesDone={pagesDone}
          setPageDone={setPageDone}
          handleForm={handleForm}
        />
        <div className="indicator__wrapper">
          <PageIndicator page={currentPage} />
        </div> */}
      </div>
    </main>
  );
};
export default Signup;
