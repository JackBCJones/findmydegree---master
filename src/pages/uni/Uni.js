import {Link, useParams } from 'react-router-dom';
import unis  from '../../unidata.json';
import './uni.css';
import React, {useState, useContext} from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../../context/GlobalState';
import CourseCard from '../../components/courses/CourseCard';



const Uni = () => {

  const [searchTerm, setSearchTerm] = useState('')


  const { uniId } = useParams();

  const uni = unis.find((uni)=> uni.nick === uniId);
    
  const {name, img, courses, color, text} = uni;

  // const [{ favourites }, dispatch] = useStateValue();

  // const addToFavourites = () => {
  //   dispatch({
  //     type: "ADD_TO_FAVOURITES",
  //     item: {
  //       title: title,
  //       url: url,
  //     }
  //   })
  // }


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
      <section>
        <CourseCard name={name}/>
      </section>
    </div>
    
  );
};

export default Uni