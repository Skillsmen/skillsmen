/* eslint-disable */
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var userController = require('../controllers/user');
var reviewController = require('../controllers/review');
var jobController = require('../controllers/job');

// Create a new user
router.post('/user', userController.createUser);
// Retrieve all users
router.get('/user', userController.findAllUsers);

// Create a new review
router.post('/review', reviewController.createReview);
// Find all reviews associated with a given UserId
router.get('/review/:id', reviewController.findUsersReviews);

// Create a new job
router.post('/job', jobController.createJob);

module.exports = router;

