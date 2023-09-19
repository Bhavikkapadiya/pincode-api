"use strict";

require("dotenv").config();

module.exports.config = {
  port: process.env.PORT || 5001,
  
  pghost: process.env.PGHOST,
  pgport: process.env.PGPORT || 5432,
  pgdatabase: process.env.PGDATABASE,
  pguser: process.env.PGUSER,
  pgpassword: process.env.PGPASSWORD,
  pgdialect: process.env.DIALECT,
};
