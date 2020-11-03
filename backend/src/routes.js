const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const subjectsController = require('./controllers/subjectController');
const anotationsController = require('./controllers/anotationsController'); 
const messageController = require('./controllers/messageController');

const routes = express.Router();

// USERS

routes.get('/users', userController.list);

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required().min(8).max(12),
    })
}), userController.create);

routes.post('/get-user', userController.getName);

// SESIONS

routes.post('/sessions', sessionController.create);

// SUBJECTS

routes.post('/subjects', subjectsController.create);

routes.get('/subjects', subjectsController.list);

// NOTE

routes.post('/add-note', subjectsController.addNote);

// ANOTATIONS

routes.post('/anotations', anotationsController.create);

routes.get('/anotations', anotationsController.list);

routes.delete('/anotations', anotationsController.delete);

// MESSAGES

routes.post('/messages', messageController.create);

module.exports = routes;