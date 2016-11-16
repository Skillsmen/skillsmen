/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
  // Get a list of all users using model.findAll()
  findAllUserReviews(req, res) {
    User.findAll({
      //Return all reviews that have a matching userId for each User
      include: Review
    }).then(function (users) {
      res.status(200).json(users);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },

  // Get a user by unique ID using model.findById()
  findOneUserReview(req, res) {
    User.findById(req.params.id, {
      include: Review
    }).then(function (user) {
      res.status(200).json(user);
    }).catch(function (error){
      res.status(500).json(error);
    });
  }
};
