const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// Routes
router.get('/', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;
