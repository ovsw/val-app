import React from 'react'
import Header from './header'
import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.css'
import '../styles/slick.css'
import '../styles/icons.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <div id='wrapper' className='wrapper'>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    {/* Page Conttent */}
    {children}
    <Footer />
  </div>
)

export default Layout
