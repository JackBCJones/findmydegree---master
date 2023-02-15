import React from 'react'
import './Footer.scss'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs';
import {Link} from 'react-router-dom'

const Footer = () => {
  let Logo = require('../../images/logodark.png')

  return (
    <footer>
      <ul className='footer_socials'>
        <li><a href='https://www.instagram.com' target="_blank" rel="noreferrer"><BsInstagram/></a></li>
        <li><a href='https://www.facebook.com' target="_blank" rel="noreferrer"><BsFacebook/></a></li>
        <li><a href='https://twitter.com' target="_blank" rel="noreferrer"><BsTwitter/></a></li>
        <li><a rel="noreferrer" href="http://www.linkedin.com/in/jack-calburn-jones" target="_blank"  ><BsLinkedin/></a></li>
      </ul>
      <ul className='footer_nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/favourites'>Favourites</Link></li>
      </ul>
      <p>@2023 Jack Calburn-Jones | All Rights Reserved</p>
      <img src={Logo} alt="logo"/>
    </footer>
  )
}

export default Footer