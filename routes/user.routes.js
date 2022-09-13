const express = require('express');

// Controllers
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

//Middlewares

const { userExists } = require('../middlewares/user.middleware');
const {
  createUserValidators,
} = require('../middlewares/validador.middleware.js');

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

usersRouter.post('/', createUserValidators, createUser);

usersRouter.patch('/:id', userExists, updateUser);

usersRouter.delete('/:id', userExists, deleteUser);

module.exports = { usersRouter };
