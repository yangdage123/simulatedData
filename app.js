var express = require('express');
var config = require('./config');
const e = require("express");
var app = express();
var port = config.port || 3000;
var routes = config.routes || [];
var defaultMethod = (config.defaultMethod || 'get').toLowerCase();
//this is modify by vim
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

function formatResponse(res, p) {
    let c = 'send';
    const { statusCode, data } = p;
    if (Object.prototype.toString.call(data) === '[object Object]') {
        c = 'json';
    }
    if (statusCode) {
        return res.status(statusCode)[c](data);
    }
    return res[c](data);
}

//
for(var i = 0; i < routes.length; i++){
    (function (n) {
        var router = routes[n],
            method = (router.method || defaultMethod).toLowerCase();
        app[method](router.path, function (req, res) {
            formatResponse(res, router);
        });
    })(i)
}

var server = app.listen(port, function () {
   console.log('server start!listen ' + port +'...');
});
