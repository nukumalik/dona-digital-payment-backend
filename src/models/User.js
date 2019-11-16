const db = require('../config/db')

module.exports = {
	// All Example
	signup: (data) => {
		return new Promise((resolve, reject) => {
			const sql = 'INSERT INTO users SET ?'
			db.query(sql, data, (err, result) => {
				if(!err) {
					resolve(result)
				} else {
					reject(new Error(err))
				}
			})
		})
	}
}
