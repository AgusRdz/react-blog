const Joi = require('joi')
const jwt = require('jsonwebtoken')

const schema = Joi.object({
  authorization: Joi.string().required()
}).options({ stripUnknown: true })

exports.jwtValidate = (req, res, next) => {
  const { error } = schema.validate(req.headers)

  if (error) {
    const message = error.details.map(({ message }) => message)

    return res.formatter.unauthorized(message)
  }

  const token = req.headers.authorization.replace(/bearer/gi, '').trim()
  jwt.verify(token, 'thisisaseed', (err, decoded) => {
    if (err) {
      return res.formatter.unauthorized(err)
    }
    req.headers.session_id = decoded.user._id

    next()
  })
}
