const { Router } = require('express')
const router = Router()

// Controllers
const dealControllers = require('../controllers/dealControllers')

router
	.get('/', dealControllers.all)
	.get('/:id', dealControllers.get)
	.post('/', dealControllers.post)
	.patch('/:id', dealControllers.patch)
	.delete('/:id', dealControllers.delete)

module.exports = router
