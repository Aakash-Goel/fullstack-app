
<h1 align="center">
  <br>
  MEG (MongoDB, ExpressJS, GraphQL) server
  <br>
</h1>

<h4 align="center">A minimal boilerplate server setup to quickly start developing NodeJS applications using most popular frameworks.</h4>

<p align="center">

  <!-- Node version -->
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%20v8.14.0-blue.svg?style=flat"
      alt="node version" />
  </a>

  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/npm/">
    <img src="https://img.shields.io/badge/npm-%3E%3D%20v6.4.1-blue.svg?style=flat"
      alt="npm version" />
  </a>

  <!-- PR welcome -->
  <a href="http://makeapullrequest.com/">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"
      alt="pr welcome" />
  </a>

  <!-- License -->
  <a href="https://github.com/Aakash-Goel/meg-server-setup/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-informational.svg?style=flat"
      alt="mit license" />
  </a>
</p>

<p align="center">
  🔥
  <a href="https://github.com/Aakash-Goel/mern-client-setup">
    Checkout
  </a>
  our
  <a href="https://github.com/Aakash-Goel/mern-client-setup">
    minimal react redux starter
  </a>
  with MaterialUI and NextJS.
</p>

## Table of Contents
- [Getting Started](#getting-started)
    - [Built With](#built-with)
    - [Prerequisites](#prerequisites)
    - [Dev Setup](#dev-setup)
- [Structure and Naming](#structure-and-naming)
- [Tech Stack](#tech-stack)
- [Licensing](#licensing)

<a name="getting-started"></a>

## 1. Getting started
<img src="https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png" width="150" height="150">

<a name="built-with"></a>

### 1.1 Built With
The server boilerplate setup is built with some of the most popular frameworks like:

* [MongoDB](https://www.mongodb.com/) (M)
    > MongoDB is an object-oriented, simple, dynamic, and scalable __NoSQL__ database. It is based on the NoSQL document store model. The data objects are stored as separate documents inside a collection — instead of storing the data into the columns and rows of a traditional relational database. MongoDB is __free and open-source__. MongoDB uses __JSON-like documents__ to store data. General distributions for MongoDB support Windows, Linux, Mac OS X. [read more...](https://www.mongodb.com/what-is-mongodb)

* [ExpressJS](https://expressjs.com/) (E)
    > Express.js is a framework used for __Node__ and it is most commonly used as a web application for __node js__. Express is just a module framework for Node that can use for applications that are based on server/s that will "listen" for any input/connection requests from clients. [read more...](https://expressjs.com/)

* [GraphQL](https://graphql.org/) (G)
    > GraphQL is an open source __query language__ created by Facebook. GraphQL is becoming the new standard for API development. GraphQL APIs have a strongly typed schema. With GraphQL, the client can dictate the shape of the response objects returned by the API. A GraphQL operation is either a __query__ (read), __mutation__ (write), or __subscription__ (continuous read). [read more...](https://graphql.org/learn/)

<a name="prerequisites"></a>

### 1.2 Prerequisites
MEG server uses [MongoDB](https://www.mongodb.com/), [ExpressJS](https://expressjs.com/) and [GraphQL](https://graphql.org/). A prior knowledge of these frameworks would be good. The setup also uses [Apollo Server](https://www.apollographql.com/docs/apollo-server/) which is the best and popular way to quickly build a production-ready, self-documenting API for GraphQL clients, using data from any source. Other prerequisites are as follows:

* NodeJS __>= v8.14.0__

* NPM __>= v6.4.1__

<a name="dev-setup"></a>

### 1.3 Dev Setup

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```shell
# Clone this repository
$ git clone https://github.com/Aakash-Goel/meg-server-setup.git

# Go into the repository
$ cd meg-server-setup

# Install dependencies
$ npm install

# Run the app
$ npm start
```

<a name="structure-and-naming"></a>

## 2. Structure and Naming
![Structure and Naming](https://raw.githubusercontent.com/elsewhencode/project-guidelines/master/images/folder-tree.png)

* Organize your files around product features / pages / components, not roles.


    **Bad**

    ```
    .
    ├── resolvers
    |   ├── productResolvers.js
    |   └── userResolvers.js
    ├── schemas
    |   ├── productSchema.js
    |   └── userSchema.js
    ├── models
    |   ├── product.js
    |   └── user.js
    ```

    **Good**

    ```
    .
    ├── product
    |   ├── index.js  # import and export graphQL schema and resolver
    |   ├── model.js  # mongoDB schema definition
    |   └── resolvers.js  # graphQL actions
    |   └── schema.js # graphQL schema definition
    ├── user
    |   ├── index.js
    |   ├── model.js
    |   └── resolvers.js
    |   └── schema.js
    ```

    _Why:_
    > Instead of a long list of files, you will create small modules that encapsulate one responsibility and so on. It gets much easier to navigate through and things can be found at a glance.

* Put your additional test files to a separate test folder to avoid confusion.

    _Why:_
    > It is a time saver for other developers or DevOps experts in your team.

* Import your graphQL resolvers in a `./rootResolver.js` file and add it to the `rootResolver` array.

    _Why:_
    >rootResolver will contain all your application graphQL resolvers which then used in the ApolloServer.

* Import your graphQL schema in a `./rootSchema.js` file and add it to the `rootSchema` array.

    _Why:_
    >rootSchema will contain all your application graphQL schema which then used in the ApolloServer.

<a name="tech-stack"></a>

## 3. Tech Stack
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Circle-icons-stack.svg/2000px-Circle-icons-stack.svg.png" width="120" height="120">

This is a server setup independent of front end tech stack. We use some of the most popular and widely used framework for developing NodeJS full-stack application. These are as follows:

* [MongoDB](https://www.mongodb.com/) (M)
* [ExpressJS](https://expressjs.com/) (E)
* [GraphQL](https://graphql.org/) (G)
* [Apollo Server](https://www.apollographql.com/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)

<a name="licensing"></a>

## 4. Licensing
![Licensing](https://raw.githubusercontent.com/elsewhencode/project-guidelines/master/images/licensing.png)

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Aakash-Goel/meg-server-setup/blob/master/LICENSE) file for details
