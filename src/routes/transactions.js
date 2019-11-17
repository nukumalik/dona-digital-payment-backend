const { Router } = require('express')
const router = Router()

// Controllers
const transactionControllers = require('../controllers/transactionControllers')

router
	.get('/', transactionControllers.allTransaction)
	.get('/:id', transactionControllers.getExmaple)
	.post('/', transactionControllers.postTransacallTransaction)
	.patch('/:id', transactionControllers.patchTransacallTransaction)
	.delete('/:id', transactionControllers.deleteTransacallTransaction)

module.exports = router
