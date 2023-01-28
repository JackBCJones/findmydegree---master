import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logodark.png';
import { links, socials } from './navdata'
import './Nav.css';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect
    ().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href='/'>
          <img src={logo} className='logo' alt="logo"/>
          </a>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            })}
          </ul>
        </div>
        {/* <ul className='social-icons'>
            {socials.map((social) => {
              const {id, url, icon} = social;
              return <li key={id}>
                <Link to={url}>{icon}</Link>
              </li>
            })}
        </ul> */}
      </div>
    </nav>
  )
}

export default Nav