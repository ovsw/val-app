import React from 'react'
import QA from './qa'

const FAQArea = ({sectionTitle, sectionSubtitle, faqContent}) => {
  return (
    <div className='frequently-ask-question-area in-section section-padding-top-lg section-padding-bottom-lg bg-white'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              {sectionSubtitle && <h6>{sectionSubtitle}</h6>}
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='faequently-accordion'>
              {faqContent && faqContent.map((QandA, index) => <QA key={index} item={index + 1} {...QandA} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQArea
