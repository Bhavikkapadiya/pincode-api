"use strict";
const commonTypeDefs = `

scalar DateTime

type Error{
    errorField:String
    error:String
}
type Meta {
    message : String!
    statusCode : Int!
    status : String!
    type: String
    errorsArr: [Error]
}
`;

module.exports = { commonTypeDefs };
