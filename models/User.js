'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    max: 1001,
    min: 5
  }
});


module.exports = mongoose.model('User', UserSchema);
