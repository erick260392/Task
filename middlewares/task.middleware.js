const { Task } = require('../models/task.model');

// Models

const taskExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id } });

    // If user doesn't exist, send error message
    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found',
      });
    }

    // req.anyPropName = 'anyValue'
    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};
const statusExists = async (req, res, next) => {
  try {
    const { status } = req.params;

    const task = await Task.findAll({ where: { status } });

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'status not found please',
      });
    }
    req.task = task;

    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { statusExists, taskExists };
