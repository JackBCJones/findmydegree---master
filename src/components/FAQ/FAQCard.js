import React, {useState} from 'react'
import './FAQ.scss'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"



const FAQCard = ({q, answer}) => {

    const [open, setOpen] = useState(false)


  return (
                    <div className='faq_question_container'>
                        <div onClick={() => setOpen(!open)}>
                        <div className='faq_question_container_icon'>
                        { open? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle /> }
                        </div>
                        <h4 className='faq_question'> {q}</h4>
                        </div>
                        {open && (
                            <div className='answer'>
                            {answer}
                        </div>
                        )}
                        
                    </div>
            

  )
}

export default FAQCard