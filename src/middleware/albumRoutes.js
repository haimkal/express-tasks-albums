const Albums =require('../controllers/albums');
const express = require('express');
const routes = express.Router();


routes.get('/', Albums.getAll);
routes.put('/', Albums.create);
routes.delete('/:id', Albums.delete);
routes.post('/:id', Albums.edit);

module.exports = routes;