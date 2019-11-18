// Model
const PPOB = require('../models/PPOB')

module.exports = {
	// All PPOB
	allPPOB: (req, res) => {
		PPOB.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all PPOB',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get PPOB',
					data: error,
				})
			})
	},

	// Create PPOB By ID
	createPPOB: (req, res) => {
		// Body Fields
		const { transaction_id, merchant_id, phone, type, nominal, amount, status, method } = req.body
		const order_at = new Date()

		// Data
		const data = { transaction_id, merchant_id, phone, type, nominal, amount, status, method, order_at }

		PPOB.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an PPOB',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'PPOB does not exists',
					data: error,
				})
			})
	},

	// Get Example By ID
	getPPOB: (req, res) => {
		// Example ID
		const { transaction_id } = req.params

		PPOB.get(transaction_id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get PPOB with transaction ID: ' + transaction_id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'PPOB does not exists',
					data: error,
				})
			})
	},

	// Update PPOB By ID
	updatePPOB: (req, res) => {
		// Example ID
		const { id } = req.params

		// Body Fields
		const { status, method } = req.body

		// Data
		const data = {}
		if (status) data.status = status
		if (method) data.method = method
		data.paid_at = new Date()

		PPOB.update(id, data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update PPOB with ID: ' + id,
					data,
				})
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to update PPOB with ID: ' + id,
					data: error,
				})
			})
	},

	// Delete PPOB By ID
	// deletePPOB: (req, res) => {
	// 	// PPOB ID
	// 	const { id } = req.params

	// 	PPOB.delete(id)
	// 		.then(() => {
	// 			res.status(200).json({
	// 				status: 200,
	// 				error: false,
	// 				message: 'Success to Delete PPOB with ID: ' + id,
	// 				data: [],
	// 			})
	// 		})
	// 		.catch(error => {
	// 			res.status(404).json({
	// 				status: 404,
	// 				error: true,
	// 				message: 'PPOB does not exists',
	// 				data: error,
	// 			})
	// 		})
	// },
}
