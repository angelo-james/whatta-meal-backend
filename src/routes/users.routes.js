const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller');
//==================================================================

//==================================================================
router.get('/', ctrl.fetchUsers)
router.get('/:id', ctrl.fetchUser)
//==================================================================

//==================================================================
router.post('/', ctrl.createUser)

module.exports = router;