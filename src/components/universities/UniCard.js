import React from 'react'
import { Link } from 'react-router-dom'
import './universities.css'

const UniCard = ({img, name, uni_id, color, text_color, nickname}) => {
  return (
    <article className='uni'>
        <div className='img-container'>
            <img src={img} alt='name'></img>
        </div>
        <div className='uni-footer'>
            <h4>{name}</h4>
            <Link to={`/university/${uni_id}`} className="btn btn-primary btn-details">
                details
            </Link>
        </div>
    </article>
  )
}

export default UniCard