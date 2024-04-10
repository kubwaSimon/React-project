import React, { useEffect, useState} from 'react'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

import './navbar.css'
import logo from '../../assets/logo1.png'
import menu_icon from '../../assets/menu-icon.png'

const navbar = () => {

  const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY> 100 ? setSticky(true) : setSticky(false)
  })
},[]);

const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true)


}

  return (
    <nav className={`Container ${sticky? 'scroll-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={mobileMenu ? '':'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='products' smooth={true} offset={-250} duration={500}>Our Offers</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-240} duration={500}>Location</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-240} duration={500} className='btn'>Contact us</Link> </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar
