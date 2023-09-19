"use strict";
const { config } = require("../generals.js");

const dbConfig = {
  local: {
    username: config.pguser,
    password: config.pgpassword,
    database: config.pgdatabase,
    host: config.pghost,
    dialect: config.pgdialect,
    dialectOptions: {
      bigNumberStrings: true,
    },
  }
};

module.exports = dbConfig;
