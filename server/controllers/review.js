/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Create new review
// (first finds user by id to associate with foreign key)
  createReview(req, res) {
    User.findById(req.body.UserId)
      .then(function(user) {
        Review.create({
          comment: req.body.comment,
          rating: req.body.rating,
          UserId: user.dataValues.id
        }).then(function(review) {
          res.json(review);
        });
      });
  }
};
