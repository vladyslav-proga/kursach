'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Improt routes
const postsRoute = require('./routes/posts.js');
const authRoute = require('./routes/auth');

app.use('/posts', postsRoute);
app.use('/api/user', authRoute);

//Main route
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
