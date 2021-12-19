import { useState } from "react";

import TextField from "./TextField";
import Form from "./Form";
import SelectField from "./SelectField";

const PageThree = ({
  semester,
  setSemester,
  rollNumber,
  setRollNumber,
  enrollmentNo,
  setEnrollmentNo,
}) => {
  const semOption = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
  ];

  return (
    <Form>
      <TextField
        name="roll-no"
        label="Roll Number"
        placeholder="Roll No."
        type="number"
        value={rollNumber}
        setValue={setRollNumber}
      />
      <SelectField
        name="current-sem"
        label="Current Semester"
        placeholder="Current Semester"
        type="number"
        value={semester}
        setValue={setSemester}
        options={semOption}
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
