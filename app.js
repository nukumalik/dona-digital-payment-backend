const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
const passport = require('passport')

// Main App
const app = express()

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// logger
// app.use(logger('dev'))

//make the public folder accessible
app.use('/public', express.static(path.join(__dirname, 'public')))

// CORS
app.use(cors())

//Passport
app.use(passport.initialize())
require('./src/helpers/passport')(passport)

// Routes
app.use('/api/v1', require('./src/config/routes'))

// Port
const port = process.env.PORT || 5000

// Logger
app.use(logger(':method :url :status :res[content-length] - :response-time ms'))

// Connect to Server
app.listen(port, console.log(`Server is running on port ${port}`))
