const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const { create } = require('../middlewares/users')

router.route('/users').get(users.index).post(create, users.store)
router.route('/users/:id').put(users.update).delete(users.delete)

module.exports = router
