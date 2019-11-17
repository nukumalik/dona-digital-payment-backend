const { Router } = require('express')
const router = Router()

// Controllers
const ppobControllers = require('../controllers/ppobControllers')

router
	.get('/', ppobControllers.all)
	.get('/:id', ppobControllers.get)
	.post('/', ppobControllers.post)
	.patch('/:id', ppobControllers.patch)
// .delete('/:id', ppobControllers.delete)

module.exports = router
