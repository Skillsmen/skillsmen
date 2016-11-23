/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Create new review
// (first finds user by id to associate with foreign key)
  createReview(req, res) {
    Review.create(req.body).then(function(review) {
      res.json(review);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },
//Find all reviews that are for a specific user(designated by ReviewFor)
  findUsersReviews(req, res) {
    Review.findAll({
      where: {
        ReviewFor: req.params.id
      }
    }).then(function (reviews) {
      res.status(200).json(reviews);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  }
  
};
