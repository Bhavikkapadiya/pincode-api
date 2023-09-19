"use strict";
const { pincodeResolvers } = require("./pincode/index.js");

const resolvers = [
  pincodeResolvers,
];

module.exports = { resolvers };
