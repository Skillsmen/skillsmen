/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Create new job
// (first finds user by id to associate with foreign key)
  createJob(req, res) {
        Job.create(req.body).then(function(job) {
          res.status(201).json(job);
        }).catch(function (error) {
          res.status(500).json(error);
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
      .then(function (job) {
        res.status(200).json(job);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  }
};

