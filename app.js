const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Main App
const app = express()

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS
app.use(cors())

// Routes
app.use('/api/v1', require('./src/config/routes'))

// Port
const port = process.env.PORT || 5000

// Connect to Server
app.listen(port, console.log(`Server is running on port ${port}`))
