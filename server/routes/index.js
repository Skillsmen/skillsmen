/* eslint-disable */
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var userController = require('../controllers/user');
var reviewController = require('../controllers/review');
var jobController = require('../controllers/job');

// USERS
// Create a new user
router.post('/user', userController.createUser);
// Retrieve all users
router.get('/user', userController.findAllUsers);
// Retrieve one user by id
router.get('/user/:id', userController.findOneUser);
// Update users infromation
router.put('/user/:id', userController.updateUser);

// REVIEWS
// Create a new review
router.post('/review', reviewController.createReview);
// Find all reviews associated with a given UserId
router.get('/review/:id', reviewController.findUsersReviews);

// JOBS
// Create a new job
router.post('/job', jobController.createJob);
// Retrieve all jobs
router.get('/job', jobController.findJobs);
// Retrieve job by id
router.get('/job/:id', jobController.findSpecificJob);
// Update job
router.put('/job/:id', jobController.updateJob);

module.exports = router;

