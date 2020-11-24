const { Blog } = require('../models/blog')

exports.index = async (req, res) => {
  const blogs = await Blog.find()
  return res.formatter.ok({ blogs })
}

exports.store = async (req, res) => {
  const {
    body: { title, cover, content },
    headers: { session_id: author }
  } = req

  try {
    const blog = await Blog.create({ title, cover, content, author })

    return res.formatter.created({ blog })
  } catch (error) {
    return res.formatter.serverError(error)
  }
}

exports.update = async (req, res) => {}

exports.destroy = async (req, res) => {}
