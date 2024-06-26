import React, { useState, useRef } from 'react'
import './style.css'
import AsideContainer from '@/components/asideContainer'
import faqData from '@/components/data/faqData'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import useClickOutside from '@/utliz/useClickOutside'
import CaretIcon from '@/components/caret'


export default function FAQ() {

  const [ openedIndex, setOpenedIndex ] = useState(null)

  const faqRef = useRef(null)

  const active = openedIndex !== null

  // toggle the list-items
  const toggleItem = (index) => {
    if (index === openedIndex) {
      setOpenedIndex(null)
    } else {
      setOpenedIndex(index)
    }
  }

  // using custom hook
  useClickOutside({
    containerRef: faqRef,
    childRef: faqRef,
    isActive: active,
    toggle: () => setOpenedIndex(null)
  })

  return (
    <AsideContainer>
      <SubHeader text="Frequently asked questions" />
      <ul className='faq-ul' ref={faqRef}>
        {faqData.map((item, index) => (
          <li 
            onClick={() => toggleItem(index)} 
            key={item.id} 
            className={`faq-container ${openedIndex === index ? "active" : ""}`}
          >
            <span>
              <SubHeaderSmall text={item.question} />
              <CaretIcon size={21} stateProp={openedIndex === index} />
            </span>
              <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </AsideContainer>
  )
}