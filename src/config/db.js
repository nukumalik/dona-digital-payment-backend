const mysql = require('mysql')
require('dotenv/config')

// Create connection
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
})

db.connect(err => (err ? console.log(err) : console.log('Database connected..')))

module.exports = db
