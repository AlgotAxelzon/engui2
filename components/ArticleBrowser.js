import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ArticlePreview from './ArticlePreview'
import Pagination from './Pagination'
import Filter from './Filter'
import styles from '../styles/ArticleBrowser.module.css'

const ArticleBrowser = ({ articles, subjects }) => {
  const [filter, setFilter] = useState([])
  const [filterOptions] = useState(
    subjects.map((subject) => {
      return { label: subject.name, value: subject.id }
    })
  )

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage, setArticlesPerPage] = useState(5)

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const applyFilter = (article) => {
    if (filter.length == 0) {
      return true
    }
    return filter.includes(article.scienceSubjectId)
  }

  const updateFilter = (newFilter) => setFilter(newFilter)

  var filtered = articles.filter(applyFilter)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage

  const loggedOutCurrentArticles = filtered
    .filter((article) => article.public)
    .slice(indexOfFirstArticle, indexOfLastArticle)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    (<div>
      <Filter options={filterOptions} onChange={updateFilter} />
      <div className={styles.columns}>
        <div className={styles.postColumn}>
          <h2 className={styles.filteredPosts}>FILTERED POSTS</h2>
          {loggedOutCurrentArticles.map((article, idx) => (
            <ArticlePreview
              title={article.title}
              summary={article.summary}
              author={article.authorName}
              science_subject={article.scienceSubject}
              url={article.url}
              key={idx}
              thumbnail={article.thumbnail}
              published={article.public}
              currentPage={currentPage}
              filter={filter}
            />
          ))}
          {filtered.length > articlesPerPage && (
            <Pagination
              articlesPerPage={articlesPerPage}
              totalPosts={
                // loggedIn
                //   ? filtered.length
                //   : 
                filtered.filter((article) => article.public).length
              }
              paginate={paginate}
            />
          )}
        </div>
        <div className={styles.linkColumn}>
          <h3 className={styles.recentPosts}>RECENT POSTS</h3>
          <ul>
            {articles.slice(0, 5).map((article, idx) => (
              <li key={idx}>
                <Link href={`/${article.url}`} title={article.title} legacyBehavior>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>)
  );
}

export default ArticleBrowser
