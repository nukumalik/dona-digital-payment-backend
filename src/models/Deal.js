const db = require('../config/db')

module.exports = {
	// All Deal
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM deals'

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
			const sql = `SELECT * FROM deals where id='${id}'`

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
			const sql = 'INSERT INTO deals SET ?'

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
			const sql = 'UPDATE deals SET ? WHERE id = ?'

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
	// 		const sql = `DELETE FROM deals WHERE id='${id}'`

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
