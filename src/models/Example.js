const db = require('../config/db')

module.exports = {
	// All Example
	all: () => {
		return new Promise((resolve, reject) => {
			const sql = 'SELECT * FROM example'

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Get Example
	get: id => {
		return new Promise((resolve, reject) => {
			const sql = `SELECT * FROM example where id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},

	// Create Example
	create: data => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO example SET ?'

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
			const sql = 'UPDATE example SET ? WHERE id = ?'

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
	delete: id => {
		return new Promise((resolve, reject) => {
			const sql = `DELETE FROM example WHERE id='${id}'`

			db.query(sql, (error, result) => {
				if (!error) {
					resolve(result)
				} else {
					reject(error)
				}
			})
		})
	},
}
