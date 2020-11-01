const express = require('express');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/users', userController.list);
routes.post('/users', userController.create);

routes.post('/sessions', sessionController.create);

module.exports = routes;