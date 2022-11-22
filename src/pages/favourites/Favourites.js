import React from 'react'
import { useGlobalContext } from '../../context/GlobalState'
import FavouriteCourse from '../../components/favouritedCourses/FavouriteCourse';
import './Favourites.css'

const Favourites = () => {
    const [{ favourites }] = useGlobalContext();


      return (
        <div className='page__container'>
        <div className='favourites__counter'>
          Total Favourites Saved: {favourites.length}
        </div>
          <section className='favourites__page__container'>
            {favourites.map(item => (
              <FavouriteCourse 
              title={item.title}
              title2={item.title2}
              url={item.url}
              nick={item.nick}
              text={item.text}
              color={item.color}
              />
            ))}
          </section>
        </div>
        )
      }

export default Favourites