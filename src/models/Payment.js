const db = require('../config/db')

module.exports = {
	// All Payment
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM payments'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Payment
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM payments where id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Payment
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO payments SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update Payment
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE payments SET ? WHERE id = ?'

			db.query(sql, [id, data], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete Payment
	// delete: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const sql = `DELETE FROM payments WHERE id='${id}'`

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
