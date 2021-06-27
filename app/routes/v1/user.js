const express = require('express');
const router = express.Router();
var UserModel = require('../../models/userModel.js');

// GET
router.get('/', (req, res) => {
  UserModel
    .find()
    .then( (users) => {
      res.json(users);
    });
});

router.get('/:id', (req, res) => {
  const UserId = req.params.id;
  UserModel
    .findById(UserId, (err, user) => {
      res.json(user)
    });
});

// POST
router.post('/', (req, res) => {
  const User = new UserModel();
  User.name = req.body.name;
  User.screen_name = req.body.screen_name;
  User.bio = req.body.bio;

  User.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.json({
        message: 'User Post Success!'
      })
    }
  })
});

// put
router.put('/:id', (req, res) => {
  const UserId = req.params.id;
  UserModel.findById(UserId, (err, user) => {
    if(err) {
      res.send(err);
    } else {
      user.name = req.body.name;
      user.screen_name = req.body.screen_name;
      user.bio = req.body.bio;

      user.save((err) => {
        if(err) {
          res.send(err);
        } else {
          res.json({
            message: 'Success Put'
          });
        }
      });
    }
  });
});

module.exports = router;
