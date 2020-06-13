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

//Specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update specfic post
router.patch('/postId', async (req, res) => {
  try {
    const updatedPost = await Post.updated({ _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
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
