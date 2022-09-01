import React from 'react'
import unis from '../../unidata.json';


export const Courses = () => {
      return (
      unis.map((uni) => {
        const {courses} = uni;
      return (
        <section className='courses-container'>
            {courses.map((course) => {
            const { title, url, code, requirements, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
            return (
                <a href={url} target='_blank' rel="noreferrer" key={code} className='course'>
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
        </section>
      )
    })
    )

}


export default Courses