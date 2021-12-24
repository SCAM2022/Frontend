import React, { Fragment, Suspense } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import { Switch } from "react-dom";
// import NavBar from "./components/Navbar/Navbar.js";
// import Hero from "./components/Hero/Hero";
// import Top from "./components/Top/Top";
// import About from "./components/About/About ";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import LoadingSpinner from "./components/Ui/LoadingSpinner/LoadingSpinner";
import "./App.css";
import "./utils/axios";
const App = () => {
  console.log("-> apphere <-");

  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      {/* <Routes> */}
      {/*user Dashboard*/}

      <UserDashboard />
      {/*Admin Dashboard*/}
      {/* <AdminDasboard /> */}
      {/* <Route exact path="/" element={<LoginScreen />} /> */}
      {/* <Route exact path="/signup" component={SignUpScreen} /> */}
      {/* <Route exact path="/home" component={Dashboard} /> */}
      {/* <Route path="*" component={PageNotFound} /> */}

      {/* <NavBar />
          <Hero />
          <Top />
        <About /> */}
      {/* </Routes> */}
    </Suspense>
  );
};

export default App;
