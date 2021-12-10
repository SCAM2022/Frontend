import React from "react";

import TextField from "./TextField";
import Form from "./Form";

const PageOne = (props) => {
  const [person, setPerson] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");
  const [alertEmpty, setAlertEmpty] = React.useState(false);
  const [alertPass, setAlertPass] = React.useState(false);
  const [emailList, setEmailList] = React.useState([]);

  return (
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
  );
};

export default PageOne;
