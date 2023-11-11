const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUserList);
router.get('/get/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/deleteuser/:id', userController.deleteUser);

module.exports = router;