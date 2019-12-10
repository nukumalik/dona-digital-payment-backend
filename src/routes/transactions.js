const { Router } = require('express')
const router = Router()

// Controllers
const transactionControllers = require('../controllers/transactionControllers')

router
	.get('/:user_id', transactionControllers.allTransaction)
	// .get('/:id', transactionControllers.getTransaction)
	.post('/:user_id', transactionControllers.createTransaction)
	.patch('/:id', transactionControllers.updateTransaction)
	.delete('/:id', transactionControllers.deleteTransaction)

module.exports = router
