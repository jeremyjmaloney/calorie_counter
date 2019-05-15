const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = mongoose.connection

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meals'
const PORT = process.env.PORT || 3000

//connect to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)
// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))


// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JS
app.use(express.static('public'))

//routes
const mealsController = require('./controllers/mealController.js')
app.use('/meals', mealsController)






app.listen(PORT, () => {
  console.log(`...listening on port ${PORT}`);
});
