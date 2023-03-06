const PrismaClient = require('@prisma/client').PrismaClient;

const prisma = new PrismaClient();

const createAccount = async (request, response) => {
  const account = request.body;

  const foundAccount = await prisma.account.findUnique({
    where: {
      username: account.username,
    },
  });

  if (foundAccount) {
    response.status(409).json({ message: 'Username already exists.' });
  }

  const createdAccount = await prisma.account.create({
    data: {
      name: account.name,
      username: account.username,
      password: account.password,
    },
  });

  if (!createAccount) {
    response.status(500).json({ message: 'Account not created.'});
  }

  response.status(201).json({ message: 'Account successfully created.'});
}

module.exports = {
  createAccount,
}