import Head from 'next/head'
import ArticleBrowser from '../components/ArticleBrowser'
import Header from '../components/Header'
import CookieAccept from '../components/CookieAccept'
import { articles } from '../data.js'

export default function Home({ articles, subjects }) {
  return (
    <>
      <Head>
        <title>Engineering Guidance</title>
        <meta name="description" content="The site for the tricky physics or math problems you might encounter as an engineering student at university." />
        <link rel="canonical" href="https://www.engineeringguidance.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engineeringguidance.com" />
        <meta property="og:title" content="Engineering Guidance" />
        <meta property="og:description" content="The site for the tricky physics or math problems you might encounter as an engineering student at university." />
        <meta property="og:image" content="/favicon.ico" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Engineering Guidance" />
        <meta property="twitter:description" content="The site for the tricky physics or math problems you might encounter as an engineering student at university." />
        <meta property="twitter:image" content="/favicon.ico" />


      </Head>
      <Header />
      <ArticleBrowser articles={articles} subjects={subjects} />
      <CookieAccept></CookieAccept>
    </>
  )
}

export const getStaticProps = async () => {

  let subjects = articles.map((article, index) => ({
    id: article.scienceSubjectId,
    name: article.scienceSubjectName,
  }))

  subjects = subjects.filter((subject, index, self) =>
    index === self.findIndex((s) => (
      s.id === subject.id && s.name === subject.name
    ))
  )
  // console.log(subjects)

  return {
    props: {
      articles,
      subjects,
    },
  }
}
