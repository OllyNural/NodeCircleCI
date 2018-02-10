const express = require('express')
const app = express()

const maths = require('./maths')

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/random', (req, res) => {
    const randomNumber = maths.randomNumber()
    res.send({'number':randomNumber})
})

module.exports = app