# Simple GraphQL Schema Starter Project

Bare bones GraphQL schema starter project for prototyping, validating and designing GraphQL schemas.

# Quick Start

Clone the repo

    git clone git@github.com:buymeasoda/graphql-schema-starter.git

Install dependencies and run GraphQL server

    cd graphql-schema-starter
    yarn && yarn start

Add schema type definitions and mock resolvers to `index.js`, then test schema via GraphiQL editor

    http://localhost:4001/

# Guide

For people interested in learning about the underlying packages and configuration so they can apply the knowledge to their own projects - the following guide steps through the implementation.

## Create Project

Create and navigate to a new empty project directory

    mkdir project
    cd project

## Install Dependencies

Initialise project (`-y` to skip `package.json` questions)

    yarn init -y

Install GraphQL and Apollo Server

    yarn add graphql apollo-server

Install nodemon for automated server reloading

    yarn add --dev nodemon

# Packages

## GraphQL

`graphql`

- Main GraphQL JS library code
- https://graphql.org/graphql-js/

`apollo-server`

- Apollo GraphQL server (with built in field mocking)
- https://www.apollographql.com/docs/apollo-server/

## Utilities

`nodemon`

- Monitor source code and automatically restart node server
- https://nodemon.io/

# Project Files

## JavaScript

Create and edit `index.js` in the root directory to configure the GraphQL server and define the GraphQL schema implementation.

`index.js`

```js
const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    foo: String
  }
`;

const server = new ApolloServer({typeDefs, mockEntireSchema: true});

server.listen(4001).then(({url}) => console.log(`Server: ${url}`));
```

# Scripts

Add nodemon script to `package.json` for running Apollo Server and GraphiQL editor.

## Script Configuration

Edit `package.json` to add `scripts` entry

```json
"scripts": {
  "start": "nodemon index.js"
},
```

## Run GraphQL Server

Start Apollo Server and monitor for changes

    yarn start

Visit the server URL to query and test the schema using GraphiQL

    http://localhost:4001/
