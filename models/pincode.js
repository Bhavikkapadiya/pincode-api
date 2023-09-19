"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PincodeModel extends Model {
    static associate(models) {

    }
  }
  PincodeModel.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      pincode: {
        type: DataTypes.STRING(100),
      },
      area: {
        type: DataTypes.STRING(100),
      },
      city: {
        type: DataTypes.STRING(100),
      },
      state: {
        type: DataTypes.STRING(15),
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "PincodeModel",
      timestamps: true,
      tableName: "pincodes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return PincodeModel;
};
