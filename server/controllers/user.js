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
      }); 
  },
// Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      });
  }
};

