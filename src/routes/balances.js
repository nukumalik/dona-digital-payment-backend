const { Router } = require('express')
const router = Router()

// Controllers
const balanceControllers = require('../controllers/balanceControllers')

const passport = require('../helpers/passport')

const isAuthenticated = passport.authenticate('jwt', { session: false })

router
	// .get('/:id', isAuthenticated, balanceControllers.getBalance)
	// .post('/', isAuthenticated, balanceControllers.addBalance)
	// .patch('/:id', isAuthenticated, balanceControllers.updateBalance)
	.get('/:id', balanceControllers.getBalance)
	.post('/', balanceControllers.addBalance)
	.patch('/:id', balanceControllers.updateBalance)

module.exports = router
