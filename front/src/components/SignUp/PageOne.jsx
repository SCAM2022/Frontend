import { connect } from "react-redux";
import TextField from "./TextField";
import Form from "./Form";

const PageOne = (props) => {
  const {
    person,
    setPerson,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    repassword,
    setRePassword,
  } = props;

  // const [person, setPerson] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  // const [password, setPassword] = useState("");
  // const [repassword, setRePassword] = useState("");
  // const { page } = props;

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

const mapStateToProps = (state) => ({
  userInfo: state.signUpReducer.userInfo,
});

export default connect(mapStateToProps, null)(PageOne);
