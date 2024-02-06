const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Directors = sequelize.define("director", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
  },

  birthday: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = Directors;
