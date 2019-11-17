const db = require('../config/db')

module.exports = {
	// All Transfer
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM transfers'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Transfer
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM transfers where id='${id}'`

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
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE transfers SET ? WHERE id = ?'

			db.query(sql, [id, data], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete Example
	// delete: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const sql = `DELETE FROM transfers WHERE id='${id}'`

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
