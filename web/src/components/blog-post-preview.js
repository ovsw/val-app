import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers' // cn
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

// import styles from './blog-post-preview.module.css'
// import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  return (

    <div className='in-blog mt-30'>
      <div className='in-blog-image'>
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(370)
              // .height(Math.floor((9 / 16) * 600))
                .height(252)
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </Link>
      </div>
      <div className='in-blog-content'>
        <div className='in-blog-metatop'>
          <span>{format(props.publishedAt, 'MMMM Do, YYYY')}</span>
          <span><a href='#'>{props.categories[0].title}</a></span>
        </div>
        <h4 className='in-blog-title'><a href='#'>{props.title}</a></h4>
        {props._rawExcerpt && (
          <div >
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className='in-blog-authorimage'>
          <span>
            <img src='/images/blog/author-image/author-image-1.png' alt='author image' />
          </span>
        </div>
        <div className='in-blog-metabottom'>
          <span>By Jimmy Vercellino</span>
          {/* <span><a href='#'><i className='zmdi zmdi-favorite-outline' /> Like : 05</a> / <a href='#'><i className='zmdi zmdi-comment-outline' />
Comment</a></span> */}
        </div>
      </div>
    </div>
  )
}

export default BlogPostPreview
