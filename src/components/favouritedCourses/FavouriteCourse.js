import React from 'react'
import { A, Title, Text } from '../../components/courses/CourseStyles';
import { useGlobalContext } from '../../context/GlobalState';
import './FavouriteCourse.css'



const FavouriteCourse = ({ nick, url, title, title2, text, color }) => {

    const [{ favourites }, dispatch] = useGlobalContext();

    const removeFromFavourites = () => {
        dispatch({
          type: "REMOVE_FROM_FAVOURITES",
            title: title,
        });
      };
    // console.log(courses)
    return (
        <>
          <div className='favourite__card__container'>
            <A color={color} key={nick} className='favourite__course'>
              <Title text={text}>{title} {title2}</Title>
              <Text text={text}>{nick}</Text>
                <a target='_blank' href={url} rel="noreferrer">
                  <Text text={text}>click here to learn more</Text>
                </a>
                <div className='favourite__btn__container'>
                  <button className='favourite__btn' onClick={removeFromFavourites}>Remove From Favourites</button>
                </div>
            </A>
          </div>
        </>
        )
}

export default FavouriteCourse
