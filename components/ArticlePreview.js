import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/ArticlePreview.module.css'

const ArticlePreview = ({
  title,
  summary,
  author,
  scienceSubjectId,
  url,
  thumbnail,
  published,
  currentPage,
  filter,
}) => {

  if (published) {
    return (
      <div className={styles.previewBox}>
        <h3 className={styles.title}>
          <Link href={`/article/${url}`}>{title}</Link>
        </h3>
        <Link href={`/article/${url}`}>
          <div className={styles.thumbnail}>
          <img src={thumbnail} alt="Thumbnail" />
          </div>
        </Link>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/article/${url}`}>
          <div className={styles.articleLink}>
          VIEW POST
          </div>
        </Link>
      </div>
    )
  } else {
    return ''
  }
}

export default ArticlePreview
