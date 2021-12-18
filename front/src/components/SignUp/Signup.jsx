import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import axios from "axios";
import PageControl from "./PageControl";
import PageIndicator from "./PageIndicator";
import { Route, Routes } from "react-router-dom";
import classes from "./Signup.module.css";

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
  const [emailList, setEmailList] = useState([]);
  const [page, setPage] = useState(1);
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [semester, setSemester] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");

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

  const handleForm = (data) => {};
  const handleNextPage = () => {
    if (page === 3) {
      reqHandler();
    }
    setPage(page + 1);
    // setPageDone([...pagesDone, page]);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    // setPageDone(pagesDone.slice(0, -1));
  };

  const reqHandler = () => {
    console.log("env->", process.env);

    const sendData = async (data) => {
      try {
        const r = await axios.post(
          `${process.env.REACT_APP_API_KEY}/authenticate`,
          data
        );
        return r.data;
      } catch (e) {
        if (e.response && e.response.data) {
          return e.response.data;
        }
      }
    };
    const userInfo = {
      name: person,
      email: email,
      phone: phone,
      password: password,
      department: department,
      year: year,
      college: college,
      admissionYear: admissionYear,
      semester: semester,
      rollNumber: rollNumber,
      enrollmentNo: enrollmentNo,
    };
    console.log("userData->", userInfo);
    sendData(userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error->", err);
      });
  };

  return (
    <>
      <main className={classes["reg__body"]}>
        <Sidenav pageIndex={1} pagesDone={pagesDone} />
        <div className={classes["form_container"]}>
          {/* <span className="page__step">STEP {page} OF 4</span> */}
          {/* <h3 className="page__title">{title}</h3> */}
          {page === 1 && (
            <PageOne
              person={person}
              setPerson={setPerson}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              repassword={repassword}
              setRePassword={setRePassword}
            />
          )}
          {page === 2 && (
            <PageTwo
              department={department}
              setDepartment={setDepartment}
              year={year}
              setYear={setYear}
              college={college}
              setCollege={setCollege}
              admissionYear={admissionYear}
              setAdmissionYear={setAdmissionYear}
            />
          )}
          {page === 3 && (
            <PageThree
              semester={semester}
              setSemester={setSemester}
              rollNumber={rollNumber}
              setRollNumber={setRollNumber}
              enrollmentNo={enrollmentNo}
              setEnrollmentNo={setEnrollmentNo}
            />
          )}
          {page === 4 && <PageFinal reqHandler={reqHandler} />}
          <PageControl
            page={page}
            handleForm={handleForm}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
        {/* <div className="indicator__wrapper">
          <PageIndicator page={currentPage} />
        </div> */}
      </main>
    </>
  );
};

export default Signup;
