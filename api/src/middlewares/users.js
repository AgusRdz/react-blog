const Joi = require('joi')
const { unprocessableEntity } = require('../handlers/responses')

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8)
})

exports.create = (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (error) {
    const message = error.details.map((i) => i.message).join(',')

    return unprocessableEntity(res, message)
  }

  next()
}
