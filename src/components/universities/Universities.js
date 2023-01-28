import React from 'react';
import './universities.css';
import UniCard from './UniCard';
import Loading from '../loading/Loading'
import { useGlobalContext } from '../../context/GlobalState';

const Universities = () => {

  const {unis, loading}  = useGlobalContext();

  if(loading){
    return <Loading />
  }
  if(unis.length < 1) {
    return (
    <h2>No courses matched your search criteria</h2>
    )
  }

  return (
      <section className='uni-container'>
          {unis.map((item) => {
            return <UniCard key={item.uni_id} {...item}/>
          })} 
      </section>
  )
}

export default Universities

