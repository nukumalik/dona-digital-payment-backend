const { Router } = require('express')
const router = Router()

// Controllers
const userControllers = require('../controllers/userControllers')

router
	.post('/login', userControllers.postExample)
	.post('/signup', userControllers.postExample)

module.exports = router
