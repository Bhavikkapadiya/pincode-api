"use strict";
const { httpsStatusCodes } = require("./http-status-codes.js");

const success = (message, data, statusCode = 200) => {
  let result = {};
  result.meta = {
    message: message,
    statusCode: statusCode,
    status: "success",
    type: "general",
    errors: [],
  };
  if (data) {
    result.data = data;
  }
  return result;
};

const failure = (
  message,
  data,
  statusCode = 400,
  type = "general"
) => {
  let result = {};
  result.meta = {
    message: message,
    statusCode: statusCode,
    status: "error",
    type: type,
    errors: [],
  };
  if (data) {
    if (type === "validation") {
      result.meta.errorsArr = data;
    } else {
      result.data = data;
    }
  } else result.data = {};
  return result;
};

module.exports = {
  success,
  failure
};
