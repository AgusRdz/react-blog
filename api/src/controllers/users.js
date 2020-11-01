const { ok } = require('../handlers/responses')
const { User } = require('../models/user')

exports.index = (req, res) => {}

exports.store = async (req, res) => {
  const {
    body: { firstName, lastName, password, email }
  } = req
  const user = await User.create({ firstName, lastName, email, password })
  ok(res, { user })
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}
