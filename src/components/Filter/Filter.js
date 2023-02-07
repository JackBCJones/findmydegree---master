import React, {useState, useEffect} from 'react'
import './Filter.scss'
import { useGlobalContext } from '../../context/GlobalState'

const Filter = ({ filterArray }) => {
  const [isOpen, setIsOpen] = useState(false)
  const {unis} = useGlobalContext()
  // const [filterList, setFilterList] = useState([])
  
  // const memoUnis = useMemo(() => unis, [unis])


//   const addToFilterList = (nick) => {
//     if (filterList.includes(nick)) {
//       const newFilterList = [...filterList.filter(item => item !== nick)];
//       setFilterList(newFilterList);
//     } else {
//       const newFilterList = [...filterList, nick];
//       setFilterList(newFilterList);
//     }
//   }
// // console.log(filterList)
//   useEffect(() => {
//     console.log(filterList);

//   }, [filterList])

const filterCourses = (nick) => {
  filterArray(nick)
}
  

  // console.log(filterList)


  return (
    <div className='filter_container'>
       <div>
        <h4>filter</h4>
       </div> 
       <button onClick={() => setIsOpen(!isOpen)}>
        filter universities: 
       </button>
       {isOpen && (
        <form>
          {unis?.map((uni) => {
            return(
              <button key={uni.uni_id} onClick={() => filterCourses(uni.nickname)} filter={uni.nickname} >{uni.name}</button>
            )
          })}
          
        </form>
        )}
    </div>
  )
}

export default Filter