"use strict";

const {
  success,
  failure,
} = require("../utils");
const { PincodeModel } = require("../models");

const storePinCode = async (_, input) => {
  try {
    const pincodes = ['380006380006', '380015', '382424', '380024', '380009', '382250', '380016', '380026', '380019', '382120', '382120'];
    const wrongPincodes = [];
    for (const pincode of pincodes) {

      const data = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const response = await data.json();

      if(response[0].Status != 'Success'){
        wrongPincodes.push({pincode, error: response[0].Message});
      } else {
        const { Pincode, Region, District, State } = response[0].PostOffice[0];
        const pincodeObj = {
          pincode: Pincode,
          area: Region,
          city: District,
          state: State
        }

        await PincodeModel.create(pincodeObj);
      }
    }

    if (wrongPincodes.length > 0) {
      return failure("Error saving below codes into the database", wrongPincodes);
    } else {
      return success("Successfully saved pincodes", []);
    }
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  storePinCode
};
