import ArticleBrowser from '../components/ArticleBrowser'
import Header from '../components/Header'
export default function Home({ articles, subjects }) {
  return (
    <>
      <Header />
      <ArticleBrowser articles={articles} subjects={subjects} />
    </>
  )
}

export const getStaticProps = async () => {
  // TODO: Add server config
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()

  const resSubjects = await fetch(`http://localhost:3000/api/subjects`)
  const subjects = await resSubjects.json()

  // const subjects = articles.map((article) => {
  //   article.scienceSubjectId, article.scienceSubjectName
  // })

  return {
    props: {
      articles,
      subjects,
    },
  }
}
