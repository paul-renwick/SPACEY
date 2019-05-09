const express = require('express')
const db = require('../db/categories')
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

router.get('categories/:id', (req, res) => {
  const id = req.params.id
  db.getCategory(id)
    .then(category => res.send(category))
    .catch(err => res.status(500).send(err.message))
})

router.put('categories/:id', (req, res) => {
  const id = req.params.id
  const submission = {
    userId: id,
    categoryName: req.body.categoryName

  }
  db.submitCategories(submission)
    .then(() => res.json({ notice: 'Evidence has been updated!' }))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
