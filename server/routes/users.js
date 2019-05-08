const express = require('express')
const db = require('../db/users.js')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
    .then(users => res.send(users))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
