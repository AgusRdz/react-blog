module.exports.unprocessableEntity = (res, message) => {
  res.status(422).json({ error: message })
}

module.exports.internalServerError = (res, message) => {
  res.status(500).json({ error: message })
}

module.exports.unauthorized = (res, message) => {
  res.status(401).json({ error: message })
}

module.exports.ok = (res, data) => {
  res.status(200).json({
    status: 'ok',
    ...data
  })
}
