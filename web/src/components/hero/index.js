import React from 'react'
import Slider from 'react-slick'

function NextArrow (props) {
  const {onClick} = props
  return (
    <button onClick={onClick} className='in-sliderarrow-arrow in-sliderarrow-next'><i className='zmdi zmdi-chevron-right' /></button>
  )
}

function PrevArrow (props) {
  const {onClick} = props
  return (
    <button onClick={onClick} className='in-sliderarrow-arrow in-sliderarrow-prev'><i className='zmdi zmdi-chevron-left' /></button>
  )
}

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
    adaptiveHeight: true
  }

  return (
    // <!-- Hero Slider Area -->
    <Slider {...settings} className='heroslider-area in-sliderarrow'>

      {/* <!-- Hero Slider Single  --> */}
      <div className='heroslider animated-heroslider'>
        <div className='heroSliderBg d-flex align-items-center' style={{backgroundImage: "url('/images/bg/background-image-3s.jpg')"}} data-secondary-overlay='8'>

          <div className='container py-5'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div className='heroslider-content text-center'>
                  <h1><span>Apply for a </span>VA Loan</h1>
                  <p>I am here to help you get your dream home. Click below to start the VA Loan application process.</p>
                  <div className='heroslider-buttonholder'>
                    <a href='about-us.html' className='in-button in-button-theme'>Apply Now</a>
                    <a href='contact.html' className='in-button in-button-colorwhite'>My Story</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--// Hero Slider Single --> */}

      {/* <!-- Hero Slider Single --> */}
      {/* <div className='heroslider animated-heroslider'>
        <div className='heroSliderBg d-flex align-items-center' style={{backgroundImage: "url('/images/bg/background-image-3s.jpg')"}} data-secondary-overlay='8'>

          <div className='container py-5'>
            <div className='row align-items-center'>
              <div className='col-xl-9 col-lg-8'>
                <div className='heroslider-content'>
                  <h1><span>Apply for a </span>VA Loan</h1>
                  <p>I am here to help you get your dream home. Click here to start the VA Loan application process.</p>
                  <div className='heroslider-buttonholder'>
                    <a href='about-us.html' className='in-button in-button-theme'>About Us</a>
                    <a href='contact.html' className='in-button in-button-colorwhite'>Contact Us</a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='heroslider-roundbox roundbox'>
                  <div className='roundbox-block'>
                    <span className='roundbox-icon'>
                      <i className='flaticon-mind' />
                    </span>
                    <h5>Personal PLan</h5>
                  </div>
                  <div className='roundbox-block'>
                    <span className='roundbox-icon'>
                      <i className='flaticon-life-insurence' />
                    </span>
                    <h5>Famliy PLan</h5>
                  </div>
                  <div className='roundbox-block'>
                    <span className='roundbox-icon'>
                      <i className='flaticon-planning' />
                    </span>
                    <h5>Group PLan</h5>
                  </div>
                  <div className='roundbox-block'>
                    <span className='roundbox-icon'>
                      <i className='flaticon-businessman' />
                    </span>
                    <h5>Others PLan</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--// Hero Slider Single --> */}

      {/* <!-- Hero Slider Single --> */}
      <div className='heroslider animated-heroslider'>
        <div className='heroSliderBg d-flex align-items-center' style={{backgroundImage: "url('/images/bg/background-image-3s.jpg')"}}data-secondary-overlay='8'>

          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='heroslider-content'>
                  <h1><span>Apply for a</span> VA Loan</h1>
                  <p>I am here to help you get your dream home. Click below to start the VA Loan application process.</p>
                  <div className='heroslider-buttonholder'>
                    <a href='about-us.html' className='in-button in-button-theme'>Apply Now</a>
                    <a href='contact.html' className='in-button in-button-colorwhite'>My Story</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--// Hero Slider Single --> */}

    </Slider >

  )
}

export default Hero