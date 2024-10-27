const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

// //import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoApp';



mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected"));