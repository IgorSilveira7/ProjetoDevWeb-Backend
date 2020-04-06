const {Router} = require('express');
const routes = new Router();

const usersController = require('./controllers/usersController');
const animesController = require('./controllers/animesController');
const episodesController = require('./controllers/episodesController');
const seasonsController = require('./controllers/seasonsController');

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.findById);
routes.post('/users', usersController.store);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.delete);

routes.get('/users/:id/animes',animesController.index);
routes.post('/users/:id/animes', animesController.store);
routes.put('/users/:id/animes/:id_anime', animesController.update);
routes.delete('/users/:id/animes/:id_anime', animesController.delete);

routes.put('/users/:id/animes/:id_anime/episode', episodesController.update);
routes.put('/users/:id/animes/:id_anime/season', seasonsController.update);


module.exports = routes;