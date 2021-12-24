//  File

import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router";
import LoginScreen from "../../components/LoginScreen/LoginScreen";
import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/Hero/Hero"
import Top from "../../components/Top/Top";
import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Clubs from "../../components/Clubs/Clubs";
import PageNotFound from "../PageNotFound";
import Signup from "../../components/SignUp/Signup";
import Club from "../../components/Club/Club";

import Home from "../../components/Home/Home";
import NewClub from "../../components/NewClub/NewClub";
import Model from "../../components/Ui/Model/Model";
import Member from "../../components/Member/Member";
import Profile from "../../components/Profile/Profile";
import Cookies from "js-cookie";

const UserDashboard = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (Cookies.get("SCAM_USER_ID")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    // cookie.remove('')
    Cookies.remove("SCAM_USER_ID");
    Cookies.remove("SCAM_TOKEN");
    setLoggedIn(false);
  };

  console.log(
    "path->",
    window.location.pathname,
    window.location.pathname === "/login",
    window.location.pathname === "/signup"
  );
  console.log("loc->", window.location.pathname);
  // const [showModel, setShowModel] = useState(false);

  // const showModelHandler = () => {
  //   setShowModel(true);
  // };

  // const hideModelHandler = () => {
  //   setShowModel(false);
  // };

  return (
    <>
      {/* {showModel && <Model onClose={hideModelHandler} />} */}
      {!(
        window.location.pathname === "/login" ||
        window.location.pathname === "/signup"
      ) && <Navbar logoutHandler={logoutHandler} loggedIn={loggedIn} />}
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/newClub" element={<NewClub />} />
        <Route exact path="/club/:cname" element={<Club />} />

        {/* <Route
        path="/v/:vname/drinks/"
        render={(props) => {
          const vname = props.match.params.vname;
          return <Menu venue_name={vname} />;
        }} */}

        <Route exact path="/top" element={<Top />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/member" element={<Member />} />
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {!(
        window.location.pathname === "/login" ||
        window.location.pathname === "/signup"
      ) && <Footer />}
      <Routes>
        <Route element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
