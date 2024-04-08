import React, { useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'

const navbar = () => {

  const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY> 100 ? setSticky(true) : setSticky(false)
  })
},[]);

  return (
    <nav className={`Container ${sticky? 'scroll-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Our offers</li>
        <li>About us</li>
        <li>Location</li>
        <li><button className='btn'>Contact us</button> </li>
      </ul>
    </nav>
  )
}

export default navbar
