import {Link, useParams } from 'react-router-dom';
import './uni.css';
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../../components/courses/CourseCard';
import Loading from '../../components/loading/Loading';
import { useGlobalContext } from '../../context/GlobalState';
import SeachForm from '../../components/SeachForm';




const url = `http://localhost:8000/unis`
const url2 = `http://localhost:8000/courses`


const Uni = () => {
    const {uni_id} = useParams();
    const [loading, setLoading] = React.useState(false)
    const [uni, setUni] = React.useState(null)
    const {searchTerm} = useGlobalContext()
    const [courses, setCourses] = useState([])



// ------------- getting the university by id which is coming from params ---------------------
    
    React.useEffect(() => {
      setLoading(true)
      async function getUni() {
        try {
            const response = await fetch(`${url}/${uni_id}`);
            const data = await response.json()
            // console.log(data)
            if (data){
                // console.log(data)
                setLoading(false)
                const {id, name, img } = data;
                const newUni = {id, name, img}
                setUni(newUni)
                
            } else {
                setUni(null)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }  
      } 
      getUni()
    }, [uni_id])

    // ------------- Getting the courses via the owner ID ------------

    
    useEffect(() => {
      let timeoutId = null;
      // setLoading(true)
      async function fetchCoursesByOwner() {
      try {
          
          const response = await fetch(`${url2}/owner_id/${uni_id}?search=${searchTerm}&limit=10`)
          const data = await response.json();
          const courses = data;
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
              setCourses(newCourses)
              // console.log(newCourses)
          } else {
              setCourses([])
          }
          // setLoading(false)
      } catch (error) {
          console.log(error)
          // setLoading(false) 
      }
    };
    if (searchTerm) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchCoursesByOwner, 500);
    }
    return () => clearTimeout(timeoutId);
    
    // fetchCoursesByOwner()
  }, [uni_id, searchTerm]);

  // useEffect(() => {
  //   fetchCoursesByOwner()
  // }, [fetchCoursesByOwner, uni_id])

  // console.log(searchTerm)
  // --------------------

    if(loading){
      return <Loading/>
    }
    if(!uni){
      return <h2>Uni to display unavailible</h2>
    }
    const {name, img} = uni
    // const filteredData = courses.filter(item => item.owner.id === id);
    // console.log(courses)
    return (
      <div className='container'>
        <div className='unipage-header'>
          <motion.div
          whileInView={{x: [-100, 0], opacity: [0, 1]}}
          transition={{duration: 1}}
          >
            <h2 className='title'>{name}</h2>
            <h4 className='title'>Undergraduate Degrees</h4>
          </motion.div>
          <div className='unipage-img'>
            <img src={img} alt={name} />
            <div className='unipage-footer'>
              <Link to='/'>
                <span className='btn'>Home</span>
              </Link>
              <br/>
              <Link to='/universities'>
              <span className='btn'>Universities</span>
              </Link>
              <br/>
              <h4>how to calculate your APS</h4>
              <p>APS is calculated by taking 6 of your best subjects (excluding Life Orientation). <br/>
            The percentage of each subject determins your points. The total number of <br/>
            points is your APS. 
            The point system works as follows:
            </p>
            <ul>
              <li>80% - 100% = 7 Points</li>
              <li>70% - 79% = 6 Points</li>
              <li>60% - 69% = 5 Points</li>
              <li>50% - 59% = 4 Points</li>
              <li>40% - 49% = 3 Points</li>
              <li>30% - 39% = 2 Points</li>
              <li>0% - 29% = 1 Point</li>
            </ul>
            <p>The Minimum APS for a Bachelor's Degree is 21</p>
            </div>
          </div>
        </div>
        <div className='search-container'>
          <SeachForm />
        </div>
          <div className='course-container'>
            {courses?.map((item) => {
              return <CourseCard key={item.course_id} {...item}/> 
            })} 
          </div>
      </div>
      
    );
  };


export default Uni

 // const [{ favourites }, dispatch] = useStateValue();

  // const addToFavourites = () => {
  //   dispatch({
  //     type: "ADD_TO_FAVOURITES",
  //     item: {
  //       title: title,
  //       link: link,
  //     }
  //   })
  // }
