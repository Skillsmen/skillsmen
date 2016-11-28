/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    description: DataTypes.TEXT,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    hires: DataTypes.INTEGER,
    title: DataTypes.STRING,
    pay: DataTypes.STRING,
    profession: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
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

