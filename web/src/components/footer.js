// import {Link} from 'gatsby'
import React from 'react'
// import Icon from './icon'
// import {cn} from '../lib/helpers'

const Footer = () => (
  <footer className='footer'>

    { /* Footer Contact Area */ }
    <div className='footer-contact-area'>
      <div className='container'>
        <div className='footer-contact'>
          <div className='row'>
            <p className='py-4 footer-contact-block'>I help veterans get VA Loans in Phoenix, Scottsdale, Tempe, Chandler, Gilbert, and other Phoenix metro cities.
With an office in Phoenix AZ, I am known nationwide as a top VA loan specialist. So wherever you live or want to buy a home, don't hesitate to contact me - I am here to serve YOU!</p>
            {/* <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-phone' />
                </span>
                <p><a href='#'>+0884567863</a><br /><a href='#'>+0884567863</a></p>
              </div>
            </div>
            <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-home' />
                </span>
                <p>958 Lilyan Junction, Mitchellmouth, Rwanda</p>
              </div>
            </div>
            <div className='col'>
              <div className='footer-contact-block'>
                <span className='footer-contact-icon'>
                  <i className='zmdi zmdi-email' />
                </span>
                <p><a href='#'>info@example.com</a><br /><a href='#'>info2@example.com</a></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    { /* // Footer Contact Area */ }

    { /* Footer Inner */ }
    <div className='footer-inner' data-secondary-overlay='8'>

      { /* Footer Widgets Area */ }
      <div className='footer-widgets-area section-padding-lg'>
        <div className='container'>
          <div className='row widgets footer-widgets'>

            <div className='col-lg-3 col-md-6'>
              <div className='single-widget widget-info'>
                <div className='logo'>
                  <a href='index.html'>
                    <img src='/images/logo/logo-2.png' alt='footer logo' />
                  </a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incisequi nesciunt. Neque porro quisquam.</p>
                <ul className='footer-socialicons'>
                  <li><a href='#'><i className='zmdi zmdi-facebook' /></a></li>
                  <li><a href='#'><i className='zmdi zmdi-twitter' /></a></li>
                  <li><a href='#'><i className='zmdi zmdi-google-plus' /></a></li>
                  <li><a href='#'><i className='zmdi zmdi-instagram' /></a></li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6'>
              <div className='single-widget widget-links'>
                <h4 className='widget-title'>
                  <span>Policy</span>
                </h4>
                <ul>
                  <li><a href='#'>Term</a></li>
                  <li><a href='#'>Licenses</a></li>
                  <li><a href='#'>Fund</a></li>
                  <li><a href='#'>Support</a></li>
                  <li><a href='#'>Security</a></li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-widget widget-latestblog'>
                <h4 className='widget-title'>
                  <span>Latest Blog</span>
                </h4>
                <ul>
                  <li>
                    <div className='widget-latestblog-image'>
                      <a href='blog-details.html'>
                        <img src='/images/blog/thumbnails/blog-thumbnail-1.png' alt='blog thumbnail' />
                      </a>
                    </div>
                    <span>1st Janu, 2018</span>
                    <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
                  </li>
                  <li>
                    <div className='widget-latestblog-image'>
                      <a href='blog-details.html'>
                        <img src='/images/blog/thumbnails/blog-thumbnail-2.png' alt='blog thumbnail' />
                      </a>
                    </div>
                    <span>1st Janu, 2018</span>
                    <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-widget widget-newsletter'>
                <h4 className='widget-title'>
                  <span>Newsletter</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, coadipisicint, sed do eiusmod tempor incididunt</p>
                <form action='#' className='widget-newsletter-form'>
                  <input type='text' placeholder='Your email...' />
                  <button type='submit'><img src='/images/icons/paper-plane-white.png' alt='send' /></button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      { /* // Footer Widgets Area */ }

      { /* Footer Copyright Area */ }
      <div className='footer-copyright-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-12'>
              <p className='copyright-text'>Copyright {new Date().getFullYear()} &copy; <a href='#'>Gregory</a>, All Rights Reserved</p>
            </div>
            <div className='col-lg-6 col-12'>
              <ul className='copyright-links'>
                <li><a href='#'>Help</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Privacy</a></li>
                <li><a href='#'>Support </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      { /* // Footer Copyright Area */ }

    </div>
    { /* // Footer Inner */ }

  </footer>

)

export default Footer
