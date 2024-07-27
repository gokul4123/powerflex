import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Get your body a good place</h1>
            <p>Transforming Lives, One Workout at a Time</p>
            <button className='btn'>Explore More <img src={arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
