import React from 'react'
import CourseCard from '../../components/courses/CourseCard'
import "./CourseList.css";
import { useGlobalContext } from '../../context/GlobalState.js'
import SeachForm from '../../components/SeachForm.js';


const CourseList = () => {

  const {courses, favourites, setFavourites}  = useGlobalContext();

  


  return (
      <section >
        <div className='search-container'>
          <SeachForm />
        </div>
        <div className='course-container'>
          {courses?.map((course) => {
            return <CourseCard key={course.course_id} {...course} />
          })} 
        </div>
      </section>

  )

  
}

  // const [nicks, setNicks] = useState([]);
  // const [filterCourse, setFilterCourse] = useState([]);

  
//   const handleWorkFilter = (item) => {
//     setActiveFilter(item)

//     // if (item === 'ALL') {
//     //   setFilterCourse(nicks)
//     // } else {
//     //   setFilterCourse(nicks.filter((course) => course.uni.nick.includes(item)))
//     // }
//   }
  
//   return (
//     <div className='filter__container'>
//       <h3 className='filter__header'>Filter: </h3>
//       <div className='app__course-filter'>
//           {['UCT', 'TUKS', 'UJ', 'WITS', 'STELLIES', 'UNISA', 'RHODES', 'ALL'].map((item, index) => (
//             <button 
//             key={index}
//             onClick={() => handleWorkFilter(item)}
//             className={`app__course-filter-item ${activeFilter === item? 'item-active' : '' }`}
//             >
//             {item}
//             </button>
//           ))}
//       </div>
//       <section className='course__page__container'>
//         {activeFilter === "ALL" ? 
//         <>
//           <CourseCard name={"University of The Witwatersrand"}/>
//           <CourseCard name={"University of Pretoria"} />
//         </> : <></>}

//         {activeFilter === "WITS" ? 
//         <>
//           <CourseCard name={"University of The Witwatersrand"}/>
//         </> : <></>}
//         {activeFilter === "TUKS" ? 
//         <>
//           <CourseCard name={"University of Pretoria"} />
//         </> : <></>}
//         {activeFilter === "UJ" ? 
//         <>
//           <CourseCard name={"University of Johannesburg"} />
//         </> : <></>}
//         {activeFilter === "STELLIES" ? 
//         <>
//           <CourseCard name={"University of Stellenbosche"} />
//         </> : <></>}
//         {activeFilter === "UCT" ? 
//         <>
//           <CourseCard name={"University of Cape Town"} />
//         </> : <></>}
//         {activeFilter === "UNISA" ? 
//         <>
//           <CourseCard name={"University of South Africa"} />
//         </> : <></>}
//         {activeFilter === "RHODES" ? 
//         <>
//           <CourseCard name={"Rhodes University"} />
//         </> : <></>}
        
//       </section>
//     </div>
//   )
// }

export default CourseList;