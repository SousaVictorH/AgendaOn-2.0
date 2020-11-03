const express = require('express');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const subjectsController = require('./controllers/subjectController');
const anotationsController = require('./controllers/anotationsController'); 

const routes = express.Router();

routes.get('/users', userController.list);
routes.post('/users', userController.create);

routes.post('/get-user', userController.getName);

routes.post('/sessions', sessionController.create);

routes.post('/subjects', subjectsController.create);
routes.get('/subjects', subjectsController.list);
routes.post('/add-note', subjectsController.addNote);

routes.post('/anotations', anotationsController.create);
routes.get('/anotations', anotationsController.list);
routes.post('/delete-anotation', anotationsController.delete);

module.exports = routes;