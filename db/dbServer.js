var sequelize = new Sequelize('puffyShirts', 'puffyShirts', 'puffyJackets', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});