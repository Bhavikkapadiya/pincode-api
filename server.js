"use strict";

const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { config } = require("./config/generals.js");
const { resolvers } = require("./graphql/resolvers/index.js");
const { typeDefs } = require("./graphql/schema/index.js");
const { expressMiddleware } = require("@apollo/server/express4");

const { port } = config;
const app = express();
app.use(cors(), express.json());
const { failure } = require("./utils/helper.js");
const { httpsStatusCodes } = require("./utils/http-status-codes.js");

// Creating Applollo Server for Graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (formattedError) => {
    return failure(
      formattedError.message,
      null,
      httpsStatusCodes.BAD_REQUEST,
      "exception",
      formattedError.extensions.code
    );
  },
});

server.start().then(async () => {
  app.use(
    "/gql",
    expressMiddleware(server)
  );
  // Starting Express Server
  await new Promise((resolve) => app.listen({ port }, resolve));
});
