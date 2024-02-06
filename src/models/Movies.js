const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Movies = sequelize.define("movie", {
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

  image: {
    type: DataTypes.STRING,
  },

  synopsis: {
    type: DataTypes.STRING,
  },

  releaseYear: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = Movies;
