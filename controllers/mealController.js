const express = require('express')
const meals = express.Router()




meals.get('/', (req, res) => {
  res.send('yo')
})

module.exports = meals
