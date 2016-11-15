module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    experience: DataTypes.SMALLINT,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Users.hasMany(models.Reviews);
      },
    },
  });
  return Users;
};
