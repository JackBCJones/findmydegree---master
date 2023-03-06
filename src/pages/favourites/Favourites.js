import React, { useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/GlobalState'
import CourseCard from '../../components/courses/CourseCard'
import './Favourites.scss'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Favourites = () => {
  const {favourites}  = useGlobalContext();
  const [favCourses, setFavCourses] = useState([]);
  const courses = []


  // fetching favourite courses from state saved id

  useEffect(() => {
  async function fetchFavCourses(favId) {
    // setLoading(true)
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${favId}`)
        const data = await response.json();
        courses.push(data)
        if (courses) {
            const newCourses = courses.map((item)=>{
                const {title,requirements,id,link, owner} = item;
                return {
                    title: title,
                    requirements: requirements,
                    course_id: id,
                    link: link,
                    owner: owner
                }
            })
            setFavCourses(newCourses)
        } else {
          setFavCourses([])
        }
        // setLoading(false)
    } catch (error) {
        console.log(error)
        // setLoading(false) 
    }
  };
  if (favourites.length > 0){
    for (let i=0; i<favourites.length; i++){
      fetchFavCourses(favourites[i])
    }
      
    }
    
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [favourites])

    // End of fetching function ////////////
    
      return (
        <section className='fav'>
          <div className='fav_nav_container'>
            <Link to="/courses"><button> <BsArrowLeft/> <p>Find courses</p></button></Link>
            <h4>Favourites ({favourites.length})</h4>
          </div>
          <h3>Selected courses</h3>
          {favourites.length < 1? 
          <div className='fav_empty_container'>
            <p>Eish bru, it looks like you don't have any favourites saved<br/> you should go get some. <br/> click the heart in the top-right <br/>corner of any course and come back here</p>
            <Link to="/courses"><button>Find Courses</button></Link>
          </div>
           : 
          <div className='fav_course_container'>
            {favCourses?.map((favCourse) => {
              return <CourseCard key={favCourse.course_id} {...favCourse} />
            })} 
          </div>}
          
          
      </section>
        )

        
  }

export default Favourites