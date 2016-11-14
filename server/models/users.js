'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    experience: DataTypes.SMALLINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};