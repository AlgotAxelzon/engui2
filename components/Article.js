import React from 'react'
import { useEffect, useState, useContext } from 'react'
import 'katex/dist/katex.min.css'
import Markdown from './Markdown'
import styles from '../styles/Article.module.css'

const Article = ({ article }) => {
  // const [thumbnail, setThumbnail] = useState(null)

  //   useEffect(() => {
  //     if (article.thumbnail) {
  //       fetch(`/api/pictures/${article.thumbnail}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setThumbnail(data.image)
  //         })
  //     }
  //   }, [article])

  if (article.public) {
    return (
      <div>
        {/* <Route exact path={`${path}`}> */}
        <div className={styles.article}>
          <h1>{article.title}</h1>
          <p>Last edited: {article.lastEdited}</p>
          {/* <img src={thumbnail} alt="Thumbnail" /> */}
          <Markdown>{article.text}</Markdown>
        </div>
      </div>
    )
  } else {
    return <h1>403</h1>
  }
}

export default Article
