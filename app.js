'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');


//import routes
app.get('/', (req, res) => {
  res.send('First route');
});


//Connect to DB
mongoose.connect('ongodb+srv://testboy:csgocool1234@testboy-xnk8b.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  () => console.log('Connected to DB')
);


//Start listening to the serv
app.listen(1234);
