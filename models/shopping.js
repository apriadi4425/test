'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shopping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shopping.init({
    name: DataTypes.STRING,
    create_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Shopping',
  });
  return Shopping;
};