/**
 * model.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where mongoDB Message model is defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

/**
 * Define mongoDB schema
 * @private
 */
const { Schema } = mongoose;

/**
 * Generate new message Schema
 */
const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

/**
 * Export mongoDB model
 * @public
 */
module.exports = mongoose.model('Message', messageSchema);
