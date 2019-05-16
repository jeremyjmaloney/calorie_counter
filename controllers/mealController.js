const express = require('express');
const meals = express.Router();
const Meals = require('../models/meal.js');


// meals.get('/', (req, res) => {
//   res.send('yo')
// });

// INDEX
meals.get('/', async (req, res) => {
  try {
    const meals = await Meals.find()
    res.status(200).json(meals)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// CREATE
meals.post('/', async (req, res) => {
  try {
    const newMeal = await Meals.create(req.body)
    res.status(200).json(newMeal)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// DELETE
meals.delete('/:id', async (req, res) => {
  try {
    const deleteMeal = await Meals.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteMeal)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// EDIT
meals.put('/:id', async (req, res) => {
  try {
    const updateMeal = await Meals.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateMeal)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});


module.exports = meals
