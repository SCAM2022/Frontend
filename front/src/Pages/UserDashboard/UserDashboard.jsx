import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../../components/LoginScreen/LoginScreen";
import PageNotFound from "../PageNotFound";
import Signup from "../../components/SignUp/Signup";
const UserDashboard = (props) => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginScreen />} />
      <Route exact path="/signup" element={<Signup />} />
      {/* <Route exact path="/home" component={Dashboard} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default UserDashboard;
