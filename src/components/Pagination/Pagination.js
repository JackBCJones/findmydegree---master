import React from 'react'
import './Pagination.scss'

const Pagination = ({currentPage, coursesPerPage, totalCourses, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='pagination_item'>
                    <button  onClick={() => paginate(number)} className='pagination_link' style={{backgroundColor: currentPage === number ? "var(--clr-primary-1" : "var(--clr-primary-3)"}}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination