import React from 'react'
import {Link} from 'gatsby'

import styles from './mobileNav.module.css'

const Mobilenav = ({navStructure}) => {
  return (
    <div className={`${styles.mobileNavContainer} mobile-menu-wrapper clearfix`}>
      <div className='mobile-menu'>
        <div className='mean-bar'>
          <a href='#nav' className={`${styles.hamburgerBtn} meanmenu-reveal`}><i className='zmdi zmdi-menu' /></a>
          <nav className={styles.mobileNav}>
            <ul>
              {navStructure.map(({title, slug, children}) =>
                <li key={slug} className={children.length > 0 ? 'in-dropdown' : ''}>
                  <Link to={slug}>{title}</Link>
                  {children.length > 0 &&
                    <ul>
                      {children.map(({title, slug}) =>
                        <li><Link to={slug}>{title}</Link></li>
                      )}
                    </ul>
                  }
                  {children.length > 0 && <a className='mean-expand' href='#' style={{fontSize: '19px'}}>+</a>}
                </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Mobilenav
