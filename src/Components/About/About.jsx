import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
      <h3>ABOUT SUNCITY TOURS KE</h3>
        <h2>Dominating The Adventurous Kenya.</h2>
         <p>We believe that every traveler is unique, which is why we offer customized tour 
            packages tailored to your preferences. Whether you're traveling solo, with 
            family, or in a group, we'll work closely with you to create a personalized 
            itinerary that suits your interests, budget, and timeframe.</p>
         <p>Embark on thrilling adventures with our adrenaline-fueled tours. From hiking through rugged 
                mountain trails to white-water rafting down roaring rivers, we offer a wide range of 
                exhilarating activities for the adventure enthusiast in you.</p>
         <p>Immerse yourself in the rich cultural heritage of destinations around the mighty KE
         with our cultural immersion tours. Explore ancient ruins, visit local markets, 
         and participate in traditional ceremonies to gain a deeper understanding of the 
         local customs and traditions.</p>
      </div>
      <div className="about-right">
        
         <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
    </div>
  )
}

export default About
