import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalState'


export const SeachForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCourse = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search courses
          </label>
          <input type='text' id='name' ref={searchValue} onChange={searchCourse}></input>
        </div>
      </form>
    </section>
  )
}

export default SeachForm;
