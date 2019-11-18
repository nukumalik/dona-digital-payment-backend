// Model
const Payment = require('../models/Payment')

module.exports = {
	// All payment
	allPayment: (req, res) => {
		Payment.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all payment',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get payment',
					data: error,
				})
			})
	},

	// Create payment By ID
	createPayment: (req, res) => {
		// Body Fields
		const { transaction_id, merchant_id, amount, description } = req.body
		const paid_at = new Date()

		// Data
		const data = { transaction_id, merchant_id, amount, description, paid_at }

		Payment.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an payment',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Payment does not exists',
					data: error,
				})
			})
	},

	// Get payment By ID
	getPayment: (req, res) => {
		// payment ID
		const { transaction_id } = req.params

		Payment.get(transaction_id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get payment with transaction ID: ' + transaction_id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Payment does not exists',
					data: error,
				})
			})
	},

	// Update payment By ID
	// updatePayment: (req, res) => {
	// 	// payment ID
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

	// 	Payment.update(data)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to update payment with ID: ' + id,
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

	// Delete payment By ID
	// deletePayment: (req, res) => {
	// 	// payment ID
	// 	const { id } = req.params

	// 	Payment.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete payment with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'Payment does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
