import React from 'react'
import BlogPostPreview from './blog-post-preview'
import Pagination from './pagination'

function BlogPostPreviewList ({nodes, currentPage, numPages}) {
  return (
    <>
      {/* <h2 className={styles.headline}>{props.title}</h2> */}
      <Pagination currentPage={currentPage} numPages={numPages} />
      {nodes &&
          nodes.map(node => (
            <BlogPostPreview key={node.id} {...node} largeThumbs />
          ))
      }
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  )
}

BlogPostPreviewList.defaultProps = {
  title: '',
  nodes: []
}

export default BlogPostPreviewList
