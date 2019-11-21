const Balance = require('../models/Balance')

module.exports = {
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
