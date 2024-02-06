const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Generes = sequelize.define("gener", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Generes;
