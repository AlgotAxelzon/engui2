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
      (<div className={styles.previewBox}>
        <h2 className={styles.title}>
          <Link href={`/${url}`} title={title} legacyBehavior>
            {title}
          </Link>
        </h2>
        <Link title={title} href={`/${url}`} passHref legacyBehavior>
          <div className={styles.thumbnail}>
            <img src={thumbnail} alt="Thumbnail" title={title} />
          </div>
        </Link>
        <p className={styles.summary}>{summary}</p>
        <Link title={title} href={`/${url}`} legacyBehavior>
          <div className={styles.articleLink}>
            VIEW POST
          </div>
        </Link>
      </div>)
    );
  } else {
    return ''
  }
}

export default ArticlePreview
