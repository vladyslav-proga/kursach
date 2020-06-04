'use strict';


const express = require('express');
const router = express.Router();
const posts = require('../models/posts');

router.get('/', (req, res) => {
  res.send('First post');
});

router.get('/specific', (req, res) => {
  res.send('Specific posts');
});



module.exports = router;
