/* eslint-disable */
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var userController = require('../models/user');

router.post('/user', function(req, res) {
  models.User.create(req.body)
    .then(function(user) {
      res.json(user);
    });
});

router.post('/review', function(req, res) {
  console.log('req.body', req.body)
  models.User.findById(req.body.UserId)
    .then(function(user) {
      console.log('userr!!!', user);
      models.Review.create({
        comment: req.body.comment,
        rating: req.body.rating,
        UserId: user.dataValues.id
      }).then(function(review) {
        res.json(review);
      });
    });
//   models.Review.create({
//     comment: req.body.comment,
//     rating: req.body.rating,
//     UserId: req.body.userId,
//   }).then(function(review) {
//     res.json(review);
//   });
});

router.get('/user', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

router.get('/userReview', function(req, res) {
  userController.findAllUserReviews(req, res);
})

module.exports = router;

