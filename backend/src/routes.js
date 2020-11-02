const express = require('express');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const subjectsController = require('./controllers/subjectController');

const routes = express.Router();

routes.get('/users', userController.list);
routes.post('/users', userController.create);

routes.post('/sessions', sessionController.create);

routes.post('/subjects', subjectsController.create);
routes.get('/subjects', subjectsController.list);
routes.post('/add-note', subjectsController.addNote);

module.exports = routes;