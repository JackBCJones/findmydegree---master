import React, { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalState'
import './SearchForm.scss'


export const SeachForm = () => {
  const { setSearchTerm, searchTerm, favourites, setFavourites } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCourse = () => {
    setSearchTerm(searchValue.current.value);
    // setFavourites(["a","b"]);
    // console.log(favourites);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='search_container'>
      <form className='search_form' onSubmit={handleSubmit}>
          <input className='search_input' placeholder='Search' type='text' name='freeText' id='freeText' ref={searchValue} onChange={searchCourse}></input>
          <button className='search_button'>Find Courses</button>
      </form>
    </section>
  )
}

export default SeachForm;
