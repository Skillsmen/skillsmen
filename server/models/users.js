'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    experience: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Users.hasMany(models.Reviews);
      }
    }
  });
  return Users;
};