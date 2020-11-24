const Joi = require('joi')

const schema = Joi.object({
  title: Joi.string().required().max(50),
  cover: Joi.string().optional().allow(''),
  content: Joi.string().required(),
  status: Joi.string().required()
})

exports.create = (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (error) {
    const message = error.details.map(({ message }) => message).join(',')

    return res.formatter.unprocess(message)
  }

  next()
}
