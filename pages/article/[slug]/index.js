import Link from 'next/link'
import Article from '../../../components/Article'
import Header from '../../../components/Header'

const article = ({ article }) => {
  return (
    <>
      <Header />
      <Article article={article} />
    </>
  )
}

export const getStaticProps = async (context) => {
  // TODO: Server config
  const res = await fetch(
    `http://localhost:3000/api/articles/${context.params.slug}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`)

  const articles = await res.json()

  const slugs = articles.map((article) => article.url)

  const paths = slugs.map((slug) => ({ params: { slug: slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
