import React from 'react'
import { B, Title, Text } from '../../components/courses/CourseStyles';
import { useGlobalContext } from '../../context/GlobalState';
import './FavouriteCourse.css'



const FavouriteCourse = ({link, title, requirements, owner, id }) => {

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
            <B color={owner.color} key={owner.nickname} className='favourite__course'>
              <Title text={owner.text_color}>{title}</Title>
              <Text text={owner.text_color}>{owner.nickname}</Text>
                <a target='_blank' href={link} rel="noreferrer">
                  click here to learn more
                </a>
                <div className='favourite__btn__container'>
                  <button className='favourite__btn' onClick={removeFromFavourites}>Remove From Favourites</button>
                </div>
            </B>
          </div>
        </>
        )
}

export default FavouriteCourse
