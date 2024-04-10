import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="Container">
      <Title subTitle ='Top Destinations' title ='Our top tours'/>
      <Products />
      <About />
      <Title subTitle ='Pic collection' title ='Top Photos'/>
      <Gallery />
      <Title subTitle ='TESTIMONIALS' title ='What the customer Says'/>
      <Testimonials />
      <Title subTitle ='Contact Us' title ='Get In Touch'/>
      <Contact />
      <Footer />
      </div>
     </div>
  )
}

export default App
