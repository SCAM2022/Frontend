import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { connect } from "react-redux";
import axios from "axios";

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
import Event from "../../components/Event/Event";
import ProfileView from "../../components/Profile/ProfileView";
import { setUser, unsetUser } from "../../actions/userAction";
import ShowEvent from "../../components/ShowEvent/ShowEvent";
import CreateEvent from "../../components/Club/CreateEvent/CreateEvent";
import Participant from "../../components/ShowEvent/Participant/Participant";
import ClubTalk from "../../components/ClubTalk/ClubTalk";
import FormImage from "../../components/Club/Gallery/FormImage";
import GalleryBox from "../../components/Club/Gallery/GalleryBox";
import ClubSetting from "../../components/ClubSettings/ClubSetting";

const UserDashboard = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (Cookies.get("SCAM_USER_ID")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  React.useEffect(() => {
    const getUser = async () => {
      // console.log("0<", Cookies.get("SCAM_TOKEN"));

      const r = await axios.post(`${process.env.REACT_APP_API_KEY}/user`, {
        id: `${Cookies.get("SCAM_USER_ID")}`,
      });
      return r;
    };
    if (Cookies.get("SCAM_USER_ID"))
      getUser()
        .then((r) => {
          props.setUser(r.data);
        })
        .catch((e) => {
          console.log("error while fetching userData in Profile!!", e);
        });
  }, []);

  const logoutHandler = () => {
    // cookie.remove('')
    Cookies.remove("SCAM_USER_ID");
    Cookies.remove("SCAM_TOKEN");
    setLoggedIn(false);
    props?.unsetUser();
  };

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
      {
        //   !(
        //   window.location.pathname === "/login" ||
        //   window.location.pathname === "/signup"
        // ) &&
        <Navbar logoutHandler={logoutHandler} loggedIn={loggedIn} />
      }
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/newClub" element={<NewClub />} />
        <Route exact path="/club/:cname" element={<Club />} />
        <Route exact path="/:cname/createEvent" element={<CreateEvent />} />
        <Route exact path="/:cname/clubTalk" element={<ClubTalk />} />
        <Route exact path="/club/:cname/setting" element={<ClubSetting />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/eventShow/:evename" element={<ShowEvent />} />
        <Route exact path="/formImage" element={<FormImage />} />
        <Route exact path="/galleryBox" element={<GalleryBox />} />
        <Route
          exact
          path="/eventShow/:evename/participant"
          element={<Participant />}
        />

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
        <Route exact path="/:clubName/member" element={<Member />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/:userName" element={<ProfileView />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {
        //   !(
        //   window.location.pathname === "/login" ||
        //   window.location.pathname === "/signup"
        // ) &&
        <Footer />
      }
      <Routes>
        <Route element={<PageNotFound />} />
      </Routes>
    </>
  );
};
const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});
const mapDispatchToProps = (dispatch) => ({
  setUser: (data) => dispatch(setUser(data)),
  unsetUser: () => dispatch(unsetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
