'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.card)
      models.user.hasMany(models.transaction)


    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    cpr: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};