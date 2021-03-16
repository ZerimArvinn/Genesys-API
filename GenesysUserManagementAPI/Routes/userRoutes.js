const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');     // Importing user controllers

// TODO -- Create Validation step to validate user objects before passing it to userController
// if it passes, proceed to userController, else return with details on which values aren't in the correct format

// Sign up endpoint
router.post('/signup', userController.createUser);

// login endpoint
router.post('/login', userController.logIn);

// Route to listing all user objects
router.get('/', userController.viewUsers);

// Route to get user by id
router.get('/:id', userController.getUserById);

// Route to edit user objects
router.put('/:id', userController.updateUser);

// Route to delete user object by id
router.delete('/:id', userController.deleteUser);


module.exports = router;