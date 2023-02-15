import { B, Title, Text } from '../../components/courses/CourseStyles';
import "./CourseCard.scss"
import React, {useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi';
import { useGlobalContext } from '../../context/GlobalState.js'

const CourseCard = ({ title, requirements, link, course_id, owner }) => {


  const {favourites, setFavourites}  = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false)

  const addFavouriteCourse = (courseId) => {
    if (favourites.includes(courseId)) {
      const newFavouriteList = [...favourites.filter(item => item !== courseId)];
      setFavourites(newFavouriteList);
     }
       else {
      const newFavouriteList = [...favourites, courseId];
      setFavourites(newFavouriteList);
      
    }
  }

  
 
    return (
            <div className='course_container'>
              <B color={owner.color} key={course_id} className='course_card'>
                <Title className='course_title' text={owner.text_color}>{title}</Title>
                <Text className='course_nickname' text={owner.text_color}>{owner.nickname}</Text>
                <div className='course_container_favourites'>
                  <button 
                    className='course_button_favourites' onClick={() => addFavouriteCourse(course_id)}>
                    <AiOutlineHeart style={{color: favourites.includes(course_id) ? "rgb(216, 159, 168)" : "var(--clr-primary-1)"}}/>
                  </button>
                </div>
                <div className='course_container_details'>
                  <button className='course_button_details' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen === false ? <p>show more</p> : <p>show less</p>} 
                  </button>
                </div>
                {isOpen && (
                <div>
                <Text className='course_requirements' text={owner.text_color}>Requirements: {requirements}</Text>
                <a target='_blank' 
                  href={link} 
                  rel="noreferrer" 
                  className='course_link'
                  >
                  <Text
                  text={owner.text_color}
                  >
                    <span>Apply & Find Out More - </span> {link} <FiExternalLink/>
                  </Text>
                  </a>
                </div>
                )}
                
                
                
                
                
              </B>
            </div>
    )
    

  
}

export default CourseCard;

