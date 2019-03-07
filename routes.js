var path = require('path');
var express = require('express');
var router = express.Router();
var api = require('../user.api');

module.exports = function (app) {
    app.use('/', api);
}