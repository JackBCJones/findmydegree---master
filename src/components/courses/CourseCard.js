import { B, Title, Text } from '../../components/courses/CourseStyles';
import "./CourseCard.css"
import React from 'react'
// import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalState.js'

const CourseCard = ({ title, requirements, link, course_id, owner }, props) => {
  // const { addCourseToFavourites } = useContext(AppContext)
  // const FavouriteComponent = props.FavouriteComponent
  const {favourites, setFavourites}  = useGlobalContext();

  const addFavouriteCourse = (courseId) => {
    if (favourites.includes(courseId)) {
      return alert("already in favs")
    } else {
      const newFavouriteList = [...favourites, courseId];
      setFavourites(newFavouriteList);
    }
      
    // setSearchTerm('courseId');
    
    // setFavourites(["a","b"]);
    
    // const myTimeout = setTimeout(funcX, 2000);
    // function funcX() {
    // console.log(favourites);
    // }
    // console.log(searchTerm);

    // console.log("added to favs")
    // console.log(favourites)
  }
 
    return (
            <div className='courses-container'>
              <B color={owner.color} key={course_id} className='course'>
                <Title text={owner.text_color}>{title}</Title>
                <Text text={owner.text_color}>{owner.nickname}</Text>
                <Text text={owner.text_color}>{requirements}</Text>
                <a target='_blank' href={link} rel="noreferrer" className='btn'>Details</a>
                {course_id}
                <button className='btn btn-container' onClick={() => addFavouriteCourse(course_id)}>
                {/* props.course */}
                   Add to Favourites
                </button>
              </B>
            </div>
    )
    

  
}

export default CourseCard;

// {searchedCourse.map((course) => {
//   const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
  



/* <div className='card__container'>
        return (
          <div>
            <div className='courses-container'>
              <A color={color} key={course_id} className='course'>
                <Title text={text}>{title}</Title>
                <Text text={text}>{nickname}</Text>
                <Text text={text}>{requirements}</Text>
                  <a target='_blank' href={link} rel="noreferrer">
                    <Text text={text}>click here to learn more</Text>
                  </a>
                  <div className='btn-container'>
                    <button className='btn' onClick={addToFavourites}>Add to Favourites</button>
                  </div>
              </A>
            </div>
          </div>
        )
    </div> */

// // const [searchTerm, setSearchTerm] = useState('ba')

//   //   return (
//   //       <section>
//   //         <div className='search-container'>
//   //           <input type="text" placeholder="There are lots more, Search Here!" onChange={event => {setSearchTerm(event.target.value)}}></input>
//   //         </div>
//   //       {unis.map((uni) => {
//   //         const {courses, color, text} = uni;
//   //       return (
//   //         <div className='courses-container'>
//   //           {courses.filter((val) => {
//   //               if (searchTerm === '') {
//   //                 return val
//   //               } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//   //                 return val
//   //               } else {
//   //                 return null
//   //               }
//   //             }).map((course) => {
//   //             const { title, title2, url, requirements, req, sub1, sub2, sub3, sub4, grade1, grade2, grade3, grade4} = course;
//   //             return (
//   //               <A color={color} key={url} className='course'>
//   //                 <Title text={text}>{title} {title2}</Title>
//   //                 <Text text={text}>{uni.url}</Text>
//   //                 <Text text={text}>{requirements}{req}</Text>
//   //                 <Text text={text}>
//   //                   {sub1} {grade1} <br/>
//   //                   {sub2} {grade2} <br/>
//   //                   {sub3} {grade3} <br/>
//   //                   {sub4} {grade4} 
//   //                   </Text>
//   //                   <a target='_blank' href={url} rel="noreferrer">
//   //                     <Text text={text}>click here to learn more</Text>
//   //                   </a>
//   //                 <button className='btn'>Add to Favourites</button>
//   //               </A>
//   //             )
//   //           })}
//   //         </div>
//   //     )
//   //   })}
//   //   </section>
//   //     )
  
//   // }