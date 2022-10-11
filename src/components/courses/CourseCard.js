import React, {useState, useContext} from 'react'
import unis from '../../unidata.json';
import { A, Title, Text } from '../../components/courses/CourseStyles';
import "./CourseCard.css"



const CourseCard = ({ name }) => {

  const uni = unis.filter(uni => uni.name === name)

    const {color, text } = uni[0]

    const courses = uni[0].courses
    // console.log(courses)

    return (
    <>
    {courses.map((course) => {
      const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
        return (
          <div className='courses-container'>
            <A color={color} key={url} className='course'>
              <Title text={text}>{title} {title2}</Title>
              <Text text={text}>{uni.url}</Text>
              <Text text={text}>{requirements}{req}</Text>
              <Text text={text}>
                {sub1} {grade1} <br/>
                {sub2} {grade2} <br/>
                {sub3} {grade3} <br/>
                {sub4} {grade4} 
                </Text>
                <a target='_blank' href={url} rel="noreferrer">
                  <Text text={text}>click here to learn more</Text>
                </a>
                <div className='btn-container'>
                  <button className='btn'>Add to Favourites</button>
                </div>
            </A>
          </div>
        )
    })}
    </>
    )
    

  
}

export default CourseCard
// const [searchTerm, setSearchTerm] = useState('ba')

  //   return (
  //       <section>
  //         <div className='search-container'>
  //           <input type="text" placeholder="There are lots more, Search Here!" onChange={event => {setSearchTerm(event.target.value)}}></input>
  //         </div>
  //       {unis.map((uni) => {
  //         const {courses, color, text} = uni;
  //       return (
  //         <div className='courses-container'>
  //           {courses.filter((val) => {
  //               if (searchTerm === '') {
  //                 return val
  //               } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //                 return val
  //               } else {
  //                 return null
  //               }
  //             }).map((course) => {
  //             const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
  //             return (
  //               <A color={color} key={url} className='course'>
  //                 <Title text={text}>{title} {title2}</Title>
  //                 <Text text={text}>{uni.url}</Text>
  //                 <Text text={text}>{requirements}{req}</Text>
  //                 <Text text={text}>
  //                   {sub1} {grade1} <br/>
  //                   {sub2} {grade2} <br/>
  //                   {sub3} {grade3} <br/>
  //                   {sub4} {grade4} 
  //                   </Text>
  //                   <a target='_blank' href={url} rel="noreferrer">
  //                     <Text text={text}>click here to learn more</Text>
  //                   </a>
  //                 <button className='btn'>Add to Favourites</button>
  //               </A>
  //             )
  //           })}
  //         </div>
  //     )
  //   })}
  //   </section>
  //     )
  
  // }