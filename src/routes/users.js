const { Router } = require('express')
const router = Router()
const validation = require('../helpers/validation')
const upload = require('../helpers/multer')

// Controllers
const userControllers = require('../controllers/userControllers')

router
	.post('/login', validation.login, userControllers.login)
	.post('/signup', upload.single('photo'), validation.register, userControllers.signup)
	.post('/forgot', userControllers.forgot)
	.post('/verify-otp', userControllers.verifyOtp)
	.post('/change-pin', userControllers.changePin)

module.exports = router
