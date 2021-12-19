import { useState } from "react";

import TextField from "./TextField";
import Form from "./Form";
import SelectField from "./SelectField";

const PageTwo = ({
  department,
  setDepartment,
  year,
  setYear,
  // college,
  // setCollege,
  admissionYear,
  setAdmissionYear,
}) => {
  const studingYear = [
    {
      name: "first",
    },
    {
      name: "second",
    },
    {
      name: "third",
    },
    {
      name: "forth",
    },
  ];
  const branch = [
    {
      name: "Computer Science and Engineering",
    },
    {
      name: "Electronic and Telecommunication Engineering",
    },
    {
      name: "Electrical Engineering",
    },
    {
      name: "Mechanical Engineering",
    },
    {
      name: "Civil Engineering",
    },
  ];

  const addmYear = [];
  const curYear = new Date().getFullYear();
  for (let i = 0; i < 20; i++) {
    addmYear.push({ name: (+curYear - i).toString() });
  }
  return (
    <Form>
      {/* <TextField
        name="college-name"
        label="College/School"
        placeholder="Your College/School"
        type="email"
        value={college}
        setValue={setCollege}
      /> */}
      <SelectField
        name="department"
        label="Department"
        placeholder="Your Branch"
        type="text"
        value={department}
        setValue={setDepartment}
        options={branch}
      />
      <SelectField
        name="year"
        label="Year"
        placeholder="Year"
        type="text"
        value={year}
        setValue={setYear}
        options={studingYear}
      />
      <SelectField
        name="admission-year"
        label="Admission Year"
        placeholder="in which year took admission"
        type="number"
        value={admissionYear}
        setValue={setAdmissionYear}
        options={addmYear}
      />
    </Form>
  );
};

export default PageTwo;
