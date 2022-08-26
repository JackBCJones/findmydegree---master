import {Link, useParams } from 'react-router-dom';
import { unis } from '../../unidata';
import './uni.css'



const Uni = () => {

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
            <Link to='/universities'>
            <span className='btn'>Universities</span>
            </Link>
          </div>
        </div>
      </div>
        <div className='courses-container'>
          {courses.map((course) => {
            const {year, title, link, department, code} = course;
            return (
              <a href={link} target='_blank' key={code} className='course'>
                <h4>{title}</h4>
                <p>{department}</p>
                <p>{year}</p>
                <p>click here to learn more</p>
              </a>
            )
          })}
        </div>
    </section>
  );
};

export default Uni