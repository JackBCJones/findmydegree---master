import React, {useState} from 'react'
import unis from '../../unidata.json';
import { A, Title, Text } from './CourseStyles';


export const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('ba')
      
    return (
      <section>
        <div className='search-container'>
          <input type="text" placeholder="There are lots more, Search Here!" onChange={event => {setSearchTerm(event.target.value)}}></input>
        </div>
      {unis.map((uni) => {
        const {courses, color, text} = uni;
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
            const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
            return (
              <A color={color} href={url} target='_blank' rel="noreferrer" key={url} className='course'>
                <Title text={text}>{title} {title2}</Title>
                <Text text={text}>{uni.url}</Text>
                <Text text={text}>{requirements}{req}</Text>
                <Text text={text}>
                  {sub1} {grade1} <br/>
                  {sub2} {grade2} <br/>
                  {sub3} {grade3} <br/>
                  {sub4} {grade4} 
                  </Text>
                <Text text={text}>click to learn more</Text>
              </A>
            )
          })}
        </div>
    )
  })}
  </section>
    )

}


export default Courses