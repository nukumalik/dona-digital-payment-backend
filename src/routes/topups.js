const { Router } = require('express')
const router = Router()

// Controllers
const topupControllers = require('../controllers/topupControllers')

router
	.get('/', topupControllers.allTopup)
	.get('/:transaction_id', topupControllers.getTopup)
	.post('/', topupControllers.createTopup)
// .patch('/:transaction_id', topupControllers.updateTopup)
// .delete('/:transaction_id', topupControllers.deleteTopup)

module.exports = router
