/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;
var bcrypt = require('bcrypt');

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
    const username = req.body.username;
    User.findAll({ 
      where: { 
        username: username,
      },
      attributes: [
        'id',
        'password',
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
      const hashed = userRecord[0].password;
      const plainTextPassword = req.body.password;
      const match = bcrypt.compareSync(plainTextPassword, hashed);
      delete userRecord[0].password
      if (match) {
        res.json(userRecord[0]);
      } else {
        res.status(400)
      }
    }).catch(function (error) {
      console.log('----------------------------------')
      console.log('error: ', error)
      console.log('----------------------------------')
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
    const plainText = req.body.password;
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = { 
      username: req.body.username,
      password: hash,
      name: req.body.name,
      profession: req.body.profession,
      description: req.body.description,
      experience: req.body.experience,
      location: req.body.location,
      mobile: req.body.mobile,
      profilePicUrl: req.body.profilePicUrl,
    }
    User.create(newUser)
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

