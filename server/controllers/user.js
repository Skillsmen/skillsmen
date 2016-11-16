/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
  findAllUsers(req, res) {
    User.findAll({})
      .then(function(users) {
        res.json(users);
      }); 
  }
};

