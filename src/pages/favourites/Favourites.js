import React, {useCallback, useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/GlobalState'
import CourseCard from '../../components/courses/CourseCard'
// import SeachForm from '../../components/SeachForm'
// import FavouriteCourse from '../../components/favouritedCourses/FavouriteCourse';
import './Favourites.css'

const Favourites = () => {
  const {favourites}  = useGlobalContext();
  const [favCourses, setFavCourses] = useState([]);
  const url = 'http://localhost:8000'
  // console.log(favourites)
  const courses = []
  // const favr = favourites.map((i))


  useEffect(() => {

  async function fetchFavCourses(favId) {
    // setLoading(true)
    try {
      // console.log(favourites)
        const response = await fetch(`${url}/courses/${favId}`)
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

}, [favourites])

    
    
    
  
  
  // for (let i=0; i <favourites.length; i++) {
  //   let favId = favourites[i]
  //     fetchFavCourses(favId)
  // }
 

  if (favourites.length < 1) {
    return <h2>you have no favourites saved</h2>
  } else {
      return (
        <div className='page__container'>
        {/* <div className='favourites__counter'>
          You have {favourites.length} favourite courses saved
        </div> */}
        <section >
        <div className='course-container'>
          {favCourses?.map((favCourse) => {
            return <CourseCard key={favCourse.course_id} {...favCourse} />
          })} 
        </div>
      </section>
        </div>
        )
  }
      }

export default Favourites