import { articles } from '../../../data.js'

export default function handler({ query: { slug } }, res) {
  const filtered = articles.filter((article) => article.url === slug)

  if (filtered.length > 0) {
    if (filtered[0].public) {
      res.status(200).json(articles[0])
    } else {
      res
        .status(403)
        .json({ message: `Article with slug ${slug} is not published` })
    }
  } else {
    res.status(404).json({ message: `Article with slug ${slug} was not found` })
  }
}
