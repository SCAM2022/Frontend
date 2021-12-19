import { useState, useEffect } from "react";

import TextField from "./TextField";
import Form from "./Form";
import success1 from "../../assets/loginSvg/success-36.svg";
import success2 from "../../assets/loginSvg/success.png";
import classes from "./PageFinal.module.css";

const PageFinal = (props) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => {
          return prev - 1;
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeLeft]);
  if (timeLeft === 0) {
    console.log("goto login");
  }

  return (
    <>
      <div className={classes["success__wrapper"]}>
        <img src={success2} alt="success-img" />
        <h3 className={classes["success__message"]}>Success!</h3>
        <p>
          Congratualation, Your have successfully signed up for scam. You will
          be redirected to the login page in {timeLeft} sec.
        </p>

        {/* <h1> Registration done</h1>; */}
      </div>
    </>
  );
};

export default PageFinal;
