import Head from 'next/head'
import ArticleBrowser from '../components/ArticleBrowser'
import Header from '../components/Header'
import { articles } from '../data.js'
export default function Home({ articles, subjects }) {
  return (
    <>
      <Head>
        <title>Engineering Guidance</title>
        <meta name="description" content="The site for the tricky physics or math problems you might encounter as an engineering student at university." />

        <meta property="og:url" content={`https://www.engui.xyz`} />
        <meta property="og:title" content="Engineering Guidance" />
        <meta property="og:description" content="The site for the tricky physics or math problems you might encounter as an engineering student at university." />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
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
