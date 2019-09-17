import React from 'react'

import Service from './service'

const ServicesArea = ({sectionTitle = 'Missing Title', sectionSubtitle, cardsContent}) => {
  return (
    <div className='services-area in-section section-padding-lg bg-shape'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              {sectionSubtitle && <h6>{sectionSubtitle}</h6>}
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className='row'>

          {cardsContent.map((serviceProps, index) => <Service key={index} {...serviceProps} />)}

        </div>

        <div className='row justify-content-center'>
          <a href='/' type='submit' className='in-button in-button-theme mt-5'>Apply for a VA Loan Now</a>
        </div>

      </div>
    </div>
  )
}

export default ServicesArea
