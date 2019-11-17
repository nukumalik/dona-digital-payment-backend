const { Router } = require('express')
const router = Router()

// Controllers
const paymentControllers = require('../controllers/paymentControllers')

router
	.get('/', paymentControllers.all)
	.get('/:id', paymentControllers.get)
	.post('/', paymentControllers.post)
// .patch('/:id', paymentControllers.patch)
// .delete('/:id', paymentControllers.delete)

module.exports = router
