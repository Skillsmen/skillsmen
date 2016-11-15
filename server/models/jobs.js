module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define('Jobs', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    time_frame: DataTypes.STRING,
    vacancies: DataTypes.SMALLINT,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Jobs.belongsTo(models.Users);
      },
    },
  });
  return Jobs;
};
