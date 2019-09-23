import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (
    <>
      {/* <h2 className={styles.headline}>{props.title}</h2> */}

      {props.nodes &&
          props.nodes.map(node => (
            <BlogPostPreview key={node.id} {...node} largeThumbs />
          ))
      }
    </>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: []
}

export default BlogPostPreviewGrid
