import {Link, useParams } from 'react-router-dom';
import unis  from '../../unidata.json';
import './uni.css';
import {useState} from 'react';

const Uni = () => {

  const [searchTerm, setSearchTerm] = useState('ba')

  const { uniId } = useParams();

  const uni = unis.find((uni)=> uni.url === uniId);
    
  const {title, img, courses} = uni;


  return (
    <section>
      <div className='unipage-header'>
        <h2 className='title'>{title}</h2>
        <h4 className='title'>Undergraduate Degrees</h4>
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
              <a href={url} target='_blank' rel="noreferrer" key={url} className='course'>
                <h4>{title} {title2}</h4>
                <p>{requirements}{req}</p>
                <p>
                  {sub1} {grade1} <br/>
                  {sub2} {grade2} <br/>
                  {sub3} {grade3} <br/>
                  {sub4} {grade4} 
                  </p>
                <p>click to learn more</p>
              </a>
            )
          })}
        </div>
    </section>
  );
};

export default Uni