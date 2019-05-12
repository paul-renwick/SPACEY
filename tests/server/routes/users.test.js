const request = require('supertest')
// const cheerio = require('cheerio')

// import request from "supertest"

const server = require('../../../server/server')

test('/users/:id sends back a 200 status', () => {
  request(server)
    .get(`users/:id`)
    .then(res => {
     expect(res.body.user).toHaveLength()
    })
})

