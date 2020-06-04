'use strict';


const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get all the post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/specific', (req, res) => {
  res.send('Specific posts');
});


//Submit all the post
router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});




module.exports = router;
