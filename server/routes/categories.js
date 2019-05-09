const express = require('express')
const db = require('../db/cohorts')
const router = express.Router()

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => {
      res.send(categories)
    })
    .catch(err => {
      res.status(500).send('DATABSE ERROR: ' + err.message)
    })
})
