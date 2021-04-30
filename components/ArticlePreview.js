import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/ArticlePreview.module.css'

const ArticlePreview = ({
  title,
  summary,
  author,
  scienceSubjectId,
  url,
  image,
  published,
  currentPage,
  filter,
}) => {
  const [thumbnail, setThumbnail] = useState('')

  //   useEffect(() => {
  //     fetch(`/api/pictures/${image}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setThumbnail(data.image)
  //       })
  //   }, [currentPage, filter])

  if (published) {
    return (
      <div className={styles.previewBox}>
        <h3 className={styles.title}>
          <Link href={`/article/${url}`}>{title}</Link>
        </h3>
        <Link href={`/article/${url}`} className={styles.thumbnail}>
          Thumbnail-placeholder{/* <img src={thumbnail} alt="Thumbnail" /> */}
        </Link>
        <p className={styles.summary}>{summary}</p>
        {/* <p>{author}</p> */}
        {/* <p>{science_subject}</p> */}
        <Link href={`/article/${url}`} className={styles.articleLink}>
          VIEW POST
        </Link>
      </div>
    )
  } else {
    return ''
  }
}

export default ArticlePreview
