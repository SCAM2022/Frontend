import { useState } from "react";

import TextField from "./TextField";
import Form from "./Form";

const PageThree = (props) => {
  const [semester, setSemester] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");

  return (
    <Form>
      <TextField
        name="roll-no"
        label="Roll Number"
        placeholder="Roll No."
        type="text"
        value={rollNumber}
        setValue={setRollNumber}
      />
      <TextField
        name="current-sem"
        label="Current Semester"
        placeholder="Current Semester"
        type="text"
        value={semester}
        setValue={setSemester}
      />
      <TextField
        name="Enrollment No."
        label="Enrollment Number"
        placeholder="Enrollment No."
        type="test"
        value={enrollmentNo}
        setValue={setEnrollmentNo}
      />
    </Form>
  );
};

export default PageThree;
