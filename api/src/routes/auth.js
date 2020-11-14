const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
const { login } = require('../middlewares/login')

router.post('/login', login, auth.login)

module.exports = router
