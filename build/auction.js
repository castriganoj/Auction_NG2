"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var model_1 = require("./model");
var app = express();
app.use('/node_modules', express.static(path.join('./client/node_modules')));
app.use('/', express.static(path.join('./client/dist')));
app.get('/products', function (req, res) {
    res.json(model_1.getProducts(req.query));
});
app.get('/products/:id', function (req, res) {
    res.json(model_1.getProductById(parseInt(req.params.id)));
});
app.get('/products/:id/reviews', function (req, res) {
    res.json(model_1.getReviewsByProductId(parseInt(req.params.id)));
});
// const httpServer: HttpServer = app.listen(8000, 'localhost', () => {
//   const {address, port} = httpServer.address();
//   console.log('Listening on %s %s', address, port);
// });
var port = normalizePort(process.env.PORT || '3000');
var httpServer = app.listen(port, function () {
    var _a = httpServer.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
