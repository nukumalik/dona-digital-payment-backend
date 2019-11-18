const { Router } = require('express')
const router = Router()

// Controllers
const transferControllers = require('../controllers/transferControllers')

router
	.get('/', transferControllers.allTransfer)
	.get('/:transaction_id', transferControllers.getTransfer)
	.post('/', transferControllers.createTransfer)
// .patch('/:transaction_id', transferControllers.updateTransfer)
// .delete('/:transaction_id', transferControllers.deleteTransfer)

module.exports = router
