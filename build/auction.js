"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var model_1 = require("./model");
// HTTP API
var app = express();
app.use('/node_modules', express.static(path.join('../client/node_modules')));
app.use('/', express.static(path.join('../client/dist')));
app.get('/products', function (req, res) {
    res.json(model_1.getProducts(req.query));
});
app.get('/products/:id', function (req, res) {
    res.json(model_1.getProductById(parseInt(req.params.id)));
});
app.get('/products/:id/reviews', function (req, res) {
    res.json(model_1.getReviewsByProductId(parseInt(req.params.id)));
});
var httpServer = app.listen(8000, 'localhost', function () {
    var _a = httpServer.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
