'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Improt routes
const postsRoute = require('./routes/posts.js');
const authRoute = require('./routes/auth');

const port = process.env.PORT;
const mongoUri = process.env.DB_CONNECTION;

app.use(bodyParser.json());

app.use('/posts', postsRoute);
app.use('/api/user', authRoute);

//Main route
app.get('/', (req, res) => {
  res.send('First route');
});

//Connect to DB
mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`Connected to DB:${mongoUri}`)
);

//Start listening to the serv
app.listen(port, () => console.log(`Server is on a port: ${port}`));
