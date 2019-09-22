import React from 'react'
// import {buildImageObj} from '../lib/helpers'
// import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
// import Container from './container'
// import AuthorList from './author-list'

import InnerPageHeader from '../components/inner-page-header'
import Sidebar from '../components/sidebar'

// import styles from './blog-post.module.css'

function GenericPage (props) {
  const {_rawBody, title} = props
  return (
    <>
      <InnerPageHeader title={title} />

      <main className='page-content'>

        {/* <!-- Blog Details --> */}
        <div className='blog-details-area section-padding-sm bg-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='blog-details-wrap'>
                  <div className='blog-content'>
                    {/* <h1>{title}</h1> */}
                    {_rawBody && <PortableText blocks={_rawBody} />}

                    <div className='in-blog-metabottom mt-30'>
                      {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 08</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />Comment</a></span> */}
                    </div>

                    {/* <!-- blog-details-wrapper -->   */}

                  </div>
                </div>
              </div>

              <Sidebar />

            </div>
          </div>
        </div>
        {/* <!--// Blog Details --> */}

      </main>
      {/* <!--// Page Conttent --> */}
    </>
  )
}

export default GenericPage
