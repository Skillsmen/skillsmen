'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define('Reviews', {
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    ratingUser: DataTypes.INTEGER,
    ratedUser: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Reviews.belongsTo(models.Users);
      }
    }
  });
  return Reviews;
};