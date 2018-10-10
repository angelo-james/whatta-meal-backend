const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller');

//users table routes
router.get('/', ctrl.fetchUsers)
router.get('/:id', ctrl.fetchUser)

module.exports = router;