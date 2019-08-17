import React from 'react'
import {Link} from 'gatsby'

// images
import thenNowImage from '../../images/then-now1.png'
import uncleSamImage from '../../images/uncle-sam.jpg'
import awardImage from '../../images/2017-award-opt.png'

const AboutArea = () => {
  return (

    <div className='about-area in-section section-padding-top-lg bg-white'>
      <div className='container custom-container'>
        <div className='row no-gutters'>
          <div className='col-xl-6 col-lg-12'>
            <div className='about-content heightmatch'>
              {/* <h6>about me </h6> */}
              <h1 className='h2'>Arizona VA Loan Specialist</h1>
              <h2 className='h4'>Serving Veterans NATIONWIDE.</h2>
              <ul className='ul-style-1'>
                <li>Get a VA Loan.</li>
                <li>I am here to help you achieve home ownership.</li>
                <li>Call Me At <a href='tel:602-908-5849'>602-908-5849</a>.</li>
                {/* <li>Do eiusmod tempor incididunt ut labore et dolore masit amet.</li> */}
              </ul>
              <Link to='/contact' className='in-button'>CONTACT ME TODAY</Link>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 d-flex align-items-center justify-content-center' style={{background: `url(${uncleSamImage}) no-repeat center center`}}>
            <img src={thenNowImage} alt='then-now' />
            {/* <div className='heightmatch'>
               <div className='in-videobox'>
                <img src='/images/other/videbox-image-1.jpg' alt='man with umbrella' />
                <a href='#' data-video-id='136709781' data-channel='vimeo' className='in-videobutton in-videobox-button'><i className='zmdi zmdi-play' /></a>
              </div>
            </div> */}
          </div>

          <div className='col-xl-6 col-lg-6'>
            <img src={awardImage} alt='Jimmy' className='w-100' />
          </div>
          <div className='col-xl-6 col-lg-12 d-flex align-items-stretch'>
            <div className='insurencebox d-flex flex-column align-items-start justify-content-center w-100'>
              {/* <h4>MY MISSION</h4> */}
              <h3 className='h2'>My Mission</h3>
              <p>To provide and assist all veterans and active duty military with ALL of their VA Home Loan Financing Needs!</p>
              {/* <form action='#' className='insurencebox-form'>
                <select>
                  <option value='life'>Life Insurence</option>
                  <option value='home'>Home Insurence</option>
                  <option value='travel'>Travel Insurence</option>
                  <option value='business'>Business Insurence</option>
                  <option value='car'>Car Insurence</option>
                  <option value='auto'>Auto Insurence</option>
                </select>
                <input type='text' placeholder='Name *' />
                <input type='text' placeholder='Email *' />
                <input type='text' placeholder='Phone *' />
                <button type='submit' className='in-button'>Submit</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutArea
