const { Router } = require('express')
const router = Router()

// Controllers
const transactionControllers = require('../controllers/transactionControllers')

router
	.get('/', transactionControllers.allTransaction)
	.get('/:id', transactionControllers.getTransaction)
	.post('/', transactionControllers.createTransaction)
// .patch('/:id', transactionControllers.updateTransaction)
// .delete('/:id', transactionControllers.deleteTransaction)

module.exports = router
