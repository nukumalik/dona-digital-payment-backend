const { Router } = require('express')
const router = Router()

// Controllers
const paymentControllers = require('../controllers/paymentControllers')

router
	.get('/', paymentControllers.allPayment)
	.get('/:transaction_id', paymentControllers.getPayment)
	.post('/', paymentControllers.createPayment)
// .patch('/:transaction_id', paymentControllers.updatePayment)
// .delete('/:transaction_id', paymentControllers.deletePayment)

module.exports = router
