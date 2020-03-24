const {Router} = require('express');
const routes = new Router();

const usersController = require('./controllers/usersController');

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.findById);
routes.post('/users', usersController.store);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

module.exports = routes;