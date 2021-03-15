const express = require('express')

const app = express()

const usersRoute = require('./routes/users')
const skillsRoute = require('./routes/skills')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/users', usersRoute)
app.use('/skills', skillsRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app
