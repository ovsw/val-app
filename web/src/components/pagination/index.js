import React from 'react'
import {Link} from 'gatsby'

import styles from './pagination.module.css'

const Pagination = ({currentPage, numPages}) => {
  // pagination constants
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <ul className={`tag-list ${styles.paginationList}`} style={{paddingLeft: '0'}}>
      {!isFirst && (
        <Link to={`/blog/${prevPage}`} rel='prev' title='Previous Page'>←</Link>
      )}

      {Array.from({length: numPages}, (_, i) => (
        <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? '' : i + 1}`} activeClassName={styles.activeLink}>
          {i + 1}
        </Link>
      ))}

      {!isLast && (
        <Link to={`/blog/${nextPage}`} rel='next' title='Next Page'>→</Link>
      )}
    </ul>
  )
}

export default Pagination
