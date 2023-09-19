"use strict";
const { commonTypeDefs } = require("./common/index.js");
const { pincodeTypeDefs } = require("./pincode/index.js");

const rootType = `
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }
`;

const typeDefs = [
  rootType,
  commonTypeDefs,
  pincodeTypeDefs
];

module.exports = { typeDefs };
