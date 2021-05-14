import React from 'react'
import styles from '../styles/Pagination.module.css'

const Pagination = ({ articlesPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            className={styles.pagknapp}
            type="button"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
