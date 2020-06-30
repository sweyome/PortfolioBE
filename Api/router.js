const express = require('express');
const db = require('../Database/model/model');


const router = express.Router();

router.get('/', (req, res) => {
  db.find()
  .then(contact => {
    res.status(200).json(contact);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.post('/', (req, res) => {
  const userData = req.body;
//! resolve to newly create users
  db.add(userData)
  .then(userData => {
    res.status(201).json(userData);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new user' });
  });
});
//! remove 
router.delete('/:id', (req, res) => {
  const { id } = req.params;

 db.remove(id)
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});

module.exports = router;