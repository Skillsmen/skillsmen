module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    user_id: DataTypes.INTEGER,
    rating: DataTypes.SMALLINT,
    comments: DataTypes.TEXT,
    date: DataTypes.DATE,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Reviews.belongsTo(models.Users);
      },
    },
  });
  return Reviews;
};
