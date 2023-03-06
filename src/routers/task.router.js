const taskRouter = require('express').Router();
const taskController = require('../controllers/task.controller');

taskRouter.post('/create/:accountId', taskController.createTask);
taskRouter.get('/find/:accountId', taskController.findTasks);
taskRouter.patch('/update/:taskId', taskController.updateTask);
taskRouter.delete('/delete/:taskId', taskController.deleteTask);

module.exports = taskRouter;