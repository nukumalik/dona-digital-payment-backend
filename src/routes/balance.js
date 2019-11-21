const { Router } = require('express')
const router = Router()

// Controllers
const balanceControllers = require('../controllers/balanceControllers')

router
	.get('/:id', balanceControllers.getBalance)
	.post('/', balanceControllers.addBalance)
	.patch('/:id', balanceControllers.updateBalance)

module.exports = router
