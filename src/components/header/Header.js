import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <header>
      <div className='title'>
        <h3>Welcome to</h3>
        <h1>FIND MY DEGREE</h1>
        <h4 className='header-right'>- Get Information Quickly -</h4>
      </div>
      <div className="set-up">
        <h2>How To use Find My Degree</h2>
        <h4>
          This Site was designed to help students quickly and easily<br/>
          find and understand the requirments needed for university <br/>
          courses and degrees in south africa for free. <br/>
          <br/>
          we have aimed at giving you the information you need instatnly <br/>
          and in a straigt forward, easy to understand approach that <br/>
          saves you time and quite a lot of confusion. 
          <br/>
          <br/>
          There is also the option of comparing various courses against <br/>
          different schools across the country, showing you a detailed view <br/>
          of pricing, academic requiremnts and other aspects. <br/>
          <br/>
          click below or scroll down to get started
         </h4>
         <div className='btn-container'>
            <Link to='/universities'>
              <span className='btn'>Universities</span>
            </Link>
          <Link to="/courses">
            <span className='btn'>Courses</span>
          </Link>
          
          
            
          
         </div>
      </div>
    </header>
    
  )
}

export default Header