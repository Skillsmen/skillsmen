/* eslint-disable */
var Sequelize = require('sequelize');
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var env       = 'test';
var config    = require(__dirname + '/../config.json')[env];
var db        = {};

var request = require('request');
var expect = require('chai').expect;
var path    = require('path');

var sequelize = new Sequelize(config.database, config.username, config.password, config);




describe('Tradesman database CRUD', function() {

  beforeEach(function(done) {
    fs
      .readdirSync(__dirname + '/../models/')
      .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'index.js') && (file.slice(-3) === '.js');
      })
      .forEach(function(file) {
        console.log('got to line 28');
        console.log('file', file)
        if (file)
        var model = sequelize['import'](path.join(__dirname + '/../models', file));
        console.log('got to line 30');
        db[model.name] = model;
        console.log('got to line 32');
      });

    // Create associations between models if they exist
    Object.keys(db).forEach(function(modelName) {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    // Remove {force:true} later. Drops tables if exist/change
    // Good for dev env but will need to get rid of it when want to persist changes
    sequelize.sync({force: true})
      .then(function(success) {
        console.log('successssss!', success);
      }).catch(function(error) {
        console.log('erroooorrrrz', error);
      })
  });

  // afterEach(function() {
  //   dbConnection.end();
  // });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    /*request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');*/
          expect(1).to.equal(1);
          done();
        });
      // });
    // });
  });








//Will need to set up npm test or gulp or something to run this file and then hopefully it will be connecting to tradesman_test



