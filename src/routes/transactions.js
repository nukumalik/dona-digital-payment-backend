const { Router } = require('express')
const router = Router()

// Controllers
const transactionControllers = require('../controllers/transactionControllers')

router
	.get('/', transactionControllers.all)
	.get('/:id', transactionControllers.get)
	.post('/', transactionControllers.post)
// .patch('/:id', transactionControllers.patch)
// .delete('/:id', transactionControllers.delete)

module.exports = router
