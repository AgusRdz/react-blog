const { compare } = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

exports.login = async (req, res) => {
  const {
    body: { email, password }
  } = req

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.formatter.serverError(
        'Whoops looks like something went wrong :('
      )
    }

    if (!user) {
      return res.formatter.unauthorized('User or password does not match')
    }

    compare(password, user.password, function (err, result) {
      if (err || !result)
        return res.formatter.unauthorized('User or password does not match')

      const token = jwt.sign({ user }, 'thisisaseed', { expiresIn: 3600 })
      res.formatter.ok({ token, user })
    })
  })
}
