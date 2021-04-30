import { articles } from '../../../data.js'

export default function handler(req, res) {
  const subjects = articles.map((article) => ({
    id: article.scienceSubjectId,
    name: article.scienceSubjectName,
  }))
  res.status(200).json(subjects)
}
