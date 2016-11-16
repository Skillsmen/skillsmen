/* eslint-disable */
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var userController = require('../models/user');

// Create a new user
router.post('/user', function(req, res) {
  models.User.create(req.body)
    .then(function(user) {
      res.json(user);
    });
});

// Create a new review
router.post('/review', function(req, res) {
  models.User.findById(req.body.UserId)
    .then(function(user) {
      models.Review.create({
        comment: req.body.comment,
        rating: req.body.rating,
        UserId: user.dataValues.id
      }).then(function(review) {
        res.json(review);
      });
    });
});

// Retrieve all users
router.get('/user', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

// Creates route that finds all users and their associated reviews
// (Not super useful, but created for testing/ practice purposes)
router.get('/userReview', function(req, res) {
    models.User.findAll({
      //Return all reviews that have a matching UserId for each User
      include: models.Review
    }).then(function (users) {
      res.status(200).json(users);
    }).catch(function (error) {
      res.status(500).json(error);
    });
})

// Find all reviews associated with a given UserId
router.get('/review/:id', function(req, res) {
  console.log('req.params', req.params);
  models.Review.findAll({
    where: {
      UserId: req.params.id
    }
  }).then(function (reviews) {
    console.log('reviews after join', reviews);
    res.status(200).json(reviews);
  }).catch(function (error) {
    res.status(500).json(error);
  });
});

module.exports = router;

