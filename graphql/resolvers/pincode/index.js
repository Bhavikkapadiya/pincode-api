"use strict";

const {
  storePinCode
} = require("../../../services/pincodes.js");

const { combineResolvers } = require("graphql-resolvers");

const pincodeResolvers = {
  Query: {
    storePinCode: combineResolvers(storePinCode),
  }
};

module.exports = { pincodeResolvers };
