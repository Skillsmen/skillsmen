'use strict';
module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define('Jobs', {
    owner: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    timeFrame: DataTypes.STRING,
    vacancies: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Jobs.belongsTo(models.Users);
      }
    }
  });
  return Jobs;
};