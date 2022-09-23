import {Link, useParams } from 'react-router-dom';
import unis  from '../../unidata.json';
import './uni.css';
import {useState} from 'react';
import { A, Title, Text } from '../../components/courses/CourseStyles';
import { motion } from 'framer-motion';

const Uni = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const { uniId } = useParams();

  const uni = unis.find((uni)=> uni.url === uniId);
    
  const {title, img, courses, color, text} = uni;


  return (
    <section>
      <div className='unipage-header'>
        <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 1}}
        >
          <h2 className='title'>{title}</h2>
          <h4 className='title'>Undergraduate Degrees</h4>
        </motion.div>
        <div className='unipage-img'>
          <img src={img} alt={title} />
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
        <input type="text" placeholder="  Search..." onChange={event => {setSearchTerm(event.target.value)}}></input>
      </div>
        <div className='courses-container'>
          {courses.filter((val) => {
            if (searchTerm === '') {
              return val
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
             else {
              return null
            }
          }).map((course) => {
            const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
            return (
              <A color={color} href={url} target='_blank' rel="noreferrer" key={url} className='course'>
                <Title text={text}>{title} {title2}</Title>
                <Text text={text}>{requirements}{req}</Text>
                <Text text={text}>
                  {sub1} {grade1} <br/>
                  {sub2} {grade2} <br/>
                  {sub3} {grade3} <br/>
                  {sub4} {grade4} 
                  </Text>
                <Text id='learnMore' text={text}>click to learn more</Text>
              </A>
            )
          })}
        </div>
    </section>
  );
};

export default Uni