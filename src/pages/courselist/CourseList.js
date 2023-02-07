import React, {useState, useCallback} from 'react'
import CourseCard from '../../components/courses/CourseCard'
import "./CourseList.scss";
import { useGlobalContext } from '../../context/GlobalState.js'
import SeachForm from '../../components/SearchForm/SeachForm.js';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';


const CourseList = () => {

  const {courses}  = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1)
  const [coursesPerPage] = useState(50)

  // get current posts for creating a limit of 50 posts per page
  const indexOfLastCourse = currentPage * coursesPerPage
  const inderOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = courses.slice(inderOfFirstCourse, indexOfLastCourse)
  
  // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const paginate = useCallback(pageNumber => {
    setCurrentPage(pageNumber);
  }, []);
  

  // const handleFilter = (nick) => {
  //   console.log(nick)
  // }
  

  return (
      <section >
        <div className='search_container'>
          <SeachForm />
        </div>
        <div>
          {/* <Filter filterArray={handleFilter}/> */}
        </div>
        <div className='course_list_container'>
          {currentCourses?.map((course) => {
            return <CourseCard key={course.course_id} {...course} />
          })} 
        </div>
        <div className='pagination_container'>
          <Pagination 
          coursesPerPage={coursesPerPage} 
          totalCourses={courses.length} 
          paginate={paginate}
          currentPage={currentPage}/>
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