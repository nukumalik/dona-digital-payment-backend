const { Router } = require('express')
const router = Router()

// Controllers
const dealControllers = require('../controllers/dealControllers')

router
	.get('/', dealControllers.allDeal)
	.get('/:id', dealControllers.getDeal)
	.post('/', dealControllers.createDeal)
	.patch('/:id', dealControllers.updateDeal)
	.delete('/:id', dealControllers.deleteDeal)

module.exports = router
