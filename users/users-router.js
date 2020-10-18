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

// updates the specified user
router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body; 

    Users.findById(id)
    .then(user => {
        if(user) {
            Users.updateUser(id, changes)
            .then(updatedUser => {
                res.json({ data: updatedUser });
            })
        } else {
            res.status(404).json({ message: 'Could not find user with given id' });
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update user' });
      });
});

// removes the specified user
router.delete('/:id', (req, res) => {
    Users.removeUser(req.params.id)
    .then(count => {
        res.json({ data: count });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete user'});
    });
});

module.exports = router;