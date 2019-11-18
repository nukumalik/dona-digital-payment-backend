const { Router } = require('express')
const router = Router()

// Controllers
const ppobControllers = require('../controllers/ppobControllers')

router
	.get('/', ppobControllers.allPPOB)
	.get('/:transaction_id', ppobControllers.getPPOB)
	.post('/', ppobControllers.createPPOB)
	.patch('/:transaction_id', ppobControllers.updatePPOB)
// .delete('/:transaction_id', ppobControllers.deletePPOB)

module.exports = router
