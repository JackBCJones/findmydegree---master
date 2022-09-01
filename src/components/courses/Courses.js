import React, {useState} from 'react'
import unis from '../../unidata.json';


export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('a')
      
    return (
      <section>
        <div className='search-container'>
          <input type="text" placeholder="  Search..." onChange={event => {setSearchTerm(event.target.value)}}></input>
        </div>
      {unis.map((uni) => {
        const {courses} = uni;
      return (
        <div className='courses-container'>
          {courses.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              } else {
                return null
              }
            }).map((course) => {
            const { title, url, requirements, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
            return (
              <a href={url} target='_blank' rel="noreferrer" key={url} className='course'>
                <h4>{title}</h4>
                <p>{requirements}</p>
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
    )
  })}
  </section>
    )

}


export default Courses