const express = require('express');
const routes = express.Router();
const Tasks = require('../controllers/tasks');

routes.get ('/', Tasks.getAll);
routes.put ('/', Tasks.create);
routes.delete ('/:id', Tasks.delete);
routes.post ('/:id', Tasks.edit);

module.exports = routes;