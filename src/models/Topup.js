const db = require('../config/db')

module.exports = {
	// All Deal
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM topups'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Deal
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM topups where transaction_id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Deal
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO topups SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Deal
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE topups SET ? WHERE transaction_id = ?'

			db.query(sql, [id, data], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete Deal
	// delete: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const sql = `DELETE FROM topups WHERE transaction_id='${id}'`

	// 		db.query(sql, (error, result) => {
	// 			if (!error) {
	// 				resolve(result)
	// 			} else {
	// 				reject(error)
	// 			}
	// 		})
	// 	})
	// },
}
