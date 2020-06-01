'use strict';

const express = require('express');
const app = express();


//import routes
app.get('/', (req, res) => {
  res.send('First route');
});


//Start listening to the serv
app.listen(1234);
