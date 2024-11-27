const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
// add el resto de rutas

module.exports = router;
