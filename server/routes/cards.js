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
  const id = req.params.id
  const submission = {
    userId: id,
    question: req.body.question,
    answer: req.body.answer
  }
  db.submitCards(submission)
    .then(() => res.json({ notice: 'evidence has been updated! ' }))
    .catch(err => res.status(500).send(err.message))
})

//update card
router.put('/', (req, res)=> {
  const newCardInfo ={
    check1: Date.now(),
    check2: Date.now(),
    check3: Date.now()
  }
  db.cards(newCardInfo)
  .then ((card) => res.send(card))
  .catch(err => res.status(500).send(err.message))
})

module.exports = router
