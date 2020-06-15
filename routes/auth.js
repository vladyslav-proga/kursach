'use strict';

const router = require('express').Router();
const User = require('../models/User');

//VALIDATION
const Joi = require('@hapi/joi');
const schema = Joi.object({
  name: Joi.string()
    .min(5)
    .required(),
  email: Joi.string()
    .min(5)
    .required()
    .email(),
  password: Joi.string()
    .min(5)
    .required()
});

router.post('/register', async (req, res) => {

  //Validate the DB
  const { error }  = schema.validate(req.body);

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