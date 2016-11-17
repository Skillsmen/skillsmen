/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    experience: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Job);
        User.hasMany(models.Review, {foreignKey: 'ReviewFrom'});
        User.hasMany(models.Review, {foreignKey: 'ReviewFor'});  
      }
    },
    freezeTableName: true
  });

  return User;
};

