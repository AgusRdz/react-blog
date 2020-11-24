const express = require('express')
const router = express.Router()
const { index, store } = require('../controllers/blog')
const { jwtValidate } = require('../middlewares/auth')
const { create } = require('../middlewares/blogs')

router.route('/blogs').get(index).post(jwtValidate, create, store)

module.exports = router
