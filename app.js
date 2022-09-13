const express = require('express');

// Routers
const { usersRouter } = require('./routes/user.routes');
const { taskRouter } = require('./routes/task.routes');

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Define endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', taskRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `this ${req.method}  ${req.url} don't exist in this server`,
  });
});

module.exports = { app };
