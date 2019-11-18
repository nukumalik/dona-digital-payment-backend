// Model
const Merchant = require('../models/Merchant')

module.exports = {
	// All Merchant
	allMerchant: (req, res) => {
		Merchant.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all merchant',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get merchant',
					data: error,
				})
			})
	},

	// Create Merchant By ID
	createMerchant: (req, res) => {
		// Body Fields
		const { name } = req.body
		const logo = req.file.filename

		// Data
		const data = { name, logo }

		Merchant.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an merchant',
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Merchant does not exists',
					data: error,
				})
			})
	},

	// Get Example By ID
	getMerchant: (req, res) => {
		// Example ID
		const { id } = req.params

		Merchant.get(id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get merchant with ID: ' + id,
					data: result,
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Merchant does not exists',
					data: error,
				})
			})
	},

	// Update Merchant By ID
	updateMerchant: (req, res) => {
		// Example ID
		const { id } = req.params

		// Body Fields
		const { name } = req.body

		// Logo
		const logo = req.file.filename

		// Data
		const data = { name, logo }

		Merchant.update(id, data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update merchant with ID: ' + id,
					data,
				})
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to update merchant with ID: ' + id,
					data: error,
				})
			})
	},

	// Delete Merchant By ID
	deleteMerchant: (req, res) => {
		// Merchant ID
		const { id } = req.params

		Merchant.delete(id)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to Delete merchant with ID: ' + id,
					data: [],
				})
			})
			.catch(error => {
				res.status(404).json({
					status: 404,
					error: true,
					message: 'Merchant does not exists',
					data: error,
				})
			})
	},
}
