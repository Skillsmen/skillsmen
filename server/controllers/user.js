/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Retrieve all users
  findAllUsers(req, res) {
    User.findAll({})
      .then(function(users) {
        res.json(users);
      }).catch(function (error) {
        res.status(500).json(error);
      }); 
  },
// Retrieve one user by id
  findOneUser(req, res) {
    User.findById(req.params.id)
      .then(function(user) {
        res.json(user);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  },
// Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  }
};

