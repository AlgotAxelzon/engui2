import Head from 'next/head'
import Article from '../../../components/Article'
import Header from '../../../components/Header'
import { articles } from '../../../data.js'

const article = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
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
