"use strict";
const pincodeTypeDefs = `

  type CommonResponse {
    meta: Meta!
  }

  type PincodeError {
    pincode: String
    error: String
  }

  type FetchPincodeResponse {
    data: [PincodeError]
    meta: Meta!
  }

  extend type Query {
    storePinCode: FetchPincodeResponse
  }
`;

module.exports = { pincodeTypeDefs };
