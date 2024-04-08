import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero Container' >
      <div className='hero-text'>
        <h1>A provider of the best in the tour world</h1>
        <p>Embark on a journey of discovery with our premier tour company. Immerse yourself in captivating destinations, from the sun-kissed 
            beaches of Bali to the ancient wonders of Machu Picchu.Whether you seek the thrill of safari in Africa or the tranquility of a 
            European river cruise, we tailor each excursion to exceed your expectations.</p>
            <button className='btn'>EXplore more<img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero
