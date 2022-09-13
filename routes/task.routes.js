const express = require('express');

// Controllers
const {
  getAllTasks,
  getAllTasksByStatus,
  createTask,
  deleteTask,
  updateTask
} = require('../controllers/task.controller');

//Middlewares

const { statusExists, taskExists } = require('../middlewares/task.middleware');
const { createTaskValidators } = require('../middlewares/validador.middleware');
const taskRouter = express.Router();

taskRouter.get('/', getAllTasks);

taskRouter.get('/:status', statusExists, getAllTasksByStatus);

taskRouter.post('/', createTaskValidators, createTask);

taskRouter.patch('/:id', taskExists,updateTask );

taskRouter.delete('/:id', taskExists, deleteTask);

module.exports = { taskRouter };
