import React, { useState, playState } from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'


const App = () => {

const [playState, setPlayState] = useState(false);//vide hidden(useState)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="Container">
      <Title subTitle ='Top Destinations' title ='Our top tours'/>
      <Products />
      <About setPlayState={setPlayState}/>
      <Title subTitle ='Pic collection' title ='Top Photos'/>
      <Gallery />
      <Title subTitle ='TESTIMONIALS' title ='What the customer Says'/>
      <Testimonials />
      <Title subTitle ='Contact Us' title ='Get In Touch'/>
      <Contact />
      <Footer />
      </div>
     <Videoplayer playState={playState} setPlayState={setPlayState} />
     </div>
  )
}

export default App
