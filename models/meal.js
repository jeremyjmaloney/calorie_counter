const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {type: String, required:true},
  calories: {type: Number, required:true}
});

const Meals = mongoose.model('Meal', mealSchema);

module.exports = Meals;
