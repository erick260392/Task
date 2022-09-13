const { DATE } = require('sequelize');
const { Task } = require('../models/task.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTasksByStatus = async (req, res) => {
  try {
    const { task } = req;

    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, userId, limitDate, startDate } = req.body;

    const NewTask = await Task.create({
      title,
      userId,
      limitDate,
      startDate,
    });

    res.status(201).json({
      status: 'success',
      data: { NewTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { finishDate } = req.body;

    const { task } = req;
   

let dateFinish = Date.parse (finishDate)
let dateLimit = Date.parse (task.limitDate)



if (dateFinish <= dateLimit) {
  await task.update({finishDate, status: 'completed' });
    console.log('tarea completada a tiempo')
    } else  {
     await task.update({finishDate, status:'late' });
      console.log('tarea completada tarde')
    }

    res.status(200).json({
      status: 'success',
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { task } = req;

    await task.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getAllTasksByStatus,
  createTask,
  deleteTask,
  updateTask,
};
