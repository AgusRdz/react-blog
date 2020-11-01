const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
  internalServerError,
  unauthorized,
  ok
} = require('../handlers/responses')
const { User } = require('../models/user')

exports.login = async (req, res) => {
  const {
    body: { email, password }
  } = req

  User.findOne({ email }, (err, user) => {
    if (err) {
      return internalServerError(
        res,
        'Whoops looks like something went wrong :('
      )
    }

    if (!user) {
      return unauthorized(res, 'User or password does not match')
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err || !result)
        return unauthorized(res, 'User or password does not match')

      const token = jwt.sign({ user }, 'thisisaseed', { expiresIn: 3600 })
      ok(res, { token, user })
    })
  })
}
