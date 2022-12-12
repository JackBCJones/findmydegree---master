import {Link, useParams } from 'react-router-dom';
import './uni.css';
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../../components/courses/CourseCard';
import Loading from '../../components/loading/Loading';
import { useGlobalContext } from '../../context/GlobalState';
import SeachForm from '../../components/SeachForm';


const url = `http://localhost:8000/unis`


const Uni = () => {
    const {uni_id} = useParams();
    const [loading, setLoading] = React.useState(false)
    const [uni, setUni] = React.useState(null)
    const {courses} = useGlobalContext()



// ------------- getting the university by id which is coming from params ---------------------
    
    React.useEffect(() => {
      setLoading(true)
      async function getUni() {
        try {
            const response = await fetch(`${url}/${uni_id}`);
            const data = await response.json()
            // console.log(data)
            if (data){
                setLoading(false)
                const {id, name, img } = data;
                const newUni = {id, name, img}
                setUni(newUni)
                // console.log(newUni)
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

    if(loading){
      return <Loading/>
    }
    if(!uni){
      return <h2>Uni to display unavailible</h2>
    }
    const {name, img, id} = uni
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
              return item.owner.id === id ? <CourseCard key={item.course_id} {...item}/> : null
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
