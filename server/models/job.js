/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    timeFrame: DataTypes.STRING,
    vacancies: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
         Job.belongsTo(models.User);
      }
    },
    freezeTableName: true
  });

  return Job;
};

