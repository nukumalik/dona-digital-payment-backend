const { Router } = require('express')
const router = Router()
const validation = require('../helpers/validation')

// Controllers
const userControllers = require('../controllers/userControllers')

router
	.post('/login', validation.login, userControllers.login)
	.post('/signup',validation.register, userControllers.signup)

module.exports = router
