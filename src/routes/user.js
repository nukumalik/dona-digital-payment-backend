const { Router } = require('express')
const router = Router()

// Controllers
const userControllers = require('../controllers/userControllers')

router
	// .post('/login', userControllers.login)
	.post('/signup', userControllers.signup)

module.exports = router
