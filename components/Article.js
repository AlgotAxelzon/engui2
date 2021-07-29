import React from 'react'
import Link from 'next/link'
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
          <img src={article.thumbnail} alt="Thumbnail" title={article.title} />
          <Markdown>{article.text}</Markdown>
          <div className={styles.donationbox}>
            <p>Was the post useful? Feel free to donate!</p>
            <a href="https://ko-fi.com/engineeringguidance" target="_blank" rel="noopener noreferrer" >DONATE</a>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>403</h1>
  }
}

export default Article
