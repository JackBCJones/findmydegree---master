import React from 'react'
import CourseCard from '../../components/courses/CourseCard'
import "./CourseList.css";

const CourseList = () => {
  return (
    <section>
      {/* <CourseCard name={"University of Pretoria"}/> */}
      <CourseCard name={"University of The Witwatersrand"}/>
    </section>
  )
}

export default CourseList