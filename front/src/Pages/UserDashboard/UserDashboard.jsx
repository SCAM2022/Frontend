import React from "react";

//  File
import { Routes} from "react-router-dom";
import { Route} from "react-router";
import LoginScreen from "../../components/LoginScreen/LoginScreen";
import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/Hero/Hero"
import Top from "../../components/Top/Top"
import About from "../../components/About/About"
import Gallery from "../../components/Gallery/Gallery"
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer"
import Clubs from "../../components/Clubs/Clubs"
import PageNotFound from "../PageNotFound";
import Signup from "../../components/SignUp/Signup";
import Club from "../../components/Club/Club"

import Home from "../../components/Home/Home"
const UserDashboard = (props) => {
  return (
   <>
     <Navbar />

     
     <Routes>
      <Route exact path="/login" element={<LoginScreen />} /> 
      <Route exact path="/signup" element={<Signup />} />
      <Route path="*" component={PageNotFound} />
    </Routes>
     <Routes>
           
           <Route exact path="/" element={<Home />} />
           <Route exact path="/clubs" element={<Clubs />} />
           <Route exact path="/club" element={<Club />} />
           <Route exact path="/top" element={<Top/>} />
           <Route exact path="/about" element={<About />} />
           <Route exact path="/gallery" element={<Gallery />} />
           <Route exact path="/contact" element={<Contact />} />
         
      </Routes>
        <Footer />
       
   </>
  
  );
};

export default UserDashboard;
