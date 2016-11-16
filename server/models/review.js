/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Review.belongsTo(models.User, {
        //   as: 'reviewFor',
        //   constraints: false
        // });
        // Review.belongsTo(models.User, {
        //   as: 'reviewFrom',
        //   constraints: false
        // });
      }
    },
    freezeTableName: true
  });

  return Review;
};

