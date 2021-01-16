const express = require('express');
const routes = express.Router();
const Task = require('../controllers/task.js');

let counter = 0;
const tasks = [];

routes.get ('/task', Task.getAll);


routes.put ('/task', Task.create);
   

routes.delete ('/task/:id', Task.delete);

routes.post ('/task/:id', Task.edit);
  

module.exports = routes;