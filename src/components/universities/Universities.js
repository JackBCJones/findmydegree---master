import React from 'react';
import './universities.css';
import unis from '../../unidata.json';
import { Link } from 'react-router-dom';

const Universities = () => {


  return (
      <section className='uni-container' >
        {unis.map((uni) => {
          const {id, name, nick, img} = uni;
          return (
            <Link to={`/${nick}`} key={id}>
            <div className='uni'>
              <img src={img} alt={name} className='uni-img'/>
              <div className='uni-footer'>
                <h4>{name}</h4>
                <p>View Courses</p>
              </div>
            </div>
            </Link>
            );
        })}
      </section>
  )
}

export default Universities
