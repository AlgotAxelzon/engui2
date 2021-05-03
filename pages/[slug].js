import Head from 'next/head'
import Article from '../components/Article'
import Header from '../components/Header'
import { articles } from '../data.js'

const article = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.summary} />
        <link rel="canonical" href={`https://www.engineeringguidance.com/${article.url}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.engineeringguidance.com/${article.url}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.thumbnail} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.summary} />
        <meta property="twitter:image" content={article.thumbnail} />

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
      <Article article={article} />
    </>
  )
}

export const getStaticProps = async (context) => {

  const filtered = articles.filter((article) => article.url === context.params.slug)

  if (filtered.length > 0) {
    const article = filtered[0]

    return {
      props: {
        article,
      },
    } 
  } else {
    return {
      props: {},
    } 
  }
}

export const getStaticPaths = async () => {
  const slugs = articles.map((article) => article.url)

  const paths = slugs.map((slug) => ({ params: { slug: slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default article