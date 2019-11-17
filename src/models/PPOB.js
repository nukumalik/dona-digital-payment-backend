const db = require('../config/db')

module.exports = {
	// All Transaction
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM transaction'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get PPOB
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM ppobs where id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create PPOB
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO ppobs SET ?'

			db.query(sql, data, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Update PPOB
	update: (id, data) => {
		return new Promise((resolve, reject) => {
			const sql = 'UPDATE ppobs SET ? WHERE id = ?'

			db.query(sql, [id, data], (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Delete PPOB
	// delete: id => {
	// 	return new Promise((resolve, reject) => {
	// 		const sql = `DELETE FROM ppobs WHERE id='${id}'`

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
