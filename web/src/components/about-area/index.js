import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

// images
// import thenNowImage from '../../images/then-now1.png'
import uncleSamImage from '../../images/uncle-sam.jpg'
// import VideoBgImage from '../../images/jimmy-vercellino-interview-good-morning-arizona.jpg'

import Img from 'gatsby-image'

const AboutArea = () => {
  const {thenNowImg, videoBgImage} = useStaticQuery(
    graphql`
    query {
      thenNowImg: file(relativePath: { eq: "then-now1.png" }) {
        childImageSharp {
          fixed(width: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      videoBgImage: file(relativePath: { eq: "jimmy-vercellino-interview-on-good-morning-arizona.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
  )
  return (

    <div className='about-area in-section section-padding-top-lg bg-white'>
      <div className='container custom-container'>
        <div className='row no-gutters'>
          <div className='col-xl-6 col-lg-12'>
            <div className='about-content heightmatch'>
              {/* <h6>about me </h6> */}
              <h1 className='h2'>Arizona VA Loan Specialist</h1>
              <h2 className='h4'>Serving Veterans NATIONWIDE.</h2>
              <p>My Mission - To provide and assist all veterans and active duty military with ALL of their VA Home Loan Financing Needs!</p>
              <ul className='ul-style-1'>
                <li>Get a VA Loan.</li>
                <li>I am here to help you achieve home ownership.</li>
                <li>Call Me At <a href='tel:602-908-5849'>602-908-5849</a>.</li>
                {/* <li>Do eiusmod tempor incididunt ut labore et dolore masit amet.</li> */}
              </ul>
              <Link to='/contact-me' className='in-button'>CONTACT ME TODAY</Link>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 d-flex align-items-center justify-content-center py-5' style={{background: `url(${uncleSamImage}) no-repeat center center`}}>
            {/* <img src={thenNowImage} alt='then-now' /> */}
            <Img fixed={thenNowImg.childImageSharp.fixed} alt='Jimmy Vercellino, then as a Marine and now as a VA Loan Specialist' />
            {/* <div className='heightmatch'>
               <div className='in-videobox'>
                <img src='/images/other/videbox-image-1.jpg' alt='man with umbrella' />
                <a href='#' data-video-id='136709781' data-channel='vimeo' className='in-videobutton in-videobox-button'><i className='zmdi zmdi-play' /></a>
              </div>
            </div> */}
          </div>

          <div className='col-xl-6 col-lg-6'>
            <a href='https://www.youtube.com/watch?v=UgUybgYklkE' target='_blank'><Img fluid={videoBgImage.childImageSharp.fluid} alt='Jimmy' className='w-100' style={{height: '100%'}} /></a>
          </div>
          <div className='col-xl-6 col-lg-12 d-flex align-items-stretch'>
            <div className='insurencebox d-flex flex-column align-items-start justify-content-center w-100'>
              {/* <h4>MY MISSION</h4> */}
              {/* <h3 className='h2'>VIDEO: Interview on 3TV</h3> */}
              <h3 className='h4'>VIDEO: Jimmy Vercellino talks about VA loans on Good Morning Arizona.</h3>
              <ul className='ul-style-1'>
                <li>VA Loan misconceptions.</li>
                <li>Upcoming legislation changes to VA Loans.</li>
                <li>Why it's important to speak with a VA Loans Specialist.</li>
                {/* <li>Do eiusmod tempor incididunt ut labore et dolore masit amet.</li> */}
              </ul>
              <a href='https://www.youtube.com/watch?v=UgUybgYklkE' target='_blank' className='in-button in-button-theme'> <i className='zmdi zmdi-play' style={{marginRight: '1rem'}} /> Watch Now</a>
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
