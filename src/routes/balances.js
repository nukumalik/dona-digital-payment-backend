const { Router } = require('express')
const router = Router()

// Controllers
const balanceControllers = require('../controllers/balanceControllers')

router.get('/:id', balanceControllers.getBalance)

module.exports = router
