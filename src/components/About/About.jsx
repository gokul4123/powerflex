import React from 'react'
import Carousel from '../Carousel/Carousel'
import {gym} from '../Data'
import './About.css'

function About() {



  return (
    <div className='about'>
      <div className="about-left">
        <Carousel images={gym} className="about_img"/>
      </div>
      <div className="about-right">
        <h2>Welcome to PowerFlex, your ultimate fitness destination!  </h2>
        <p> At PowerFlex, we believe in empowering our members to achieve their highest potential through cutting-edge training programs, state-of-the-art equipment, and a supportive community.  </p>
        <p>Whether you're a seasoned athlete or just starting your fitness journey, our expert trainers are dedicated to helping you reach your goals. Our diverse range of classes, including strength training, cardio, yoga, and HIIT, are designed to challenge and inspire you.</p>
        <p>Join us at PowerFlex and experience the perfect blend of motivation, innovation, and results. Let's flex your power and transform your life together!</p>
      </div>


    </div>
  )
}

export default About
