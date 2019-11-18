// Model
const Topup = require('../models/Topup')

module.exports = {
	// All Topup
	allTopup: (req, res) => {
		Topup.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all topup',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get topup',
					data: error,
				})
			})
	},

	// Create Topup By ID
	createTopup: (req, res) => {
		// Body Fields
		const { transaction_id, merchant_id, amount, method } = req.body
		const filled_at = new Date()

		// Data
		const data = { transaction_id, merchant_id, amount, method, filled_at }

		Topup.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an topup',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Topup does not exists',
					data: error,
				})
			})
	},

	// Get Topup By ID
	getTopup: (req, res) => {
		// Topup ID
		const { transaction_id } = req.params

		Topup.get(transaction_id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get topup with transaction ID: ' + transaction_id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Topup does not exists',
					data: error,
				})
			})
	},

	// Update Topup By ID
	// updateTopup: (req, res) => {
	// 	// topup ID
	// 	const { id } = req.params

	// 	// Body Fields
	// 	const { transaction_id, merchant_id, amount, method } = req.body

	// 	// Data
	// 	const data = {}
	// 	if (transaction_id) data.transaction_id = transaction_id
	// 	if (merchant_id) data.merchant_id = merchant_id
	// 	if (amount) data.amount = amount
	// 	if (method) data.method = method
	// 	data.filled_at = new Date()

	// 	Topup.update(data)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to update topup with ID: ' + id,
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

	// Delete Topup By ID
	// deleteTopup: (req, res) => {
	// 	// topup ID
	// 	const { id } = req.params

	// 	Topup.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete topup with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'Topup does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
