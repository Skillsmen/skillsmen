/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Create new job
// (first finds user by id to associate with foreign key)
  createJob(req, res) {
    User.findById(req.body.UserId)
      .then(function(user) {
        Job.create({
          owner: req.body.owner,
          description: req.body.description,
          location: req.body.location,
          timeFrame: req.body.timeFrame,
          vacancies: req.body.vacancies,
          UserId: user.dataValues.id
        }).then(function(review) {
          res.json(review);
        });
      });
  },
//Find all jobs 
  findJobs(req, res) {
    Job.findAll({})
      .then(function (jobs) {
        res.status(200).json(jobs);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  },
// Find a specific job by id
  findSpecificJob(req, res) {
    Job.findById(req.params.id)  
      .then(function (reviews) {
        res.status(200).json(reviews);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  }
};

