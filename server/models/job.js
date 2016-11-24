/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    hires: DataTypes.INTEGER,
    title: DataTypes.STRING,
    pay: DataTypes.STRING,
    profession: DataTypes.STRING,
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

