const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

const categoriesRoutes = require('./routes/categories')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const cardRoutes = require('./routes/cards')

server.use('/api/v1/auth', authRoutes)
server.use('/categories', categoriesRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/cards', cardRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
