import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Header = () => {


  return (
    <header>
      <div 
      className='title-container'
      // whileInView={{x: [-100, 0], opacity: [0, 1]}}
      // transition={{duration: 1}}
      > 
        {/* <h3>Welcome to</h3> */}
        <h1 className='title'>find universities <br/> & courses <br/>throughout<br/> south africa</h1>
        {/* <h4 className='header-right'>- Get Information Quickly -</h4> */}
      </div>
      <div className='title2-container'>
        <h2 className='title2'>The number 1 place to find all the information you need </h2>
      </div>
      {/* <div 
      className="set-up"
      // whileInView={{y: [100, 0], opacity: [0, 1]}}
      // transition={{duration: 1}}
      >
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
          By Clicking any of the courses shown on this site, you will be <br/>
          taken driectly to the respective University course for a much <br/> 
          more detailed breakdown of the course. 
          <br/>
          <br/>
          There is also the option of comparing various courses against <br/>
          different schools across the country, showing you a detailed view <br/>
          of pricing, academic requiremnts and other aspects. <br/>
          <br/>
          click below or scroll down to get started
         </h4>
         <p> Please be aware that some Schools do not easily <br/> 
         share or make available their course information <br/>
         and requirements and thus are not available at <br/> 
         the moment as they require further digging.</p>
         <div className='btn-container'>
            <Link to='/universities'>
              <span className='btn'>Universities</span>
            </Link>
          <Link to="/courses">
            <span className='btn'>Courses</span>
          </Link>
          
          
            
          
         </div>
      </div> */}
    </header>
    
  )
}

export default Header