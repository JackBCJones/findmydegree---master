import React from 'react'
import Header from '../../components/header/Header'
import Universities from '../../components/universities/Universities'
import SearchForm from '../../components/SearchForm/SeachForm'
import FAQ from '../../components/FAQ/FAQ'

const Home = () => {
  return (
    <>
    <Header />
    <SearchForm />
    <FAQ />
    {/* <Universities /> */}
    </>
  )
}

export default Home