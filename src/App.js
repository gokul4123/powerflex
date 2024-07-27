import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"

import React from 'react';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>
        <Programs/>
      </div>
      <Title subTitle ='Contact Us' title ='Get in Touch' />
      <Contact/>
    </div>
  )
}

export default App
