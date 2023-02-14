import React from 'react'
import './Filter.scss';
import { useGlobalContext } from '../../context/GlobalState'

const Filter = (props) => {
  const {unis} = useGlobalContext()

function addToFilterList(e) {
  props.filterValueSelected(e.target.value)
}

  return (
        <select 
        onChange={addToFilterList}
        className='filter_box'
        >
              <option>filter - all</option>
              {unis?.map((uni) => {
            return(
              <option 
              key={uni.uni_id} 
              value={uni.nickname} 
              >
                {uni.name}
              </option>
              )
            })}
        </select>
          )
            }

export default Filter
