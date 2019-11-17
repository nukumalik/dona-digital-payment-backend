const { Router } = require('express')
const router = Router()

// Controllers
const transferControllers = require('../controllers/transferControllers')

router
	.get('/', transferControllers.all)
	.get('/:id', transferControllers.get)
	.post('/', transferControllers.post)
// .patch('/:id', transferControllers.patch)
// .delete('/:id', transferControllers.delete)

module.exports = router
