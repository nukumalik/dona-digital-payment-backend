// Model
const Deal = require('../models/Deal')

module.exports = {
	// All Deal
	allDeal: (req, res) => {
		Deal.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all deal',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get deal',
					data: error,
				})
			})
	},

	// Create Deal By ID
	createDeal: (req, res) => {
		// Body Fields
		const { code, merchant_id, value, start, end, description } = req.body
		const created_at = new Date()
		const updated_at = new Date()

		// Data
		const data = { code, merchant_id, value, start, end, description, created_at, updated_at }

		Deal.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an deal',
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

	// Get Example By ID
	getDeal: (req, res) => {
		// Example ID
		const { id } = req.params

		Deal.get(id)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get deal with ID: ' + id,
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

	// Update Deal By ID
	updateDeal: (req, res) => {
		// Example ID
		const { id } = req.params

		// Body Fields
		const { code, value, start, end, description } = req.body

		// Data
		const data = {}
		if (code) data.code = code
		if (value) data.value = value
		if (start) data.start = start
		if (end) data.end = end
		if (description) data.description = description
		data.updated_at = new Date()

		Deal.update(id, data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update deal with ID: ' + id,
					data,
				})
			})
			.catch(error => {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Failed to update deal with ID: ' + id,
					data: error,
				})
			})
	},

	// Delete Deal By ID
	deleteDeal: (req, res) => {
		// Deal ID
		const { id } = req.params

		Deal.delete(id)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to Delete deal with ID: ' + id,
					data: [],
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
}
