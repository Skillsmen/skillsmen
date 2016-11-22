/* eslint-disable */
console.disableYellowBox = true;
'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var db        = {};
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];

// Establish connection to database
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: true,
  });
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Imports the files in the current directory.
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Create associations between models if they exist
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// Remove {force:true} later. Drops tables if exist/change
// Good for dev env but will need to get rid of it when want to persist changes
sequelize.sync({force: true});     

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
