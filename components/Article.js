import React from 'react'
import 'katex/dist/katex.min.css'
import Markdown from './Markdown'
import styles from '../styles/Article.module.css'

const Article = ({ article }) => {
  if (article.public) {
    return (
      <div>
        <div className={styles.article}>
          <h1>{article.title}</h1>
          <p>Last edited: {article.lastEdited}</p>
          <img src={article.thumbnail} alt="Thumbnail" />
          <Markdown>{article.text}</Markdown>
        </div>
      </div>
    )
  } else {
    return <h1>403</h1>
  }
}

export default Article
