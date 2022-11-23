import {Link, useParams } from 'react-router-dom';
import './uni.css';
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../../components/courses/CourseCard';
import Loading from '../../components/loading/Loading';
import SeachForm from '../../components/SeachForm';
// import reducer from '../../context/reducer';

const url = `http://localhost:8000/unis`
const courseUrl = 'http://127.0.0.1:8000/courses/owner_id'




const Uni = () => {
    const {uni_id} = useParams();
    const [loading, setLoading] = React.useState(false)
    const [uni, setUni] = React.useState(null)
    const [courses, setCourses] = React.useState([])
    const searchValue = React.useRef('');
    const [searchTerm, setSearchTerm] = React.useState('a')
    const [coursesByOwner, setCoursesByOwner] = React.useState([]);



// ------------- getting the university with id of params ---------------------
    React.useEffect(() => {
        setLoading(true)
        async function getUni(){
            try {
                const response = await fetch(`${url}/${uni_id}`);
                const data = await response.json()
                if (data) {
                    setLoading(false)
                    const {id: uni_id, name, img, nickname, color, text_color} = data
                    const newUni = {uni_id, name, img, nickname, color, text_color} 
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
// ------------------ fetching courses with the owner id -------------------
      const getCoursesByOwner = async () => {
        try {
            const response = await fetch(`${courseUrl}/${uni_id}?search=${searchTerm}&limit=10`);
            const data = await response.json()
            const courseData = data
            if (courseData) {
              // console.log(courseData)
                setLoading(false)
                const newCourses = courseData.map((item)=>{
                  const {title,requirements,id,link, owner_id, owner} = item;
                  return {
                      title: title,
                      requirements: requirements,
                      course_id: id,
                      link: link,
                      owner: owner_id,
                      owner: owner
                  }
              })
              setCoursesByOwner(newCourses)
            } else {
                setCoursesByOwner([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    React.useEffect(() => {
        getCoursesByOwner()

    }, [searchTerm])


    // ------- Search component ------------
    // had to do the search here due to complications with the owner id
      const searchCourse = () => {
        setSearchTerm(searchValue.current.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault()
      }

    if (loading) {
        return <Loading />
    } 
    
    if (!uni || !courses)  {
        return <h2>no Uni to display</h2>
    }
    
    
    const {name, img, nickname, color, text_color} = uni;
    // const {title, requirements, link, course_id} = courses;
    // console.log(courses)
    if (coursesByOwner.length < 1){
      return (<h2>no courses are availible yet</h2>)
    } 


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
      <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search courses
          </label>
          <input type='text' id='name' ref={searchValue} onChange={searchCourse}></input>
        </div>
      </form>
    </section>
        </div>
      <section className='uni__course-container'>
      {coursesByOwner.map((item) => {
  return coursesByOwner? <CourseCard key={item.course_id} {...item}/> : <h2>no courses match your search</h2>
})} 
      </section>
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
