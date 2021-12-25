import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageControl from "./PageControl";
import PageIndicator from "./PageIndicator";

import Sidenav from "./Sidenav";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFinal from "./PageFinal";
import Error from "../Ui/Error/Error";
import classes from "./Signup.module.css";
const Signup = (props) => {
  console.log("signup");
  // const [emailList, setEmailList] = useState([]);
  const [page, setPage] = useState(1);
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  // const [college, setCollege] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [semester, setSemester] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [pageDone, setPageDone] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Form Validation

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneReg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  // const phoneReg = /^\+[1-9]{1}[0-9]{3,14}$/
  const passwordReg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const checkEmailInList = async (em) => {
    const checkEmail = async () => {
      try {
        const r = await axios.post(
          `${process.env.REACT_APP_API_KEY}/checkEmail`,
          { email: em }
        );

        return r.data;
      } catch (e) {
        if (e.response && e.response.data) {
          return e.response.data;
        }
      }
    };

    checkEmail()
      .then((res) => {
        console.log("succ->", res);
        if (res?.success) {
          return false;
        }
        setError(res.msg);
        return true;
      })
      .catch((err) => {
        console.log("error->", err);
        return true;
      });
  };

  const checkRollEnrollInList = async (enroll, roll) => {
    const checkRollEnroll = async () => {
      try {
        const r = await axios.post(
          `${process.env.REACT_APP_API_KEY}/checkRoll`,
          {
            enrollmentNo: enroll,
            rollNumber: roll,
          }
        );

        return r.data;
      } catch (e) {
        if (e.response && e.response.data) {
          return e.response.data;
        }
      }
    };

    checkRollEnroll()
      .then((res) => {
        console.log("succ->", res);
        if (res?.success) {
          return false;
        }
        setError(res.msg);
        return true;
      })
      .catch((err) => {
        console.log("error->", err);
        return true;
      });
  };

  const handleForm = (data) => {};
  const handleNextPage = async () => {
    if (page === 1) {
      if (!(password && repassword && email && phone && person)) {
        setError("Please Fill all details!");
        return;
      }

      if (!emailReg.test(email)) {
        setError("Please enter valid email!");
        return;
      }

      if (password !== repassword) {
        setError("Password mismatch!");
        return;
      }

      if (await checkEmailInList(email)) {
        // setError("Email already taken!");
        console.log("email asdasd->");
        return;
      }
    }
    if (page === 2) {
      if (!(department && year && admissionYear)) {
        setError("Please Fill all details!");
        return;
      }
    }

    if (page === 3) {
      if (!(rollNumber && semester && enrollmentNo)) {
        setError("Please Fill all details!");
        return;
      }
      const result = await checkRollEnrollInList(enrollmentNo, rollNumber);
      if (result) {
        return;
      }

      reqHandler();
    }

    if (page === 4) {
      navigate("/login");
      return;
    }
    // pageDone.push(page);
    setPageDone([...pageDone, page]);
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    setPageDone(pageDone.slice(0, -1));
  };

  const reqHandler = () => {
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
      person: person,
      email: email,
      phone: phone,
      password: password,
      department: department,
      year: year,
      // college: college,
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
        <Sidenav pageIndex={1} pageDone={pageDone} page={page} />
        <div className={classes["form_container"]}>
          {/* <span className="page__step">STEP {page} OF 4</span> */}
          {/* <h3 className="page__title">{"title"}</h3> */}
          <Error error={error} setError={setError} />
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
              // college={college}
              // setCollege={setCollege}
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
          {page === 4 && <PageFinal />}
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
