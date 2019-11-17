// Model
const Transaction = require('../models/Transaction')

module.exports = {
	// All Transaction
	allTransaction: (req, res) => {
		Transaction.all()
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

	// Create Transaction By ID
	createTransaction: (req, res) => {
		// Body Fields
		const { user_id } = req.params
		const { type } = req.body

		// ID
		const today = new Date()
		const time = String(today.getTime())
		const dd = String(today.getDate()).padStart(2, '0')
		const mm = String(today.getMonth() + 1).padStart(2, '0')
		const year = today.getFullYear()
		const id = `${year}-${mm}${dd}-${time}`

		// Data
		const data = { id, user_id, type }

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
					message: 'Transaction does not exists',
					data: error,
				})
			})
	},

	// Get Transaction By ID
	getTransaction: (req, res) => {
		// Transaction ID
		const { id } = req.params

		Transaction.get(id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get transaction with ID: ' + id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Transaction does not exists',
					data: error,
				})
			})
	},

	// Update Transaction By ID
	// updateTransaction: (req, res) => {
	// 	// Transaction ID
	// 	const { id } = req.params

	// 	// Body Fields
	// 	const { transaction_id, merchant_id, amount, description } = req.body

	// 	// Data
	// 	const data = {}
	// 	if (transaction_id) data.transaction_id = transaction_id
	// 	if (merchant_id) data.merchant_id = merchant_id
	// 	if (amount) data.amount = amount
	// 	if (description) data.description = description
	// 	data.paid_at = new Date()

	// 	Transaction.update(data)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to update transaction with ID: ' + id,
	// 				data,
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(400).json({
	// 				status: 400,
	// 				error: true,
	// 				message: 'Failed to update exmaple with ID: ' + id,
	// 				data: error,
	// 			})
	// 		})
	// },

	// Delete Transaction By ID
	// deleteTransaction: (req, res) => {
	// 	// Transaction ID
	// 	const { id } = req.params

	// 	Transaction.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete transaction with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'Transaction does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
