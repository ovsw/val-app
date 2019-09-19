import React from 'react'
import {Link} from 'gatsby'
// import Icon from './icon'
// import {cn} from '../lib/helpers'

import MainNav from './mainNav'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <header className='header'>

    {/*  Header Top Area  */}
    <div className='header-toparea'>
      <div className='container'>

        {/*  Header Logo */}
        <Link to='/' className='header-logo'>
          <img src='/images/logo/logo.png' alt='VA Loans For Vets' />
        </Link>
        {/* Header Logo */}

        {/* <div className='row justify-content-betwween'>
          <div className='col-lg-6'>
            <ul className='header-topcontact'>
              <li><i className='zmdi zmdi-phone' /> PHONE : <a href='#'>123412341</a></li>
              <li><i className='zmdi zmdi-email' /> E-MAIL : <a href='#'>demo@gmail.com</a></li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <ul className='header-toplinks'>
              <li><a href='#'>GET A QUOTE</a></li>
              <li><a href='#'>NEED AN AGENT</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
    {/*  Header Top Area */}

    {/*  Header Bottom Area */}
    <div className='header-bottomarea'>
      <div className='container'>
        <div className='header-bottom'>

          {/*  Main Navigation */}
          <MainNav />
          {/* Main Navigation */}

          {/* <div className='header-right-wrap'> */}
          {/*  Header Search */}
          {/* <div className='header-search'>
              <button className='header-searchtrigger'><i className='zmdi zmdi-search' /></button>
              <form className='header-searchbox' action='#'>
                <input type='text' placeholder='Search...' />
                <button type='submit'><i className='zmdi zmdi-search' /></button>
              </form>
            </div> */}
          {/* Header Search */}

          {/*  Buy Now */}
          {/* <div className='buy-now'>
              <a href='https://themeforest.net/item/gregory-agency-bootstrap-4-template/22864578?ref=AslamHasib' className='buy-now-button'>Buy Now</a>
            </div> */}
          {/* Buy Now */}

          {/* </div> */}

        </div>
      </div>
    </div>
    {/* Header Bottom Area */}

    {/*  Mobile Menu */}
    <div className='mobile-menu-wrapper clearfix'>
      <div className='container'>
        <div className='mobile-menu' />
      </div>
    </div>
    {/* Mobile Menu */}

  </header>

)

export default Header
