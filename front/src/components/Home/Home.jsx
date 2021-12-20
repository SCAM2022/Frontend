import React from 'react'


import Hero from "../Hero/Hero"
import Top from "../Top/Top"
import About from "../About/About"
import Gallery from "../Gallery/Gallery"
import Contact from "../Contact/Contact"
// import Customer from "../Customer/Craousel"

const Home = () => {
    return (
        <div>
    <Hero/>
    {/* <Customer /> */}
     <Top />
     <About />
     <Gallery />
      <Contact />
        </div>
    )
}

export default Home
