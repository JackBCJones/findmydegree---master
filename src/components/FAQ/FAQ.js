import React from 'react'
import './FAQ.scss'
import FAQCard from './FAQCard'
import { questions } from './faqData.js'

const FAQ = () => {

    
  return (
    <section className='faq'>
        <div className='faq_title'>
            <h2>Frequently asked questions</h2>
            <div className='faq_container'>
            {questions?.map((question) => {
                 return <FAQCard id={question.id} {...question}/>
            })}
            
        </div>
        </div>
        
    </section>
  )
}

export default FAQ