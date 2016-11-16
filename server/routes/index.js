/* eslint-disable */
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var userController = require('../controllers/user');
var reviewController = require('../controllers/review');
// Create a new user
router.post('/user', userController.createUser);
// Retrieve all users
router.get('/user', userController.findAllUsers);

// Create a new review
router.post('/review', reviewController.createReview);

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

