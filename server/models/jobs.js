'use strict';
module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define('Jobs', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    time_frame: DataTypes.STRING,
    vacancies: DataTypes.SMALLINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Jobs;
};