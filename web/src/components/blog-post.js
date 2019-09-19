import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
// import Container from './container'
// import AuthorList from './author-list'

import InnerPageHeader from '../components/inner-page-header'
import Sidebar from '../components/sidebar'

// import styles from './blog-post.module.css'

function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
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
                    <div className='in-blog-metatop'>
                      <span> Published on: {format(publishedAt, 'MMMM Do, YYYY')} | Written by Jimmy Vercellino</span>

                    </div>
                    <img style={{float: 'left', margin: '0 1.5rem 1.5rem 0'}}
                      src={imageUrlFor(buildImageObj(mainImage))
                        .width(350)
                        .height(300)
                        .fit('crop')
                        .auto('format')
                        .url()}
                      alt={mainImage.alt}
                    />
                    {_rawBody && <PortableText blocks={_rawBody} />}

                    <div className='in-blog-metabottom mt-30'>
                      {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 08</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />Comment</a></span> */}
                      <span style={{color: 'red'}}>
                        {categories.map(category => (
                          <span key={category._id}>{category.title} </span>
                        ))}
                        <br />
                      Tags:
                      </span>
                    </div>

                    <div className='admin-author-details pt-5'>
                      <h4 className='mb-30'>Author</h4>

                      <div className='admin-aouthor'>
                        <div className='admin-image'>
                          <img src='/images/blog/author-image/author-image-1.png' alt='' />
                        </div>
                        <div className='admin-info'>
                          <div className='name'>
                            <h5>Jimmy Vercellino</h5>
                            <p>Mortgage Originator, Specializing in VA Loans</p>
                          </div>

                          <p>dolore magna aliqua. Ut enim ad consequat. Duis aute irure dolor veritaexplicaaquuntu consectetur</p>
                          <ul className='author-socialicons'>
                            <li><a href='#'><i className='zmdi zmdi-facebook' /></a></li>
                            <li><a href='#'><i className='zmdi zmdi-google-plus' /></a></li>
                            <li><a href='#'><i className='zmdi zmdi-twitter' /></a></li>
                            <li><a href='#'><i className='zmdi zmdi-instagram' /></a></li>
                          </ul>
                        </div>
                      </div>

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

export default BlogPost
