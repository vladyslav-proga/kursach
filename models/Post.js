'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now }
});


module.exports = mongoose.Schema('Posts', PostSchema);
