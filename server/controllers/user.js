/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;

module.exports = {
// Retrieve all users
  findAllUsers(req, res) {
    User.findAll({include: Review})
      .then(function(users) {
        res.json(users);
      }).catch(function (error) {
        res.status(500).json(error);
      }); 
  },

// Attempt to return user associated with a provided username & password
  signIn(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findAll({ 
      where: { 
        username: username,
        password: password
      },
      attributes: [
        'id',
        'mobile',
        'location',
        'profession',
        'description',
        'name',
        'experience',
        'profilePicUrl'
      ],
      include: Review
    })
    .then(function(userRecord) {
      res.json(userRecord);
    }).catch(function (error) {
      res.status(500).json(error);
    }); 
  },
// Retrieve one user by id (include their associated reviews)
  findOneUser(req, res) {
    User.findById(req.params.id, {
      include: Review
    })
      .then(function(user) {
        res.json(user);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  },
// Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      }).catch(function (error) {
        res.status(500).json(error);
      });
  },
// Update users information
  updateUser(req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (updatedUser) {
      res.status(200).json(updatedUser);
    }).catch(function (error){
      res.status(500).json(error);
    });
  }
};

