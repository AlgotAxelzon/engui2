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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MT5NWW6HW9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MT5NWW6HW9', {
                'linker': {
                  'domains': ['engineeringguidance.com', 'engui.xyz']
                }
              );
            `
          }}
        />
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
