import React from 'react'
import {Link} from 'gatsby'

const Social = () => {
  return (
    <div className='col-lg-12 pt-4 pb-3 mt-2 mb-2' style={{border: '1px solid #2b4d70'}}>
      <h3 className='widget-title mb-2'>
        <span>My Mission</span>
      </h3>
      <div className='text-center'>
        <p>To provide and assist all veterans and active duty military with ALL of their VA Home Loan Financing Needs!</p>

      </div>

      <p className='mt-4 text-center h5'>
        <ul className='author-socialicons'>
          <li><a href='#'><i className='zmdi zmdi-facebook' /></a></li>
          <li><a href='#'><i className='zmdi zmdi-google-plus' /></a></li>
          <li><a href='#'><i className='zmdi zmdi-twitter' /></a></li>
          <li><a href='#'><i className='zmdi zmdi-instagram' /></a></li>
        </ul>
      </p>
    </div>
  )
}

export default Social
