const albumRoutes = require('../middleware/albumRoutes');
const express = require('express');
const routes = express.Router();
const tasksRoutes = require('../middleware/tasksRoutes');



routes.use('/album', albumRoutes);  
routes.use('/task', tasksRoutes );

module.exports = routes;