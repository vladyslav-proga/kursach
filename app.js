'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//import routes
app.get('/', (req, res) => {
  res.send('First route');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);


//Start listening to the serv
app.listen(1234);
