import { useState } from "react";

import TextField from "./TextField";
import Form from "./Form";

const PageFinal = (props) => {
  const [semester, setSemester] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");

  return <h1> Registration done</h1>;
};

export default PageFinal;
