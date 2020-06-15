'use strict';

const router = require('express').Router();
const User = require('../models/User');
const { registerValidation } = require('../routes/validation');

router.post('/register', async (req, res) => {

  //Validate the DB
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
