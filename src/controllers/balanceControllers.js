const Balance = require('../models/Balance')

module.exports = {
	// Create Balance By ID
	addBalance: (req, res) => {
		// Body Fields
		const { user_id, balance } = req.body
		const updated_at = new Date()
		const id = uuid4()

		// Data
		const data = { id, user_id, balance, updated_at }

		Balance.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an Balance',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Deal does not exists',
					data: error,
				})
			})
	},

	getBalance: (req, res) => {
		// User ID
		const { user_id } = req.params

		Balance.get(user_id)
			.then(data => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get user balance',
					data,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'User balance is not found',
					data: error,
				})
			})
	},
}
