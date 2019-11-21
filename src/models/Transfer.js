const db = require('../config/db')

module.exports = {
	// Get Transfer
	get: transaction_id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM transfers where transaction_id='${transaction_id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Transfer
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO transfers SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Example
	update: (transaction_id, data) => {
		return new Promise((resolve, reject) => {
			const sql = `UPDATE transfers SET ? WHERE transaction_id='${transaction_id}'`

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},
}
