const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middlware');

// gets a list of users
router.get('/', restricted, (req, res) => {
   Users.find()
   .then(users => {
       res.status(200).json({ data: users });
   })
   .catch(err => {
       res.status(500).json({ message: 'Failed getting users'});
   });
});

// gets the specified user by id
router.get('/:id', restricted, (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.status(200).json({ data: user });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed getting user'});
    });
});


module.exports = router;