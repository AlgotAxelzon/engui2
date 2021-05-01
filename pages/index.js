import ArticleBrowser from '../components/ArticleBrowser'
import Header from '../components/Header'
import { articles } from '../data.js'
export default function Home({ articles, subjects }) {
  return (
    <>
      <Header />
      <ArticleBrowser articles={articles} subjects={subjects} />
    </>
  )
}

export const getStaticProps = async () => {

  const subjects = articles.map((article) => ({
    id: article.scienceSubjectId,
    name: article.scienceSubjectName,
  }))

  return {
    props: {
      articles,
      subjects,
    },
  }
}
