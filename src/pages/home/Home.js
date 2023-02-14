import React from 'react'
import Header from '../../components/header/Header'
import Universities from '../../components/universities/Universities'
import SearchForm from '../../components/SearchForm/SeachForm'

const Home = () => {
  return (
    <>
    <Header />
    <SearchForm />
    <Universities />
    </>
  )
}

export default Home