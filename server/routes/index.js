var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.post('/users', function(req, res) {
  console.log('im up in this post...', req.body);
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

module.exports = router;
