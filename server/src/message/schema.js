/**
 * schema.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is where Message graphQL schema is defined
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const { gql } = require('apollo-server-express');

/**
 * Define graphQL schema
 * @public
 */
const schema = gql`
  type Message {
    _id: ID!
    title: String!
  }

  input MessageInput {
    title: String!
  }

  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(messageInput: MessageInput): Message
  }
`;

/**
 * Export graphQL schema
 * @public
 */
module.exports = schema;
