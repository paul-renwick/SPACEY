const express = require('express')
const db = require('../db/cards')
const router = express.Router()

router.get('/', (req, res) => {
  db.getCards()
    .then(cards => {
      res.send(cards)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addCard(req.body)
    .then(cards => {
      res.send(cards)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCard(id)
    .then(card => res.send(card))
    .catch(err => res.status(500).send(err.message))
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const cards = req.body
  cards.id = id
  db.submitCards(cards)
    .then(update => res.send('' + update))
})

router.delete('/', (req, res) => {
  db.deleteCard(req.body)
    .then(res.redirect('/cards'))
})

module.exports = router
