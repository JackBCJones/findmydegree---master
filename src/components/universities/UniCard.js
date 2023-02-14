import React from 'react'
import { Link } from 'react-router-dom'
import './UniCard.scss'

const UniCard = ({img, name, uni_id, color, text_color, nickname}) => {
  return (
    <article className='uni'>
        <div className='uni_img_container'>
            <img src={img} alt='name'></img>
        </div>
        <div className='uni_footer'>
            <h4>{name}</h4>

        </div>
    </article>
  )
}

export default UniCard