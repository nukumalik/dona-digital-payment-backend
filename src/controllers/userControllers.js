// Model
const Example = require('../models/Example')

module.exports = {
	// All Example
	allExample: (req, res) => {
		Example.all()
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get all example',
					data: result,
				})
			})
			.catch(error => {
				res.status(500).json({
					status: 500,
					error: true,
					message: 'Failed to get example',
					data: error,
				})
			})
	},

	// Create Example By ID
	createExample: (req, res) => {
		// Body Fields
		const { name, age } = req.body

		// Data
		const data = { name, age }

		Example.create(data)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to create an example',
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

	// Get Example By ID
	getExample: (req, res) => {
		// Example ID
		const { id_example } = req.params

		Example.get(id_example)
			.then(result => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to get example with ID: ' + id_example,
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

	// Update Example By ID
	updateExample: (req, res) => {
		// Example ID
		const { id_example } = req.params

		// Body Fields
		const { name, age } = req.body

		// Data
		const data = { name, age }

		Example.update(data)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to update example with ID: ' + id_example,
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

	// Delete Example By ID
	deleteExample: (req, res) => {
		// Example ID
		const { id_example } = req.params

		Example.delete(id_example)
			.then(() => {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Success to Delete example with ID: ' + id_example,
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
