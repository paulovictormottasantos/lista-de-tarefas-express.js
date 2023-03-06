const accountRouter = require('express').Router();
const accountController = require('../controllers/account.controller');

accountRouter.post('/create', accountController.createAccount);

module.exports = accountRouter;