// Model
const Transaction = require('../models/Transaction')

module.exports = {
	// All transaction
	allTransaction: (req, res) => {
		const { id } = req.params

		Transaction.all(id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all transaction',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get transaction',
					data: error,
				})
			})
	},

	// Create transaction By ID
	createTransaction: (req, res) => {
		// Body Fields
		const { user_id, type } = req.body

		// Data
		const data = { user_id, type }

		Transaction.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an transaction',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Example does not exists',
					data: error,
				})
			})
	},

	// Get transaction By ID
	getTransaction: (req, res) => {
		// transaction ID
		const { id_example } = req.params

		Transaction.get(id_example)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get transaction with ID: ' + id_example,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Example does not exists',
					data: error,
				})
			})
	},

	// Update transaction By ID
	updateTransaction: (req, res) => {
		// transaction ID
		const { id_example } = req.params

		// Body Fields
		const { name, age } = req.body

		// Data
		const data = { name, age }

		Transaction.update(data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update transaction with ID: ' + id_example,
					data,
				})
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to update exmaple with ID: ' + id_example,
					data: error,
				})
			})
	},

	// Delete transaction By ID
	deleteTransaction: (req, res) => {
		// transaction ID
		const { id_example } = req.params

		Transaction.delete(id_example)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to Delete transaction with ID: ' + id_example,
					data: [],
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Example does not exists',
					data: error,
				})
			})
	},
}
