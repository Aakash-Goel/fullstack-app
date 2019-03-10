/**
 * index.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * Import/Export Message graphQL schema and resolvers
 *
 */

'use strict';

const messageSchema = require('./schema');
const messageResolvers = require('./resolvers');

module.exports = {
  messageSchema,
  messageResolvers,
};
