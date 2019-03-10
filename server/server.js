/**
 * server.js
 *
 * This is the main file where server starts up
 *
 */

'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const logger = require('./logger');
const rootSchema = require('./rootSchema');
const rootResolver = require('./rootResolver');

/**
 * Module variables.
 * @private
 */
const app = express();
const graphQlPath = '/graphql';
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 4000;

/**
 * Added cors to express middleware
 */
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Create new ApolloServer instance
 */
const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
});

server.applyMiddleware({ app, path: `${graphQlPath}` });

/**
 * Connect to mongoDB and then start the server
 */
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster-cxxw1.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    // Start up the server and listening to port
    app.listen(port, host, err => {
      if (err) {
        return logger.error(err.message);
      }

      return logger.appStarted(port, prettyHost, graphQlPath);
    });
  })
  .catch(err => {
    logger.error(err.stack);
    process.exit(1);
  });
