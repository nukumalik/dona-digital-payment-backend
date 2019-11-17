// Model
const Transfer = require('../models/Transfer')

module.exports = {
	// All Transfer
	allTransfer: (req, res) => {
		Transfer.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all transfer',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get transfer',
					data: error,
				})
			})
	},

	// Create Transfer By ID
	createTransfer: (req, res) => {
		// Body Fields
		const { transaction_id, sender_id, receiver_id, amount } = req.body

		const transfered_at = new Date()

		// Data
		const data = { transaction_id, sender_id, receiver_id, amount, transfered_at }

		Transfer.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an transfer',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Transfer does not exists',
					data: error,
				})
			})
	},

	// Get Transfer By ID
	getTransfer: (req, res) => {
		// Example ID
		const { id } = req.params

		Transfer.get(id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get transfer with ID: ' + id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Transfer does not exists',
					data: error,
				})
			})
	},

	// Update Transfer By ID
	// updateTransfer: (req, res) => {
	// 	// Example ID
	// 	const { id } = req.params

	// 	// Body Fields
	// 	const { transaction_id, sender_id, receiver_id, amount } = req.body

	// 	// Data
	// 	const data = {}
	// 	if (transaction_id) data.transaction_id = transaction_id
	// 	if (sender_id) data.sender_id = sender_id
	// 	if (receiver_id) data.receiver_id = receiver_id
	// 	if (amount) data.amount = amount

	// 	Transfer.update(id, data)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to update transfer with ID: ' + id,
	// 				data,
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(400).json({
	// 				status: 400,
	// 				error: true,
	// 				message: 'Failed to update transfer with ID: ' + id,
	// 				data: error,
	// 			})
	// 		})
	// },

	// Delete Transfer By ID
	// deleteTransfer: (req, res) => {
	// 	// transfer ID
	// 	const { id } = req.params

	// 	Transfer.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete transfer with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'Transfer does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
