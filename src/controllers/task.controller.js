const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

const createTask = async (request, response) => {
  const { accountId } = request.params;
  const task = request.body;

  const foundAccount = await prisma.account.findUnique({
    where: {
      id: accountId,
    },
  });

  if (!foundAccount) {
    response.status(404).json({ message: 'Account not found.' });
  }

  const createdTask = await prisma.task.create({
    data: {
      content: task.content,
      accountId,
    },
  });

  if (!createdTask) {
    response.status(500).json({ message: 'Task not created.' });
  }

  response.status(201).json({ message: 'Task successfully created.' });
}

const findTasks = async (request, response) => {
  const { accountId } = request.params;

  const foundAccount = await prisma.account.findUnique({
    where: {
      id: accountId,
    },
  });

  if (!foundAccount) {
    response.status(404).json({ message: 'Account not found.' });
  }

  const foundTasks = await prisma.task.findMany({
    where: {
      accountId,
    },
  });

  response.status(200).json(foundTasks);
}

const updateTask = async (request, response) => {
  const { taskId } = request.params;
  const task = request.body;

  const foundTask = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!foundTask) {
    response.status(404).json({ message: 'Task not found.' });
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      content: task.content,
      finished: task.finished,
    },
  });

  if (!updatedTask) {
    response.status(500).json({ message: 'Task not updated.' });
  }

  response.status(200).json({ message: 'Task successfully updated.' });
}

const deleteTask = async (request, response) => {
  const { taskId } = request.params;

  const foundTask = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!foundTask) {
    response.status(404).json({ message: 'Task not found.' });
  }

  const deletedTask = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  if (!deletedTask) {
    response.status(500).json({ message: 'Task not deleted.' });
  }

  response.status(200).json({ message: 'Task successfully deleted.' });
}

module.exports = {
  createTask,
  findTasks,
  updateTask,
  deleteTask,
}