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

routes.post('/get-user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        userId: Joi.string().required().length(8),
    })
}), userController.getName);

// SESIONS

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        userId: Joi.string().required().length(8),
        password: Joi.string().required(),
    })
}), sessionController.create);

// SUBJECTS

routes.post('/subjects', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), subjectsController.create);

routes.get('/subjects', subjectsController.list);

routes.post('/add-note', celebrate({
    [Segments.BODY]: Joi.object().keys({
        subject: Joi.string().required(),
        note: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), subjectsController.addNote);

// ANOTATIONS

routes.post('/anotations', celebrate({
    [Segments.BODY]: Joi.object().keys({
        subject_id: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        date: Joi.string().required().length(10),
    })
}), anotationsController.create);

routes.get('/anotations', anotationsController.list);

routes.delete('/anotations', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
        id: Joi.number().required(),
    }).unknown()
}), anotationsController.delete);

// MESSAGES

routes.post('/messages', celebrate({
    [Segments.BODY]: Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required().min(8).max(12),
        message: Joi.string().required(),
    })
}), messageController.create);

module.exports = routes;