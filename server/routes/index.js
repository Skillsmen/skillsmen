var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.post('/users', function(req, res) {
  models.Users.create({
    name: req.body.name,
    profession: req.body.profession,
    description: req.body.description,
    experience: req.body.experience,
    location: req.body.location
  }).then(function(user) {
    res.json(user);
  });
});

router.get('/users', function(req, res) {
  models.Users.findAll({}).then(function(users) {
    res.json(users);
  });
});

module.exports = router;

