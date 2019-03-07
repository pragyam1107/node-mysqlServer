var Router = require('express').Router();
var Controller = require('../controller');
Router.post('/', Controller.csvPoster);
Router.get('/', Controller.getData);
module.exports = Router;