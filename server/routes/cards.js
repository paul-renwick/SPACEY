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

// router.put('/:id', (req, res) => {
//   const card = req.body
//   card.id = Number(req.params.id)
//     card.cards = JSON.stringify(req.body.cards)
//     db.submitCards(card)
//     .then(() => {
//       return db.getCard({cardId})
//     })

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteCard(id)
    .then(() => res.status(200).send(`deleted card ${id}!`))
}
)

module.exports = router
