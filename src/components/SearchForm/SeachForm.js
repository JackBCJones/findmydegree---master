import React from 'react'
import { useGlobalContext } from '../../context/GlobalState'
import './SearchForm.scss'
import { Link } from 'react-router-dom'


export const SeachForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCourse = () => {
    setSearchTerm(searchValue.current.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    // <section className=''>
      <form className='search_container' onSubmit={handleSubmit}>
          <input className='search_input' placeholder='Search' type='text' name='freeText' id='freeText' ref={searchValue} onChange={searchCourse}></input>
          <Link to="/courses"><button className='search_button'>Find Courses</button></Link>
      </form>
    // </section>
  )
}

export default SeachForm;
