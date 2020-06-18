'use strict';

const router = require('express').Router();

const User = require('../models/User');
const { registerValidation } = require('../routes/validation');

router.post('/register', async (req, res) => {

  //Validate the Date
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Checking if user is already saved
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send('Почта уже существует');
  }

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

module.exports = router;
