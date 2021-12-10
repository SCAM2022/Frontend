import { useState } from "react";

import TextField from "./TextField";
import Form from "./Form";

const PageTwo = (props) => {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [admissionYear, setAdmissionYear] = useState();

  return (
    <Form>
      <TextField
        name="college-name"
        label="College/School"
        placeholder="Your College/School"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <TextField
        name="department"
        label="Department"
        placeholder="Your Branch"
        type="text"
        value={department}
        setValue={setDepartment}
      />
      <TextField
        name="Year"
        label="Year"
        placeholder="Year"
        type="text"
        value={year}
        setValue={setYear}
      />
      <TextField
        name="admission-year"
        label="Admission Year"
        placeholder="in which year took admission"
        type="number"
        value={admissionYear}
        setValue={setAdmissionYear}
      />
    </Form>
  );
};

export default PageTwo;
